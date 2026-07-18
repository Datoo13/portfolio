# Landing Page Generation Instructions

## Purpose

Generate a fully populated, modern, responsive HTML landing page for a lead generation campaign, based on minimal client input. The goal is to extract maximum value from what is provided without inventing information that isn't there.

---

## Core Rule

**Restate and reformat — never invent.**

You may rephrase, restructure, reorder, and reframe content from the provided inputs. You may not add claims, benefits, features, statistics, or company details that do not appear in the source material. If a block cannot be populated with real content, omit it rather than fill it with placeholder assumptions.

---

## Client Inputs

The following inputs may be provided. All are optional except the logos.

| Input | Required | Notes |
|---|---|---|
| Logos | Yes (1–3) | Used in header and optionally footer |
| Form embed code | Optional | MailerLite, HubSpot, or Mailchimp |
| Asset download link | Optional | PDF, guide, whitepaper, etc. |
| Asset content | Optional | PDF file or pasted text from the asset |
| Client comments | Optional | Max 600 characters, free text |

---

## Content Extraction Priority

Extract content in this order of priority:

1. **Asset content (PDF or pasted text)** — primary source for headlines, benefits, features, use cases
2. **Client comments** — supplements or overrides asset content where specified
3. **Logo filenames / brand name** — used to infer company name only if not stated elsewhere

Do not combine assumptions across sources. Only state what can be traced to an input.

---

## Page Structure

Build the page using the following row sequence. Rows marked **conditional** are only included if sufficient content exists to populate them honestly.

### 1. Header
- Display 1 to 3 logos, horizontally aligned
- No navigation links
- Clean, minimal — just brand presence

### 2. Hero
- **Left side:** Short, punchy headline derived from the asset or comments. 1–2 supporting sentences. A CTA button that submits or anchors to the form.
- **Right side:** The embedded form (if provided)
- If no form is provided, right side is omitted and hero goes full-width with a prominent CTA button

### 3. Informational Rows (1 to 3, conditional)
Include between 1 and 3 informational rows. **No two rows may use the same variant.** Choose variants based on the type of content available:

#### Variant A — Icons Block
- 3 or 4 items, each with: an icon, a short title, a 1–2 sentence description
- Best for: benefits, features, reasons to act
- Icons should be sourced from a free inline SVG set or a CDN-hosted icon library (e.g. Lucide, Heroicons)

#### Variant B — Text + Image Block
- Text on the left, image on the right — or inverted
- Best for: explaining the product, the problem it solves, or the context
- If no real image is available, use a relevant placeholder with a neutral background — do not use stock photo URLs that may break
- Text should be 2–4 short paragraphs or bullet points, all sourced from inputs

#### Variant C — Cards Block
- 3 or 4 cards, each with: a headline and a short body
- Best for: use cases, key statistics, target audience segments, outcomes
- Only include a statistic on a card if it appears in the source material

**Selection logic:**
- If asset content is rich enough for all three variants, include all three in order: A → B → C
- If content is limited, include only the variants that can be genuinely populated
- Never repeat a variant even if content is available

### 4. Business Bio (conditional)
- Short company description, tagline, or founding context
- Only include if this information is present in the comments or asset
- Do not infer or generate company descriptions from the logo or brand name alone

### 5. Footer
- Copyright line: © [Year] [Company Name]
- Company name derived from inputs; if not explicitly stated, use the primary logo's visible brand name
- Minimal — no nav, no links unless explicitly provided

---

## HTML & Design Requirements

### Technical
- Single self-contained HTML file
- All CSS in a `<style>` block in the `<head>`
- No external CSS frameworks (no Bootstrap, no Tailwind)
- External allowed: Google Fonts (1–2 families), a CDN icon library
- Fully responsive — mobile first, clean breakpoints at 768px and 1200px
- Form embed code injected as-is inside its container — do not alter it

### Design
- Modern, clean business aesthetic
- Generous whitespace, clear visual hierarchy
- Color palette derived from logo colors where possible; otherwise use a neutral professional palette (dark navy or charcoal + white + one accent)
- Typography: one display/heading font, one body font — both from Google Fonts
- Subtle section separation (background color alternation or thin dividers)
- No animations beyond simple hover states
- CTA buttons: high contrast, rounded, clear label derived from the asset context (e.g. "Download the Guide", "Get the Checklist", "Register Now")

### Images
- Every informational block that can visually benefit from an image must include a placeholder `<img>` tag
- Use a neutral gray background div as a visual fallback behind the `<img>` so the layout doesn't break before images are replaced
- Do not use external stock photo URLs — they may break; leave `src=""` and let the operator replace manually
- Size and style the `<img>` elements so they fit the layout correctly and look intentional even when empty

### Do Not
- Do not add placeholder text (no Lorem Ipsum)
- Do not add sections that cannot be populated from inputs
- Do not invent testimonials, client logos, or social proof
- Do not add cookie banners, GDPR notices, or tracking scripts unless specified
- Do not add navigation menus

---

## Output

Return a single, complete, valid HTML file ready to be saved and hosted as-is.
