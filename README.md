# Kangaroo AJ Website

Premium B2B technology website for Kangaroo AJ S.A.S., built with React, TypeScript, TanStack Router/Start, Vite and Tailwind CSS.

## Current positioning

Kangaroo AJ gives B2B companies direct access to senior software engineering, business automation and applied AI execution without the friction of a large consulting firm.

## Includes

- Bilingual landing page: English / Spanish.
- Manual region selector: USA / COL / Global.
- Cookie consent with Accept All, Reject Non-Essential and Customize.
- GA4 gated by analytics consent.
- Contact form with required legal authorization checkbox.
- Privacy policy for USA/global visitors.
- Data treatment policy for Colombia.
- Premium local WebP image assets.
- Reduced-motion support for animations.
- SEO metadata, Open Graph, robots.txt and sitemap.xml.

## Active page sections

1. Hero
2. Core Capabilities
3. Why Kangaroo AJ
4. Delivery Model
5. Industries & Operations
6. Technical Depth
7. Commercial CTA
8. Contact
9. Footer

## Active image map

```txt
Hero                  src/assets/hero-enterprise-tech.webp
Core Capabilities     src/assets/capabilities-architecture.webp
Delivery Model        src/assets/delivery-roadmap.webp
Industries            src/assets/data-automation.webp
Technical Depth       src/assets/ai-operations.webp
Contact               src/assets/contact-enterprise.webp
Open Graph            public/og-image.jpg
```

No active section image is duplicated.

## Local installation

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Environment variables

Create a local `.env` file based on `.env.example`:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Do not commit `.env`.

## Analytics

Analytics implementation:

```txt
src/shared/lib/analytics.ts
```

GA4 only tracks when analytics consent exists. Events preserved or added:

- `cta_click`
- `contact_form_start`
- `contact_form_submit`
- `region_change`
- `language_change`
- `scroll_depth_25`
- `scroll_depth_50`
- `scroll_depth_75`
- `scroll_depth_100`
- `web_vital`

## Privacy documents

```txt
public/privacy-policy.html
public/data-treatment-policy.html
```

These documents should be validated by legal counsel before production use.
