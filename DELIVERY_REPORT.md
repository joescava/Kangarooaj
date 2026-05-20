# Kangaroo AJ Website Reform — Delivery Report

## 1. Executive Summary

The Kangaroo AJ website was reformed into a premium boutique B2B technology site focused on senior software engineering, business automation and applied AI execution. The new structure makes the offer clear in the hero, reframes services as business capabilities, removes inflated-looking metrics, improves contact conversion hierarchy and keeps the existing TanStack/React/i18n/region/consent/GA4 architecture intact.

## 2. Competitive Learnings Applied

Ceiba’s trust cues were adapted into senior technical judgment, disciplined architecture, Colombian/nearshore credibility and human execution language. Babel’s enterprise category clarity was adapted into practical capability groups such as Software Engineering, Business Automation, Applied AI, Data & Platforms, Technical Consulting and Staff Augmentation / Hour Bank. No Ceiba or Babel design, layout, brand assets, claims or copy were copied.

## 3. Positioning

Kangaroo AJ is positioned as a premium boutique senior technology partner for B2B companies in the United States, Colombia and global remote-first markets. The site now communicates: direct access to senior software engineering, business automation and applied AI execution without the friction of a large consulting firm.

## 4. Visual System

- **Base colors:** deep black `#050506`, graphite `#0B0D10`, charcoal `#111418` and subtle elevated white surfaces.
- **Text:** high-contrast slate/white hierarchy with restrained muted copy.
- **Accents:** precision cyan `#20D9E8`, enterprise blue `#3B82F6`, soft violet `#7C3AED` and trust green for status only.
- **Typography:** strong editorial display hierarchy using existing system font stack.
- **Spacing:** larger section rhythm, premium card density and clearer hierarchy.
- **Borders/shadows:** subtle slate borders, restrained cyan edge states and controlled deep shadows.
- **Images:** dark overlays, low-to-medium opacity section backgrounds and unique image usage per active section.

## 5. Page Structure

1. Hero
2. Core Capabilities
3. Why Kangaroo AJ
4. Delivery Model
5. Industries & Operations
6. Technical Depth
7. Commercial CTA
8. Contact
9. Footer

## 6. Components Updated

| Component | File | Change |
| --- | --- | --- |
| Landing composition | `src/modules/landing/components/LandingPage.tsx` | Reordered the page around the requested B2B structure. |
| Header | `src/modules/landing/components/Header.tsx` | Updated navigation to capabilities, why, delivery, industries, technical depth and contact. Preserved region/language selector. |
| Hero | `src/modules/landing/components/Hero.tsx` | Added exact strategic headline/subheadline, trust strip and senior execution panel. Removed fake-looking metrics. |
| Core Capabilities | `src/modules/landing/components/Services.tsx` | Rebuilt service cards around six B2B capabilities with benefit statements and accessible anchor states. |
| Why Kangaroo AJ | `src/modules/landing/components/WhyUs.tsx` | Reframed trust section around senior involvement, lean delivery, business-first architecture, practical AI and nearshore collaboration. |
| Delivery Model | `src/modules/landing/components/Process.tsx` | Implemented Discover → Architect → Build → Integrate → Improve with business-value descriptions. |
| Industries & Operations | `src/modules/landing/components/IndustriesOperations.tsx` | Added credible operational areas without inventing client logos or inflated claims. |
| Technical Depth | `src/modules/landing/components/Tech.tsx` | Added real technical stack/capability depth across frontend, .NET, APIs, SQL Server, workflow automation, AI agents and analytics. |
| Commercial CTA | `src/modules/landing/components/CTASection.tsx` | Added focused conversion section before contact. |
| Contact | `src/modules/contact/components/Contact.tsx` | Preserved form payload, improved labels, hierarchy, consent error, localized validation and tracking start behavior. |
| Text input | `src/modules/contact/components/TextInput.tsx` | Added required markers and autocomplete support while preserving field names. |
| Contact hook | `src/modules/contact/hooks/useContactForm.ts` | Added localized validation messages without changing form contract. |
| Footer | `src/modules/landing/components/Footer.tsx` | Expanded footer with services, site links, markets/contact and policy links. |
| Image panel | `src/modules/landing/components/ImagePanel.tsx` | Improved image frame semantics, captions, aspect handling and overlays. |
| Picture helper | `src/shared/ui/Picture.tsx` | Added style support for controlled object positioning. |
| Content constants | `src/modules/landing/constants/content.ts` | Added why, delivery, industries, market and technical depth content in EN/ES. |
| Services constants | `src/modules/landing/constants/services.ts` | Replaced generic service set with six strategic B2B capabilities. |
| i18n copy | `src/modules/i18n/constants/copy.ts` | Added revised bilingual content and CTA language. |
| SEO route metadata | `src/routes/index.tsx` | Updated title, description, OG description and x-default alternate. |
| Theme | `src/styles/theme.css` | Refined design tokens to the requested dark premium B2B palette. |
| Utilities | `src/styles/utilities.css` | Adjusted accent rgba values and retained reduced-motion-compatible visual utilities. |
| Documentation | `README.md`, `ASSET_PROMPTS.md`, `DELIVERY_REPORT.md` | Updated project documentation and asset mapping. |

## 7. Images Used

| Section | Image file | Purpose | Is duplicated? | Notes |
| --- | --- | --- | --- | --- |
| Hero | `src/assets/hero-enterprise-tech.webp` | Premium human + technology atmosphere | No | Eager loaded with strong dark overlay for readability. |
| Core Capabilities | `src/assets/capabilities-architecture.webp` | Abstract enterprise software architecture | No | New local WebP asset; decorative background. |
| Why Kangaroo AJ | None | Cleaner trust section | No | Uses CSS depth instead of another human image to avoid visual repetition. |
| Delivery Model | `src/assets/delivery-roadmap.webp` | Abstract delivery roadmap/system flow | No | New local WebP asset; used in background and image panel within same section only. |
| Industries & Operations | `src/assets/data-automation.webp` | Operational team/workflow context | No | Lazy loaded below fold. |
| Technical Depth | `src/assets/ai-operations.webp` | Applied AI and technical operations context | No | Lazy loaded below fold. |
| CTA Section | None | Clean commercial conversion panel | No | No image to preserve focus. |
| Contact | `src/assets/contact-enterprise.webp` | Consulting/business conversation atmosphere | No | Lazy loaded below fold with dark overlay. |
| Open Graph | `public/og-image.jpg` | Social preview | No | Preserved. |

Images are not duplicated across active sections.

## 8. Functionality Preserved

- [x] Existing TanStack routing preserved.
- [x] Existing i18n flow preserved.
- [x] Region selector preserved.
- [x] Language selector preserved.
- [x] GA4 consent-gated behavior preserved.
- [x] Cookie consent banner preserved.
- [x] Contact form field names and payload contract preserved.
- [x] Privacy and data treatment policy links preserved.
- [x] WhatsApp and email links preserved.
- [x] SEO, Open Graph, canonical and alternate metadata preserved/refined.
- [x] Reduced-motion CSS support preserved.
- [x] No new runtime dependencies introduced.

## 9. Accessibility Improvements

- Stronger heading hierarchy aligned to the new page structure.
- More descriptive hero and section alt text where images are meaningful.
- Decorative section backgrounds remain `aria-hidden`.
- Visible focus states preserved globally and improved on cards/CTAs.
- Capability cards are keyboard-focusable anchors rather than hover-only panels.
- Contact form labels remain associated with inputs.
- Error messages are associated through `aria-describedby`.
- Privacy authorization error is now visible and associated.
- Required fields are visually marked.
- Motion continues to respect `prefers-reduced-motion`.

## 10. Performance Improvements

- Removed unused duplicate-looking section assets from the source project.
- Added two lightweight local WebP abstract assets: 24.79 kB and 45.23 kB in the built client.
- Below-the-fold section images use lazy loading.
- Hero image remains eager/high priority.
- Image panels include width/height to reduce layout shift risk.
- Reveal animations use Intersection Observer and transform/opacity only.
- No heavy scroll listeners were added.
- Build output highlights: client CSS 49.06 kB / 9.44 kB gzip; landing chunk 62.55 kB / 17.63 kB gzip; main client chunk 406.27 kB / 124.33 kB gzip.

## 11. Analytics / GA4

Preserved or added event coverage:

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

GA4 still checks analytics consent before tracking. No analytics event is intentionally fired before consent.

## 12. Build Result

- `npm install`: completed in the container using npm with install flags to avoid optional dependency reification timeout, followed by a clean `npm ci` validation from the generated lockfile.
- `npm run build`: passed.
- `npm run lint`: passed with one existing warning in `src/modules/region/hooks/useRegion.tsx` from `react-refresh/only-export-components`; no lint errors.

Production build sizes reported by Vite:

- Client CSS: 49.06 kB / 9.44 kB gzip.
- LandingPage client chunk: 62.55 kB / 17.63 kB gzip.
- Main client chunk: 406.27 kB / 124.33 kB gzip.
- Largest server chunk: `server-1yJbsMOg.js` at 735.13 kB.

## 13. Known Risks

- The contact form still uses the existing local success behavior; real delivery requires the previously intended Formspree, EmailJS or API integration.
- Legal privacy/data treatment documents were preserved but should still be validated by counsel before production use.
- The lint warning in `useRegion.tsx` is non-blocking and existed because the file exports both provider and hook; it can be resolved later by splitting context/provider and hook exports.
- Visual QA was performed through build validation and code inspection in this environment; final browser/device QA should still be done before production deployment.
