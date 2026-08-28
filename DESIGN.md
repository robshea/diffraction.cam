---
name: diffraction.cAm
description: Visible diffraction calculator for digital cameras
colors:
  primary: "#2f7d95"
  primary-hover: "#235e70"
  primary-visited: "#4e91a5"
  neutral-text: "#3d4144"
  neutral-bg: "#ffffff"
  neutral-border: "#f2f3f3"
  form-bg: "#f4f6f6"
  form-border: "#d5dbdb"
  field-fill: "#d6eaf8"
  field-text: "#154360"
  band-uv-bg: "#e8daef"
  band-uv-text: "#4a235a"
  band-visible-bg: "#d1f2eb"
  band-visible-text: "#0b5345"
  band-ir-bg: "#f2d7d5"
  band-ir-text: "#78281f"
  rating-good-bg: "#82e0aa"
  rating-good-text: "#145a32"
  rating-maybe-bg: "#f7dc6f"
  rating-maybe-text: "#7d6608"
  rating-bad-bg: "#d98880"
  rating-bad-text: "#641e16"
  success: "#3fa63f"
  warning: "#d67f05"
  danger: "#ee5f5b"
  info: "#3b9cba"
typography:
  body:
    fontFamily: "'PT Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', 'Roboto', 'Lucida Grande', Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "{typography.body.fontFamily}"
    fontSize: "0.75em"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "normal"
  monospace-data:
    fontFamily: "Monaco, Consolas, 'Lucida Console', monospace"
    fontSize: "1em"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "4px"
spacing:
  xs: "0.25em"
  sm: "0.5em"
  md: "0.75em"
  lg: "1em"
  xl: "1.5em"
components:
  button-primary:
    backgroundColor: "{colors.success}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "0.5em 1em"
  button-primary-hover:
    backgroundColor: "#328532"
  input-field:
    backgroundColor: "{colors.field-fill}"
    textColor: "{colors.field-text}"
    rounded: "{rounded.sm}"
---

# Design System: diffraction.cAm

## Overview

**Creative North Star: "The Field Instrument"**

diffraction.cAm reads like precision gear a photographer trusts in the field — a light meter or a data plate on a lens, not a marketing page. Voice: **quiet utility**. The system is content to run on an almost-unmodified Jekyll theme (minimal-mistakes, default skin) and spend its actual design effort in one place: the color-coded data itself. Nothing here competes with the grid of numbers the photographer came to read.

The look is functional-first: system sans-serif body text, a plain white canvas, one muted teal accent for links and structure, and a restrained, deliberate palette of pastel-background/dark-text pairs used *only* to encode meaning — which wavelength band a column belongs to, and whether a given aperture is diffraction-safe. Nothing is decorative. Every color on the page is either the neutral theme chrome or a data label.

The theme's own default touches (soft shadows on notices and buttons, 4px corners, a hairline masthead border) are kept as-is rather than overridden — the instrument's housing is generic; the instrument face (the diffraction table) is where the custom work lives.

**Key Characteristics:**
- One quiet brand accent (muted teal), never used decoratively — only for links, structure, and the site title
- A locked semantic palette: three wavelength-band colors (UV / visible / IR) and three diffraction-rating colors (good / maybe / bad), each a pastel background with a matching dark text color for contrast
- System sans-serif throughout ("PT Sans" stack); no display or headline font distinct from body
- Flat, theme-default surfaces; shadows are the stock minimal-mistakes soft 1px ambient shadow, never dramatic
- 4px corner radius used everywhere a radius appears — buttons, form controls, notices, camera-controls panel

## Colors

The palette is almost entirely functional: a single quiet accent for navigation and links, plain neutrals for everything structural, and a locked semantic set that exists purely to encode data (wavelength band, diffraction rating). There is no decorative secondary or tertiary brand color.

### Primary
- **Instrument Teal** (`#2f7d95`): the site's only brand accent — link color, and by extension the closest thing to a brand color. Visited links use a lighter **Faded Teal** (`#4e91a5`); hover/active darkens to **Deep Teal** (`#235e70`).

### Neutral
- **Ink** (`#3d4144`): body text color.
- **Paper** (`#ffffff`): page background.
- **Hairline** (`#f2f3f3`): the masthead's bottom border — the only structural divider on the page.
- **Panel Mist** (`#f4f6f6`) / **Panel Edge** (`#d5dbdb`): background and border for the camera-controls filter panel, the one "boxed" UI element outside the data table.
- **Gauge Blue** (`#d6eaf8` fill / `#154360` text): the calculator's own input fields — camera select, pixel-pitch readout, filter select, and the diffraction table's leftmost ƒ-stop columns. This is the "instrument readout" color, distinct from the wavelength-band semantic colors below.

### Semantic — Wavelength Bands (locked)
The diffraction table's column headers and cells are colored by which part of the spectrum they represent. **The Band Rule.** A wavelength's background/text pair is fixed by its band — UV, visible, or IR — regardless of which specific wavelength column it is; do not introduce a fourth band color or vary these per-wavelength.
- **Dusty Violet** (bg `#e8daef` / text `#4a235a`): Ultraviolet columns (350nm, 400nm) and the "Ultraviolet" header cell.
- **Sea-Glass Teal** (bg `#d1f2eb` / text `#0b5345`): Visible-light columns (470–720nm) and the "Visible Light" header cell.
- **Muted Terracotta** (bg `#f2d7d5` / text `#78281f`): Infrared columns (780–1000nm) and the "Infrared" header cell.

### Semantic — Diffraction Ratings (locked)
Each data cell in the diffraction grid is colored by its computed ratio, independent of the wavelength-band coloring above. **The Three-Ratio Rule.** Diffraction ratio has exactly three visual states — good, maybe, bad — mapped to fixed thresholds (< 3, 3–4.5, > 4.5); never add a fourth gradient step or a continuous color scale here.
- **Sage** (bg `#82e0aa` / text `#145a32`): ratio below 3 — no visible diffraction.
- **Gold** (bg `#f7dc6f` / text `#7d6608`): ratio 3–4.5 — mild visible diffraction.
- **Rust** (bg `#d98880` / text `#641e16`): ratio above 4.5 — visible diffraction impacts sharpness.

### Theme Status Colors (inherited, unmodified)
- **Success** (`#3fa63f`): the "Add a Camera" button.
- **Info** (`#3b9cba`): info notices (`.notice--info`, background `#d8ebf1`).
- **Warning** (`#d67f05`): warning notices, e.g. the Sigma Foveon caveat on the About page (background `#f7e5cd`).
- **Danger** (`#ee5f5b`): reserved by the theme; not currently used on any page.

### Named Rules
**The Data-Only Color Rule.** Color outside the neutral chrome and the single teal accent is reserved for encoding data (band or rating). If a future component wants a new hue, ask first whether it's decorating or encoding — decoration should reuse Instrument Teal or a neutral, not invent a new pastel.

## Typography

**Body Font:** "PT Sans" (with -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", "Roboto", "Lucida Grande", Arial, sans-serif)
**Label Font:** same stack, smaller and bold — no distinct label face.

**Character:** One plain, highly legible system-adjacent sans-serif carries the entire site — headlines, body copy, form labels, and table data alike. There is no display face; the instrument reads as text-forward and unpretentious, closer to a spec sheet than a magazine.

### Hierarchy
- **Body** (400, 1em/16px, 1.5 line-height): default reading size for all prose, table cells, and form values.
- **Label** (700, 0.75em, 1.5 line-height): form field labels (camera, pitch, filter), camera-controls labels, button text, notice text — bold and reduced, used wherever the UI is naming a control rather than presenting content.
- **Caption** (italic, inherits body size): table captions ("Diffraction ratio", "Filters"), set in the theme's serif caption face (Georgia) and positioned below the table, not above.

### Named Rules
**The No-Display-Face Rule.** Do not introduce a second, larger display typeface for hero or marketing-style headlines. This is an instrument face, not an editorial one — hierarchy comes from weight and size within the one sans-serif family, plus the occasional serif caption.

## Layout

The page is a single-column content well (the theme's default `single`/`splash` layouts, max-width 1280px on wide viewports) with no sidebar in active use. The calculator's own controls form a horizontal two-column flex row (`#top-fields` — Camera / Filter) above the data table, each `.column` sharing the row evenly (`flex: 1`) with a stacking breakpoint below `37.5em`.

The Cameras page's filter panel (`.camera-controls`) is a wrapped flex row (search input + format select + reset button) with `gap: 0.75em 1em`, padded and boxed in Panel Mist. Below `37.5em` its children switch from row-wrapped to full-width stacked (`flex: 1 1 100%`) — the only place in the codebase with a custom mobile breakpoint; everything else relies on the theme's own breakpoints (`600px` / `768px` / `900px` / `1024px` / `1280px`).

Data tables (`#diff-table`, `#camera-table`, `#legend-table`, `#filters`) scroll horizontally inside a `.camera-table-wrapper` (`overflow-x: auto`) on the Cameras page rather than reflowing columns — appropriate for dense tabular data that shouldn't be truncated. Spacing throughout is em-based and small: `0.25em`–`1.5em` steps, no larger rhythm unit in use.

## Elevation & Depth

Flat by default. The only shadows in the system are the theme's stock ambient ones: a soft `0 1px 1px rgba(0,0,0,0.125)` under notices and boxed elements, tinted to match the notice's status color (e.g. warning notices shadow in `rgba(214,127,5,0.25)`). Nothing lifts on hover; depth is not part of this system's interaction language — color and weight carry emphasis instead.

### Shadow Vocabulary
- **Ambient notice shadow** (`box-shadow: 0 1px 1px rgba(0,0,0,0.125)`, tinted to the notice's status color): the only elevation cue in the system, used on info/warning/success/danger notice boxes.

### Named Rules
**The Flat Instrument Rule.** Surfaces are flat. If a new component needs to stand apart from the page, reach for a background tint (like Panel Mist) or a hairline border before reaching for a shadow.

## Shapes

**The 4px Rule.** Every rounded corner in the system — buttons, the camera-controls panel, notice boxes, form inputs — uses the same 4px radius (`$border-radius` from the theme). There is no larger "card" radius and no sharp-cornered exception; introducing a second radius value would break this consistency. Borders, where present, are 1px hairlines in a light neutral (`#d5dbdb` on the camera-controls panel, `#f2f3f3` under the masthead) — never heavier, never colored except where a semantic component (like a table cell's `.highlight` state) calls for it.

## Components

### Buttons
- **Shape:** 4px radius, no border.
- **Primary:** Success green (`#3fa63f` bg / white text), `0.5em 1em` padding, bold 0.75em label text. Used for the single high-intent action on the site: "Add a Camera" (a mailto link styled as a button).
- **Hover:** background darkens to `#328532`; no shadow or transform change.
- There is no secondary/ghost button variant in the current implementation — every button-like control is either this primary style or the plain camera-sort buttons below.

### Form Fields (Calculator inputs)
- **Style:** the Camera/Filter `<select>` fields share a **Gauge Blue** fill (`#d6eaf8`) with dark navy text (`#154360`) — visually distinct from ordinary theme inputs, marking them as the instrument's live controls rather than generic form fields.
- **Labels:** bold, 0.75em, left-floated with a small icon (FontAwesome duotone-light) preceding the label text — e.g. a camera-retro icon before "Camera".
- **Layout:** two fields in a row (`#top-fields`, flex columns), each `flex: 1`.
- Pixel Pitch is no longer a visible field here — its value comes straight off the selected Camera `<option>` and is read (and displayed, in the Camera Details Panel below) from there; a hidden `#pitch` input is not needed since nothing reads it back.

### Camera Details Panel
- **Style:** boxed panel below the diffraction table (Panel Mist background `#f4f6f6`, Panel Edge border `#d5dbdb`, 4px radius, `1em` padding, same treatment as the Camera Filter Panel below) showing the selected camera's name, Pixel Pitch, Megapixels, Pixel Dimensions, and Sensor Size.
- **Values:** normal weight, Gauge Blue navy (`#154360`) — the same readout color as the calculator's own input fields, marking these as live instrument data rather than static prose; color alone carries the emphasis, not weight.
- **Labels:** normal weight, 0.75em, plain text; the Pixel Pitch label carries the ruler-horizontal icon relocated from the old top-of-form field.
- **Layout:** a wrapped flex row of label/value pairs, stacking to one per row below `37.5em`.
- **Empty state:** shows an em dash (—) in each value when no camera is selected, consistent with the calculator's own empty-state handling.

### Camera Filter Panel (signature component)
- **Style:** boxed panel (Panel Mist background `#f4f6f6`, Panel Edge border `#d5dbdb`, 4px radius, `1em` padding) containing a search input, a format `<select>`, and a "Reset filters" button (theme's `.btn--inverse .btn--small`).
- **Sort buttons:** column headers in `#camera-table` are unstyled buttons with a trailing glyph (`↕` default, `↑`/`↓` on active sort via `[aria-sort]`) — bold, inherits table font, no visible button chrome until interacted with.
- **Results count:** `aria-live="polite"` italic text ("N cameras") above the table, updating as filters are applied.

### Diffraction Data Table (signature component)
- **Structure:** two frozen leading columns (ƒ-stop radio + ƒ-stop label, Gauge Blue) followed by one column per wavelength, grouped under three merged band headers (Ultraviolet / Visible Light / Infrared) colored per the Semantic — Wavelength Bands palette above.
- **Cells:** each data cell is colored per the Semantic — Diffraction Ratings palette (good/maybe/bad) once a camera and filter are selected; unfiltered wavelength columns for the active filter are dimmed to 25% opacity (`.hide` class) rather than hidden, so the grid shape never changes.
- **Row selection:** the active ƒ-stop row gets a 2px solid Gauge-Blue-navy (`#154360`) border (`.highlight`) — the only border-as-emphasis pattern in the system.
- **Caption:** italic, positioned below the table (`caption-side: bottom`), in the theme's serif caption face.

### Navigation
- Standard minimal-mistakes masthead: bold site title (left), horizontal nav links (right, wraps below `37.5em`), Instrument Teal on hover, 1px Hairline border beneath the whole masthead. No custom treatment beyond a smaller `$type-size-6` menu-item font.

## Do's and Don'ts

### Do:
- **Do** reuse Instrument Teal (`#2f7d95`) for any new link or structural accent — it is the system's only brand color and should stay singular.
- **Do** keep the wavelength-band and diffraction-rating colors locked to their documented hex pairs (band-uv/visible/ir, rating-good/maybe/bad) wherever the site encodes those same two concepts elsewhere.
- **Do** use the 4px radius on any new rounded element; don't introduce a second radius scale.
- **Do** default new surfaces to flat with the theme's stock ambient shadow if any depth is needed at all.

### Don't:
- **Don't** add a display/headline typeface distinct from the PT Sans body stack — hierarchy comes from weight/size, not a second family.
- **Don't** introduce new decorative colors outside Instrument Teal and the neutrals; if a new hue appears, it should be encoding data (a new band or rating), not decorating.
- **Don't** turn the diffraction rating scale into a continuous gradient or add a fourth state — it is a fixed three-value good/maybe/bad system tied to the 3 / 4.5 thresholds in PRODUCT.md.
- **Don't** add hover-lift or shadow-on-hover interactions; this system conveys state through color and border, never elevation change.
