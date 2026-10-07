/**
 * Regenerates the still "poster" images shown before each live 3D scene starts
 * (public/images/scenes/<variant>.webp). Run after changing components/FinanceScene.tsx:
 *
 *   1. Build and serve the site, e.g.   npm run build && npx serve out -l 4190
 *   2. node scripts/make-scene-posters.mjs http://localhost:4190
 *
 * Needs Playwright (or patchright) available to Node:  npm i -D playwright && npx playwright install chromium
 * Pages are opened with ?scene-poster, which renders every scene once, as a
 * still, into a readable canvas; each canvas is then saved as a transparent WebP.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OUT_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "images", "scenes");

// One page per variant that shows it.
const PAGES = {
  hero: "/",
  tower: "/",
  network: "/",
  partner: "/",
  gears: "/service/",
  bonds: "/bond/",
  vault: "/fixed-deposit/",
  growth: "/mutual-fund/",
  shield: "/provident-fund/",
  docs: "/annual-return/",
};

/** Works as a standalone script, or as a `--script` for a page-driving runner (gets `page`). */
export default async function run(page, base) {
  // A page-driving runner may pass its own helper as the 2nd argument; only use strings.
  const baseUrl = typeof base === "string" ? base : process.env.BASE_URL ?? "http://localhost:4190";
  await mkdir(OUT_DIR, { recursive: true });
  const done = {};
  for (const url of [...new Set(Object.values(PAGES))]) {
    await page.goto(new URL(url + "?scene-poster", baseUrl).href, { waitUntil: "load" });
    // Each poster-mode scene marks its mount once its still frame is drawn.
    const wanted = Object.entries(PAGES).filter(([v, u]) => u === url && !done[v]).length;
    await page.waitForFunction((n) => document.querySelectorAll("[data-poster-ready]").length >= n, wanted, { timeout: 60000 });
    const shots = await page.evaluate(() =>
      [...document.querySelectorAll("[data-poster-ready]")].map((m) => m.querySelector("canvas").toDataURL("image/webp", 0.86))
    );
    // Scenes appear in page order; map them to variants listed for this page.
    const variants = Object.entries(PAGES).filter(([, u]) => u === url).map(([v]) => v);
    for (const [i, v] of variants.entries()) {
      if (done[v] || !shots[i]) continue;
      const buf = Buffer.from(shots[i].split(",")[1], "base64");
      await writeFile(path.join(OUT_DIR, `${v}.webp`), buf);
      done[v] = `${Math.round(buf.length / 1024)} KB`;
    }
  }
  return done;
}

// Standalone: node scripts/make-scene-posters.mjs [baseUrl]
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { chromium } = await import("playwright").catch(() => import("patchright"));
  const browser = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  console.log(await run(page, process.argv[2]));
  await browser.close();
}
