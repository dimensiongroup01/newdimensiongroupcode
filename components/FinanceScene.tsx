"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/**
 * Decorative 3D illustrations built from three.js primitives.
 * Each variant is a small isometric "diorama" in the brand palette
 * (sky blue + orange) — no text, purely illustrative.
 *
 * Rendering only runs while the canvas is on screen, respects
 * prefers-reduced-motion (renders one still frame), and disposes all
 * GPU resources on unmount.
 */
export type SceneVariant =
  | "hero"
  | "growth"
  | "bonds"
  | "vault"
  | "shield"
  | "network"
  | "partner"
  | "docs"
  | "gears"
  | "tower";

const CYAN = 0x00b4d8;
const CYAN_DIM = 0x007a96;
const ORANGE = 0xff6900;

type Tick = (t: number) => void;

function makeMaterials() {
  const phys = (color: number, o: THREE.MeshPhysicalMaterialParameters = {}) =>
    new THREE.MeshPhysicalMaterial({
      color,
      roughness: 0.28,
      metalness: 0.12,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      ...o,
    });
  return {
    cyan: phys(CYAN),
    cyanDim: phys(CYAN_DIM),
    orange: phys(ORANGE),
    orangeFlat: phys(ORANGE, { flatShading: true, roughness: 0.35 }),
    white: phys(0xf8fafc, { roughness: 0.42 }),
    paper: phys(0xffffff, { roughness: 0.6, clearcoat: 0.2 }),
    navy: phys(0x1e293b, { roughness: 0.45, metalness: 0.35 }),
    gold: phys(0xffb347, { metalness: 0.95, roughness: 0.22, clearcoat: 0.3 }),
    goldDeep: phys(0xff8a1f, { metalness: 0.9, roughness: 0.3, clearcoat: 0.3 }),
    glowOrange: new THREE.MeshBasicMaterial({ color: ORANGE }),
    glowCyan: new THREE.MeshBasicMaterial({ color: CYAN }),
    glass: phys(0x7dd3fc, {
      transparent: true,
      opacity: 0.55,
      roughness: 0.05,
      metalness: 0,
      emissive: new THREE.Color(CYAN),
      emissiveIntensity: 0.35,
    }),
  };
}
type Mats = ReturnType<typeof makeMaterials>;

type Ctx = { core: THREE.Group; extras: THREE.Group; tick: Tick[]; m: Mats };

const easeOutBack = (x: number) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

/* ---------- reusable pieces ---------- */

function contactShadow(size: number, y: number) {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "rgba(0,0,0,0.45)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(size, size),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = y;
  return mesh;
}

function platform(ctx: Ctx, w = 5, d = 5) {
  const g = new THREE.Group();
  const under = new THREE.Mesh(new RoundedBoxGeometry(w + 0.25, 0.14, d + 0.25, 3, 0.06), ctx.m.cyan);
  under.position.y = -0.42;
  const base = new THREE.Mesh(new RoundedBoxGeometry(w, 0.36, d, 4, 0.14), ctx.m.white);
  base.position.y = -0.18;
  g.add(under, base);
  ctx.extras.add(contactShadow(Math.max(w, d) * 1.9, -0.52));
  ctx.core.add(g);
  return g;
}

function coin(ctx: Ctx, r = 0.5) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(r, r, r * 0.24, 48), ctx.m.gold);
  const face = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.72, r * 0.72, r * 0.26, 48), ctx.m.goldDeep);
  const rim1 = new THREE.Mesh(new THREE.TorusGeometry(r * 0.72, r * 0.05, 8, 48), ctx.m.gold);
  rim1.rotation.x = Math.PI / 2;
  rim1.position.y = r * 0.13;
  const rim2 = rim1.clone();
  rim2.position.y = -r * 0.13;
  g.add(body, face, rim1, rim2);
  return g;
}

function coinStack(ctx: Ctx, n: number, pos: THREE.Vector3, r = 0.45, delay = 0.2) {
  const g = new THREE.Group();
  g.position.copy(pos);
  const coins: THREE.Group[] = [];
  for (let i = 0; i < n; i++) {
    const c = coin(ctx, r);
    c.position.set((Math.random() - 0.5) * 0.06, r * 0.13 + i * r * 0.26, (Math.random() - 0.5) * 0.06);
    c.rotation.y = Math.random() * Math.PI;
    coins.push(c);
    g.add(c);
  }
  ctx.tick.push((t) => {
    coins.forEach((c, i) => {
      const p = clamp01((t - delay - i * 0.07) / 0.5);
      c.visible = p > 0;
      c.position.y = r * 0.13 + i * r * 0.26 + (1 - easeOutBack(p)) * 1.2;
    });
  });
  ctx.core.add(g);
  return g;
}

function floatingCoin(ctx: Ctx, pos: THREE.Vector3, r = 0.42, phase = 0, parent: THREE.Object3D = ctx.core) {
  const c = coin(ctx, r);
  const holder = new THREE.Group();
  holder.position.copy(pos);
  c.rotation.x = Math.PI / 2;
  holder.add(c);
  ctx.tick.push((t) => {
    holder.rotation.y = t * 1.2 + phase;
    holder.position.y = pos.y + Math.sin(t * 1.4 + phase) * 0.15;
  });
  parent.add(holder);
  return holder;
}

function bars(ctx: Ctx, heights: number[], origin: THREE.Vector3, gap = 0.72, w = 0.5) {
  const g = new THREE.Group();
  g.position.copy(origin);
  const meshes: THREE.Mesh[] = [];
  heights.forEach((h, i) => {
    const geo = new RoundedBoxGeometry(w, h, w, 3, 0.07);
    geo.translate(0, h / 2, 0);
    const mat = i === heights.length - 1 ? ctx.m.orange : i % 2 ? ctx.m.cyan : ctx.m.cyanDim;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.x = i * gap;
    meshes.push(mesh);
    g.add(mesh);
  });
  ctx.tick.push((t) => {
    meshes.forEach((m, i) => {
      const p = clamp01((t - 0.1 - i * 0.12) / 0.9);
      m.scale.y = Math.max(0.001, easeOutBack(p)) * (1 + Math.sin(t * 1.3 + i) * 0.03 * p);
    });
  });
  ctx.core.add(g);
  return g;
}

function trendLine(ctx: Ctx, pts: THREE.Vector3[], delay = 0.8) {
  const curve = new THREE.CatmullRomCurve3(pts);
  const geo = new THREE.TubeGeometry(curve, 80, 0.055, 10, false);
  const tube = new THREE.Mesh(geo, ctx.m.glowOrange);
  const total = geo.index!.count;
  const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.38, 20), ctx.m.glowOrange);
  const end = curve.getPoint(1);
  const tan = curve.getTangent(1);
  arrow.position.copy(end);
  arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan.normalize());
  const dots = pts.slice(0, -1).map((p) => {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), ctx.m.white);
    s.position.copy(p);
    return s;
  });
  ctx.tick.push((t) => {
    const p = clamp01((t - delay) / 1.2);
    geo.setDrawRange(0, Math.floor((total * p) / 3) * 3);
    const a = clamp01((t - delay - 1.1) / 0.4);
    arrow.scale.setScalar(Math.max(0.001, easeOutBack(a)));
    dots.forEach((d, i) => d.scale.setScalar(Math.max(0.001, clamp01(p * dots.length - i))));
  });
  ctx.core.add(tube, arrow, ...dots);
}

function ring(ctx: Ctx, r: number, tilt: THREE.Euler, speed: number, mat: THREE.Material = ctx.m.glowCyan) {
  const holder = new THREE.Group();
  holder.rotation.copy(tilt);
  const torus = new THREE.Mesh(new THREE.TorusGeometry(r, 0.014, 8, 160), mat);
  torus.rotation.x = Math.PI / 2;
  const bead = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), mat === ctx.m.glowCyan ? ctx.m.glowOrange : ctx.m.glowCyan);
  bead.position.x = r;
  holder.add(torus, bead);
  ctx.tick.push((t) => {
    holder.rotation.y = t * speed;
  });
  ctx.extras.add(holder);
}

function particles(ctx: Ctx, count = 220, rMin = 3.5, rMax = 6.5) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = rMin + Math.random() * (rMax - rMin);
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    pos[i * 3 + 1] = r * Math.cos(ph) * 0.6 + 1;
    pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(
    geo,
    new THREE.PointsMaterial({ color: CYAN, size: 0.05, transparent: true, opacity: 0.75, depthWrite: false })
  );
  ctx.tick.push((t) => {
    pts.rotation.y = t * 0.04;
  });
  ctx.extras.add(pts);
}

function floaters(ctx: Ctx, spots: [number, number, number][]) {
  spots.forEach(([x, y, z], i) => {
    const geo = i % 2 ? new THREE.OctahedronGeometry(0.2) : new THREE.IcosahedronGeometry(0.18);
    const m = new THREE.Mesh(geo, i % 3 === 0 ? ctx.m.orangeFlat : ctx.m.cyan);
    m.position.set(x, y, z);
    ctx.tick.push((t) => {
      m.rotation.x = t * 0.8 + i;
      m.rotation.y = t * 0.6 + i;
      m.position.y = y + Math.sin(t * 1.1 + i * 1.7) * 0.18;
    });
    ctx.extras.add(m);
  });
}

function donut(ctx: Ctx, pos: THREE.Vector3, r = 0.85) {
  const g = new THREE.Group();
  g.position.copy(pos);
  const parts: [number, THREE.Material][] = [
    [0.45, ctx.m.cyan],
    [0.3, ctx.m.orange],
    [0.25, ctx.m.white],
  ];
  let start = 0;
  const segs: THREE.Mesh[] = [];
  parts.forEach(([frac, mat]) => {
    const arc = frac * Math.PI * 2 - 0.06;
    const seg = new THREE.Mesh(new THREE.TorusGeometry(r, 0.26, 20, 64, arc), mat);
    seg.rotation.z = start;
    start += frac * Math.PI * 2;
    segs.push(seg);
    g.add(seg);
  });
  g.rotation.y = -Math.PI / 4;
  // pull the orange slice out slightly, like an exploded pie chart
  const mid = 0.45 * Math.PI * 2 + 0.3 * Math.PI;
  segs[1].position.set(Math.cos(mid) * 0.08, Math.sin(mid) * 0.08, 0);
  ctx.tick.push((t) => {
    g.rotation.z = t * 0.35;
    g.position.y = pos.y + Math.sin(t * 1.2) * 0.12;
  });
  ctx.core.add(g);
}

function certificate(ctx: Ctx, w = 2.4, d = 1.6) {
  const g = new THREE.Group();
  const sheet = new THREE.Mesh(new RoundedBoxGeometry(w, 0.08, d, 2, 0.03), ctx.m.paper);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(w * 0.86, 0.02, 0.16), ctx.m.orange);
  stripe.position.set(0, 0.05, -d * 0.32);
  g.add(sheet, stripe);
  [0, 1, 2].forEach((i) => {
    const line = new THREE.Mesh(new THREE.BoxGeometry(w * (0.6 - i * 0.12), 0.02, 0.07), ctx.m.navy);
    line.position.set(-w * 0.12 + i * w * 0.06, 0.05, -d * 0.05 + i * 0.22);
    g.add(line);
  });
  const seal = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.06, 32), ctx.m.cyan);
  seal.position.set(w * 0.34, 0.07, d * 0.26);
  g.add(seal);
  return g;
}

function gearGeometry(teeth: number, rOuter: number, rInner: number, depth: number) {
  const s = new THREE.Shape();
  const steps = teeth * 4;
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const r = i % 4 < 2 ? rOuter : rInner;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) s.moveTo(x, y);
    else s.lineTo(x, y);
  }
  const hole = new THREE.Path();
  hole.absarc(0, 0, rInner * 0.35, 0, Math.PI * 2, true);
  s.holes.push(hole);
  const geo = new THREE.ExtrudeGeometry(s, {
    depth,
    bevelEnabled: true,
    bevelSize: 0.04,
    bevelThickness: 0.04,
    bevelSegments: 2,
    curveSegments: 24,
  });
  geo.center();
  return geo;
}

function connector(ctx: Ctx, a: THREE.Vector3, b: THREE.Vector3, parent: THREE.Object3D) {
  const len = a.distanceTo(b);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, len, 8), ctx.m.glowCyan);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
  parent.add(m);
  const pulse = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), ctx.m.glowOrange);
  parent.add(pulse);
  const phase = Math.random();
  ctx.tick.push((t) => {
    const p = (t * 0.45 + phase) % 1;
    pulse.position.lerpVectors(a, b, p);
  });
}

/* ---------- variants ---------- */

const builders: Record<SceneVariant, (ctx: Ctx) => void> = {
  hero(ctx) {
    platform(ctx, 5.4, 4.4);
    bars(ctx, [0.8, 1.3, 1.1, 1.9, 2.7], new THREE.Vector3(-1.2, 0, -0.9));
    trendLine(ctx, [
      new THREE.Vector3(-1.2, 1.25, -0.9),
      new THREE.Vector3(-0.48, 1.75, -0.9),
      new THREE.Vector3(0.24, 1.6, -0.9),
      new THREE.Vector3(0.96, 2.4, -0.9),
      new THREE.Vector3(1.9, 3.5, -0.9),
    ]);
    coinStack(ctx, 7, new THREE.Vector3(-1.6, 0, 1.1));
    coinStack(ctx, 4, new THREE.Vector3(-0.7, 0, 1.5), 0.45, 0.5);
    floatingCoin(ctx, new THREE.Vector3(1.4, 1.2, 1.2), 0.45);
    floatingCoin(ctx, new THREE.Vector3(-2.4, 2.4, -0.4), 0.32, 1.5);
    donut(ctx, new THREE.Vector3(1.6, 0.9, 0.8), 0.5);
    ring(ctx, 3.6, new THREE.Euler(0.25, 0, 0.15), 0.25);
    ring(ctx, 4.3, new THREE.Euler(-0.2, 0, -0.1), -0.18, ctx.m.glowOrange);
    particles(ctx);
    floaters(ctx, [[2.8, 3, -1], [-3, 1.2, 1.8], [0.4, 4.2, 1], [3.2, 0.8, 2]]);
  },
  growth(ctx) {
    platform(ctx, 4.8, 4);
    bars(ctx, [0.9, 1.4, 1.2, 2, 2.8], new THREE.Vector3(-1.4, 0, -0.6));
    trendLine(ctx, [
      new THREE.Vector3(-1.4, 1.35, -0.6),
      new THREE.Vector3(-0.68, 1.8, -0.6),
      new THREE.Vector3(0.04, 1.65, -0.6),
      new THREE.Vector3(0.76, 2.5, -0.6),
      new THREE.Vector3(1.6, 3.6, -0.6),
    ]);
    donut(ctx, new THREE.Vector3(1.4, 1.1, 1.1), 0.6);
    coinStack(ctx, 5, new THREE.Vector3(-1.3, 0, 1.2));
    particles(ctx);
    ring(ctx, 3.4, new THREE.Euler(0.2, 0, 0.1), 0.25);
    floaters(ctx, [[2.6, 2.8, -1], [-2.6, 2.4, 1.2], [0, 4.2, 0.8]]);
  },
  bonds(ctx) {
    platform(ctx, 4.6, 4);
    const stack = new THREE.Group();
    const certs: THREE.Group[] = [];
    for (let i = 0; i < 4; i++) {
      const c = certificate(ctx);
      c.position.y = 0.06 + i * 0.13;
      c.rotation.y = -0.15 + i * 0.12;
      certs.push(c);
      stack.add(c);
    }
    stack.position.set(-0.4, 0, -0.3);
    ctx.tick.push((t) => {
      certs.forEach((c, i) => {
        const p = clamp01((t - 0.1 - i * 0.12) / 0.6);
        c.visible = p > 0;
        c.position.y = 0.06 + i * 0.13 + (1 - easeOutBack(p)) * 1.5;
      });
      certs[3].position.y += Math.sin(t * 1.3) * 0.08 + 0.15;
    });
    ctx.core.add(stack);
    coinStack(ctx, 6, new THREE.Vector3(1.5, 0, 1.1), 0.4, 0.6);
    trendLine(ctx, [
      new THREE.Vector3(-1.8, 1.4, 1.2),
      new THREE.Vector3(-0.8, 1.8, 1.4),
      new THREE.Vector3(0.2, 1.7, 1.5),
      new THREE.Vector3(1.4, 2.8, 1.3),
    ], 1);
    floatingCoin(ctx, new THREE.Vector3(1.6, 2.6, -1), 0.38, 0.6);
    ring(ctx, 3.3, new THREE.Euler(0.3, 0, 0.1), 0.22);
    particles(ctx);
    floaters(ctx, [[-2.6, 2.6, -0.6], [2.6, 3.4, 0.6]]);
  },
  vault(ctx) {
    platform(ctx, 4.4, 4);
    const safe = new THREE.Group();
    const body = new THREE.Mesh(new RoundedBoxGeometry(2.2, 2.2, 1.8, 4, 0.2), ctx.m.navy);
    body.position.y = 1.1;
    const door = new THREE.Mesh(new RoundedBoxGeometry(1.8, 1.8, 0.14, 3, 0.06), ctx.m.white);
    door.position.set(0, 1.1, 0.92);
    const dial = new THREE.Group();
    dial.position.set(0, 1.1, 1.02);
    const dialBase = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.12, 40), ctx.m.gold);
    dialBase.rotation.x = Math.PI / 2;
    const dialRing = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.05, 10, 40), ctx.m.orange);
    dialRing.position.z = 0.06;
    dial.add(dialBase, dialRing);
    for (let i = 0; i < 3; i++) {
      const spoke = new THREE.Group();
      spoke.rotation.z = (i * Math.PI * 2) / 3;
      const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.55, 10), ctx.m.navy);
      bar.position.set(0, 0.5, 0.1);
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), ctx.m.orange);
      knob.position.set(0, 0.8, 0.1);
      spoke.add(bar, knob);
      dial.add(spoke);
    }
    [0.55, 1.65].forEach((y) => {
      const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.3, 16), ctx.m.cyan);
      hinge.position.set(-0.95, y, 0.92);
      safe.add(hinge);
    });
    safe.add(body, door, dial);
    safe.position.set(-0.3, 0, -0.4);
    ctx.tick.push((t) => {
      dial.rotation.z = Math.sin(t * 0.8) * 1.4;
    });
    ctx.core.add(safe);
    coinStack(ctx, 5, new THREE.Vector3(1.4, 0, 1.2), 0.4);
    // clock — the "time" in term deposits
    const clock = new THREE.Group();
    const face = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.1, 40), ctx.m.white);
    face.rotation.x = Math.PI / 2;
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.08, 12, 40), ctx.m.cyan);
    const hand1 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.38, 0.04), ctx.m.navy);
    hand1.geometry.translate(0, 0.17, 0);
    hand1.position.z = 0.08;
    const hand2 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.26, 0.04), ctx.m.orange);
    hand2.geometry.translate(0, 0.11, 0);
    hand2.position.z = 0.09;
    clock.add(face, rim, hand1, hand2);
    clock.position.set(1.7, 2.9, -0.4);
    clock.rotation.y = -0.5;
    ctx.tick.push((t) => {
      hand1.rotation.z = -t * 1.2;
      hand2.rotation.z = -t * 0.1;
      clock.position.y = 2.9 + Math.sin(t * 1.2) * 0.12;
    });
    ctx.core.add(clock);
    floatingCoin(ctx, new THREE.Vector3(-2.2, 2.8, 0.8), 0.34, 1);
    ring(ctx, 3.4, new THREE.Euler(0.25, 0, -0.1), 0.2);
    particles(ctx);
  },
  shield(ctx) {
    platform(ctx, 4.2, 4);
    const s = new THREE.Shape();
    s.moveTo(0, 1.3);
    s.bezierCurveTo(0.5, 1.1, 0.9, 1.1, 1.1, 1.05);
    s.lineTo(1.1, 0.2);
    s.bezierCurveTo(1.1, -0.6, 0.5, -1.1, 0, -1.35);
    s.bezierCurveTo(-0.5, -1.1, -1.1, -0.6, -1.1, 0.2);
    s.lineTo(-1.1, 1.05);
    s.bezierCurveTo(-0.9, 1.1, -0.5, 1.1, 0, 1.3);
    const geo = new THREE.ExtrudeGeometry(s, { depth: 0.35, bevelEnabled: true, bevelSize: 0.08, bevelThickness: 0.08, bevelSegments: 4, curveSegments: 32 });
    geo.center();
    const shieldGroup = new THREE.Group();
    const shield = new THREE.Mesh(geo, ctx.m.cyan);
    const inner = new THREE.Mesh(geo, ctx.m.white);
    inner.scale.set(0.78, 0.78, 1);
    inner.position.z = 0.1;
    const check = new THREE.Mesh(
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3([new THREE.Vector3(-0.45, 0.05, 0), new THREE.Vector3(-0.12, -0.3, 0), new THREE.Vector3(0.5, 0.42, 0)], false, "catmullrom", 0),
        40,
        0.1,
        12
      ),
      ctx.m.orange
    );
    check.position.z = 0.35;
    shieldGroup.add(shield, inner, check);
    shieldGroup.position.set(0, 1.9, 0);
    shieldGroup.rotation.y = Math.PI / 4;
    ctx.tick.push((t) => {
      shieldGroup.position.y = 1.9 + Math.sin(t * 1.2) * 0.15;
      shieldGroup.rotation.y = Math.PI / 4 + Math.sin(t * 0.6) * 0.25;
    });
    ctx.core.add(shieldGroup);
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.05, 0.25, 48), ctx.m.navy);
    pedestal.position.y = 0.12;
    ctx.core.add(pedestal);
    coinStack(ctx, 5, new THREE.Vector3(-1.4, 0, 1.2), 0.38);
    coinStack(ctx, 3, new THREE.Vector3(1.4, 0, 1.2), 0.38, 0.5);
    const orbit = new THREE.Group();
    orbit.position.y = 1.9;
    [0, 2.1, 4.2].forEach((a) => floatingCoin(ctx, new THREE.Vector3(Math.cos(a) * 1.9, 0, Math.sin(a) * 1.9), 0.26, a, orbit));
    ctx.tick.push((t) => {
      orbit.rotation.y = t * 0.5;
    });
    ctx.extras.add(orbit);
    particles(ctx);
    ring(ctx, 3.4, new THREE.Euler(0.2, 0, 0.1), -0.2, ctx.m.glowOrange);
  },
  network(ctx) {
    const hub = new THREE.Group();
    hub.position.y = 1.6;
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.8, 0), ctx.m.orangeFlat);
    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 1), new THREE.MeshBasicMaterial({ color: CYAN, wireframe: true, transparent: true, opacity: 0.35 }));
    hub.add(core, shell);
    const sats = [
      { a: 0, mat: ctx.m.cyan },
      { a: (Math.PI * 2) / 3, mat: ctx.m.white },
      { a: (Math.PI * 4) / 3, mat: ctx.m.cyanDim },
    ];
    sats.forEach(({ a, mat }, i) => {
      const p = new THREE.Vector3(Math.cos(a) * 2.3, (i - 1) * 0.5, Math.sin(a) * 2.3);
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.38, 32, 32), mat);
      node.position.copy(p);
      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.58, 0.025, 8, 60), ctx.m.glowCyan);
      halo.position.copy(p);
      ctx.tick.push((t) => {
        halo.rotation.x = t * 0.9 + i;
        halo.rotation.y = t * 0.6;
      });
      hub.add(node, halo);
      connector(ctx, new THREE.Vector3(), p, hub);
      const next = sats[(i + 1) % 3].a;
      connector(ctx, p, new THREE.Vector3(Math.cos(next) * 2.3, ((i + 1) % 3 - 1) * 0.5, Math.sin(next) * 2.3), hub);
    });
    ctx.tick.push((t) => {
      hub.rotation.y = t * 0.3;
      core.rotation.x = t * 0.4;
      core.rotation.z = t * 0.25;
      shell.rotation.y = -t * 0.2;
      hub.position.y = 1.6 + Math.sin(t) * 0.1;
    });
    ctx.core.add(hub);
    ctx.extras.add(contactShadow(5, -0.5));
    ring(ctx, 3.6, new THREE.Euler(0.3, 0, 0.1), 0.2);
    particles(ctx, 260);
  },
  partner(ctx) {
    const g = new THREE.Group();
    g.position.y = 1.4;
    const a = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.24, 32, 80), ctx.m.cyan);
    a.position.x = -0.5;
    const b = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.24, 32, 80), ctx.m.orange);
    b.position.x = 0.5;
    b.rotation.x = Math.PI / 2;
    g.add(a, b);
    ctx.tick.push((t) => {
      g.rotation.y = t * 0.45;
      g.rotation.z = Math.sin(t * 0.5) * 0.2;
      g.position.y = 1.4 + Math.sin(t * 1.1) * 0.12;
    });
    ctx.core.add(g);
    ctx.extras.add(contactShadow(4, -0.4));
    floatingCoin(ctx, new THREE.Vector3(2, 2.4, 0), 0.3, 0.5);
    floatingCoin(ctx, new THREE.Vector3(-2, 0.6, 0.6), 0.26, 2);
    particles(ctx, 160, 2.8, 5);
    ring(ctx, 2.9, new THREE.Euler(0.3, 0, 0.1), 0.25, ctx.m.glowOrange);
  },
  docs(ctx) {
    platform(ctx, 4.4, 3.8);
    const stack = new THREE.Group();
    const sheets: THREE.Group[] = [];
    for (let i = 0; i < 3; i++) {
      const c = certificate(ctx, 2.2, 2.8);
      c.position.y = 0.06 + i * 0.12;
      c.rotation.y = -0.3 + i * 0.18;
      sheets.push(c);
      stack.add(c);
    }
    stack.position.set(-0.3, 0, 0);
    ctx.tick.push((t) => {
      sheets.forEach((s, i) => {
        const p = clamp01((t - 0.1 - i * 0.15) / 0.6);
        s.visible = p > 0;
        s.position.y = 0.06 + i * 0.12 + (1 - easeOutBack(p)) * 1.6;
      });
      sheets[2].position.y += 0.2 + Math.sin(t * 1.2) * 0.08;
    });
    ctx.core.add(stack);
    const pen = new THREE.Group();
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.8, 20), ctx.m.navy);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.3, 20), ctx.m.gold);
    tip.position.y = -1.05;
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.35, 20), ctx.m.orange);
    cap.position.y = 0.75;
    pen.add(barrel, tip, cap);
    pen.position.set(1.3, 1.9, 0.3);
    pen.rotation.set(0.3, 0, -0.7);
    ctx.tick.push((t) => {
      pen.position.y = 1.9 + Math.sin(t * 1.4) * 0.15;
      pen.rotation.z = -0.7 + Math.sin(t * 0.9) * 0.08;
    });
    ctx.core.add(pen);
    const seal = coin(ctx, 0.45);
    const sealHolder = new THREE.Group();
    seal.rotation.x = Math.PI / 2;
    sealHolder.add(seal);
    sealHolder.position.set(-1.6, 2.4, -0.6);
    ctx.tick.push((t) => {
      sealHolder.rotation.y = t;
      sealHolder.position.y = 2.4 + Math.sin(t * 1.3) * 0.12;
    });
    ctx.core.add(sealHolder);
    ring(ctx, 3.3, new THREE.Euler(0.25, 0, 0.1), 0.2);
    particles(ctx);
  },
  gears(ctx) {
    platform(ctx, 4.4, 3.8);
    const big = new THREE.Mesh(gearGeometry(12, 1.1, 0.9, 0.35), ctx.m.cyan);
    big.position.set(-0.55, 1.6, 0);
    const small = new THREE.Mesh(gearGeometry(8, 0.75, 0.57, 0.35), ctx.m.orange);
    small.position.set(1.12, 2.35, 0.05);
    const tiny = new THREE.Mesh(gearGeometry(8, 0.5, 0.36, 0.3), ctx.m.navy);
    tiny.position.set(0.95, 0.95, 0.4);
    const g = new THREE.Group();
    g.add(big, small, tiny);
    g.rotation.y = Math.PI / 5;
    ctx.tick.push((t) => {
      big.rotation.z = t * 0.5;
      small.rotation.z = -t * 0.5 * (12 / 8) + 0.2;
      tiny.rotation.z = -t * 0.9;
    });
    ctx.core.add(g);
    bars(ctx, [0.5, 0.8, 1.2], new THREE.Vector3(-1.6, 0, 1.2), 0.5, 0.36);
    coinStack(ctx, 4, new THREE.Vector3(1.5, 0, 1.2), 0.36);
    ring(ctx, 3.3, new THREE.Euler(0.25, 0, 0.1), 0.2);
    particles(ctx);
    floaters(ctx, [[-2.4, 3, -0.6], [2.6, 3.4, 0.6]]);
  },
  tower(ctx) {
    platform(ctx, 4.6, 4);
    const tower = new THREE.Group();
    const floors = 6;
    const parts: THREE.Object3D[] = [];
    for (let i = 0; i < floors; i++) {
      const f = new THREE.Mesh(new RoundedBoxGeometry(1.7, 0.5, 1.7, 2, 0.05), ctx.m.white);
      f.position.y = 0.25 + i * 0.56;
      const band = new THREE.Mesh(new THREE.BoxGeometry(1.74, 0.2, 1.74), ctx.m.glass);
      band.position.y = f.position.y + 0.03;
      parts.push(f, band);
      tower.add(f, band);
    }
    const roof = new THREE.Mesh(new RoundedBoxGeometry(1.9, 0.14, 1.9, 2, 0.05), ctx.m.orange);
    roof.position.y = floors * 0.56 + 0.05;
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.8, 8), ctx.m.navy);
    mast.position.y = roof.position.y + 0.45;
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), ctx.m.glowOrange);
    beacon.position.y = mast.position.y + 0.42;
    tower.add(roof, mast, beacon);
    tower.position.set(-0.4, 0, -0.4);
    const annex = new THREE.Mesh(new RoundedBoxGeometry(1.3, 1.1, 1.1, 2, 0.06), ctx.m.cyanDim);
    annex.position.set(1.2, 0.55, 0.3);
    const annexTop = new THREE.Mesh(new RoundedBoxGeometry(1.34, 0.1, 1.14, 2, 0.04), ctx.m.white);
    annexTop.position.set(1.2, 1.15, 0.3);
    ctx.tick.push((t) => {
      const p = clamp01((t - 0.1) / 1.4);
      parts.forEach((o, i) => {
        o.visible = p * parts.length > i;
      });
      const r = p >= 1;
      roof.visible = mast.visible = beacon.visible = r;
      beacon.scale.setScalar(1 + Math.sin(t * 4) * 0.3);
    });
    ctx.core.add(tower, annex, annexTop);
    const orbit = new THREE.Group();
    orbit.position.set(-0.4, 2, -0.4);
    [0, 2.1, 4.2].forEach((a) => floatingCoin(ctx, new THREE.Vector3(Math.cos(a) * 2.2, 0, Math.sin(a) * 2.2), 0.3, a, orbit));
    ctx.tick.push((t) => {
      orbit.rotation.y = t * 0.4;
    });
    ctx.extras.add(orbit);
    coinStack(ctx, 4, new THREE.Vector3(1.4, 0, 1.4), 0.34, 1.2);
    particles(ctx);
  },
};

/** Time (s) by which every intro animation has finished — the pose used for posters. */
export const SETTLED_TIME = 4;

export default function FinanceScene({
  variant = "hero",
  className = "",
  startAt = 0,
  poster = false,
  onReady,
}: {
  variant?: SceneVariant;
  className?: string;
  /** Start the timeline here (e.g. SETTLED_TIME to skip the intro and match a poster). */
  startAt?: number;
  /** Render one still frame with a readable buffer, for generating poster images. */
  poster?: boolean;
  /** Called once the first frame is on screen. */
  onReady?: () => void;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance", preserveDrawingBuffer: poster });
    } catch {
      return; // no WebGL — the page simply shows its decorative background
    }
    // 1.5x is visually indistinguishable here and renders ~45% fewer pixels than 2x.
    renderer.setPixelRatio(poster ? 1.5 : Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;
    scene.environmentIntensity = 0.7;

    scene.add(new THREE.HemisphereLight(0xffffff, 0x0f172a, 0.7));
    const key = new THREE.DirectionalLight(0xffffff, 1.8);
    key.position.set(5, 10, 7);
    scene.add(key);
    const cyanLight = new THREE.PointLight(CYAN, 45);
    cyanLight.position.set(-5, 3, 2);
    const orangeLight = new THREE.PointLight(ORANGE, 40);
    orangeLight.position.set(5, 2, -3);
    scene.add(cyanLight, orangeLight);

    const root = new THREE.Group();
    const ctx: Ctx = { core: new THREE.Group(), extras: new THREE.Group(), tick: [], m: makeMaterials() };
    root.add(ctx.core, ctx.extras);
    scene.add(root);
    builders[variant](ctx);

    // Frame the illustration: fit the core's bounding sphere to the view.
    ctx.tick.forEach((f) => f(10)); // settle into final pose for measuring
    const sphere = new THREE.Box3().setFromObject(ctx.core).getBoundingSphere(new THREE.Sphere());
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    const dir = new THREE.Vector3(1, 0.72, 1.25).normalize();
    const fit = () => {
      // Posters render square: shown with object-contain they then scale exactly
      // like the live scene, which fits itself to the container's shorter side.
      const w = poster ? 600 : mount.clientWidth || 1;
      const h = poster ? 600 : mount.clientHeight || 1;
      camera.aspect = w / h;
      const vFov = THREE.MathUtils.degToRad(camera.fov) / 2;
      const hFov = Math.atan(Math.tan(vFov) * camera.aspect);
      const dist = (sphere.radius * 0.98) / Math.sin(Math.min(vFov, hFov));
      camera.position.copy(sphere.center).addScaledVector(dir, dist);
      camera.lookAt(sphere.center);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    };
    fit();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      const r = mount.getBoundingClientRect();
      pointer.x = THREE.MathUtils.clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1.5, 1.5);
      pointer.y = THREE.MathUtils.clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1.5, 1.5);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    let raf = 0;
    let visible = false;
    let started = -1;
    const clock = new THREE.Clock();

    let announced = false;
    const renderAt = (t: number) => {
      ctx.tick.forEach((f) => f(t));
      if (!poster) {
        root.rotation.y += (Math.sin(t * 0.2) * 0.12 + pointer.x * 0.3 - root.rotation.y) * 0.05;
        root.rotation.x += (pointer.y * 0.08 - root.rotation.x) * 0.05;
      }
      renderer.render(scene, camera);
      if (!announced) {
        announced = true;
        onReadyRef.current?.();
      }
    };

    // Posters and reduced motion both show a single still frame.
    const still = reduceMotion || poster;

    const loop = () => {
      if (!visible || document.hidden) return;
      if (started < 0) started = clock.getElapsedTime();
      renderAt(clock.getElapsedTime() - started + startAt);
      raf = requestAnimationFrame(loop);
    };

    if (poster) {
      renderAt(SETTLED_TIME);
      mount.dataset.posterReady = "1";
    } else if (reduceMotion) {
      renderAt(10);
    } else {
      renderAt(startAt);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !still) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(loop);
        }
      },
      { threshold: 0.05 }
    );
    io.observe(mount);

    // Resume when the visitor comes back to the tab (the loop stops while hidden).
    const onVisibility = () => {
      if (!document.hidden && visible && !still) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const ro = new ResizeObserver(() => {
      fit();
      if (still || !visible) renderAt(poster ? SETTLED_TIME : reduceMotion ? 10 : startAt);
    });
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
      scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else if (mat) {
          const map = (mat as THREE.MeshBasicMaterial).map;
          if (map) map.dispose();
          mat.dispose();
        }
      });
      envTex.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, [variant, startAt, poster]);

  return <div ref={mountRef} aria-hidden="true" className={`relative h-full w-full ${className}`} />;
}
