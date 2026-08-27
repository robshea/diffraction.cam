# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are infrared and ultraviolet photographers — including full-spectrum-converted camera owners and anyone shooting with UV/IR/hot-mirror filters — who need to pick a sharp f-stop before or during a shoot. Visible-light photographers choosing a diffraction-safe aperture are a secondary, supported audience; the calculator's UV and visible-light columns exist for them, but IR/UV shooters are the core audience the tool and its surrounding content (book excerpt, filter list, videos) are written for.

## Product Purpose

diffraction.cAm calculates, for a selected camera and filter, which f-stops will produce visible diffraction softness at each wavelength band (UV, visible, IR), so a photographer can choose the sharpest usable aperture before shooting. Success is a photographer picking (or avoiding) an f-stop with confidence, informed by their specific sensor's pixel pitch and the wavelengths their filter actually passes.

## Positioning

The mechanism a competitor can't casually replicate: diffraction ratio is derived by combining the Airy disk diameter formula (wavelength × f-number) with each camera's real sensor pixel pitch, then validated against the site owner's own visual diffraction tests on APS-C and medium-format sensors (linked from the About page). This ties physics, a maintained camera database, and per-filter wavelength transmission into one ready-to-read ƒ-stop × wavelength grid — rather than a generic "diffraction limit" rule of thumb.

## Operating Context

- A photographer selects their camera (pulling pixel pitch from a maintained database), a filter (which dims columns for wavelengths it doesn't pass), and toggles between whole and third f-stops — then reads a color-coded grid (good/maybe/bad) to pick their aperture.
- Camera and filter selections persist via URL query parameters so a result can be linked or bookmarked.
- Supporting pages: Cameras (searchable/sortable/filterable camera database with a "request to add a camera" mailto), Filters (wavelength pass table), Wavelengths, Other Data, Videos (YouTube diffraction demonstrations), and About (the physics/formula explanation, FAQ-style).
- Tied to the site owner's (Rob Shea's) infrared photography book, *Color Doesn't Exist*, and his other channels (YouTube, blog, Bluesky, Instagram, Vero, Facebook, TikTok), linked from the footer.

## Capabilities and Constraints

- Built as a static Jekyll site (minimal-mistakes theme) with all diffraction-ratio computation done client-side in vanilla JS; no backend, accounts, or data collection today. This is **not a fixed constraint** — a backend, accounts, or server-side features are open to consideration later if they would genuinely improve the product; nothing here should be preserved purely for architecture's own sake.
- Camera and filter data are hand-maintained in YAML data files (`_data/cameras.yaml`, `_data/filters.yaml`, `_data/wavelengths.yaml`, `_data/f-numbers.yaml`, `_data/f-numbers-thirds.yaml`); new cameras are requested via a mailto link, not user-submitted directly.
- Diffraction ratio thresholds: below 3 = no visible diffraction ("good"), 3–4.5 = mild ("maybe"), above 4.5 = visibly impacts sharpness ("bad"). These thresholds were empirically derived, not arbitrary, and should not be casually changed.
- The camera database explicitly has not been validated for Sigma Foveon sensors (different demosaicing) — this caveat is called out on the About page and should not be silently dropped.

## Brand Commitments

- Site name/brand: **diffraction.cAm**, subtitle "Visible Diffraction Calculator for Digital Cameras."
- Owned and authored by Rob Shea (Rob Shea Photography / "InfraROB" on Bluesky), tied to his infrared photography book *Color Doesn't Exist: A Practical Guide to Infrared Photography* and his other photography channels linked in the footer.

## Evidence on Hand

- Maintained camera sensor database (`_data/cameras.yaml`) with pixel pitch, megapixels, sensor dimensions, and format for each camera, sourced from manufacturer specs and validated across multiple sources.
- Filter/wavelength-transmission data (`_data/filters.yaml`, `_data/wavelengths.yaml`).
- Quoted excerpts from *Color Doesn't Exist* used on the About page.
- Two of the site owner's own real-world diffraction test write-ups, linked as validation evidence: an APS-C test and a medium-format (GFX 50S) test on robsheaphotography.com.
- Three YouTube videos demonstrating the calculator and diffraction in IR photography (Videos page).
- No testimonials, pricing, or third-party case studies exist and none should be fabricated.

## Product Principles

1. Ground every displayed result in real physics (Airy disk formula) and real sensor data, not rules of thumb — and keep the reasoning visible/explainable (About page) rather than a black box.
2. Serve IR/UV photographers first; visible-light utility is real but secondary and should not crowd out that focus.
3. Keep the camera and filter data trustworthy — sourced, cross-validated, and correctable (the mailto "send a correction" pattern) rather than crowdsourced without review.
4. Favor a fast, single-page, link-shareable result (camera + filter in the URL) over multi-step flows.
5. Architecture (static/client-side) is a current implementation choice, not a brand promise — don't treat it as untouchable if a better product needs a backend.
