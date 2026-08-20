# Component Extraction & Enhancement Plan

## Information Gathered
- The project uses Next.js 14 with App Router, TypeScript, and Tailwind CSS
- Design system: Colors (paper, ink, cobalt, cobalt-dim, copper, slate, line), Fonts (Poppins sans-serif across display, body, labels, and data)
- Existing components: Nav, Hero3D, Reveal, ServiceCard, Ticker
- page.tsx has several inline sections that should be extracted into reusable components
- The Nav.tsx mobile menu is functional but could be enhanced

## Plan

### New Components to Build:

1. **SectionHeading** (`components/SectionHeading.tsx`)
   - Reusable component for the pattern: `font-mono label + h2 heading` that repeats throughout the site
   - Props: label, title, className (optional)

2. **ContactForm** (`components/ContactForm.tsx`)
   - Extract the contact form from page.tsx into a standalone component
   - Props: none (self-contained)

3. **Footer** (`components/Footer.tsx`)
   - Extract the footer from page.tsx into a standalone component
   - Props: none (self-contained)

4. **WhatsAppButton** (`components/WhatsAppButton.tsx`)
   - Extract the floating WhatsApp button from page.tsx
   - Props: phoneNumber (optional, with default)

5. **LeadershipCard** (`components/LeadershipCard.tsx`)
   - Extract the leadership card pattern from page.tsx
   - Props: initials, name, designation, linkedinUrl

6. **GroupCompanyCard** (`components/GroupCompanyCard.tsx`)
   - Extract the group company card pattern from page.tsx
   - Props: title, description

### Dependencies:
- All components will use existing design tokens (Tailwind classes)
- SectionHeading, LeadershipCard, GroupCompanyCard will wrap content in Reveal
- ContactForm and Footer will be used in page.tsx

### Files to Update:
- `app/page.tsx` — Replace inline sections with imported components
- No other existing files need modification

### Follow-up Steps:
- Test with `npm run dev` to ensure everything renders correctly
