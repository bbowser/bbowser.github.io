# Sperti Amazon Page — Jessica's Edits (Session: 2026-06-04)

## File
`human-study/sperti-amazon-offline.html`
Supporting assets: `human-study/sperti-amazon_files/`

---

## Status

| Item | Status | Notes |
|------|--------|-------|
| 5. Title change | ✅ Done | All 17 occurrences updated |
| 6. Images (hero + steps 1–3) | ⏳ Waiting on Brad | See image spec below |
| 7. Bullets (delete last, add new first) | ✅ Done | Both bullet lists updated (main + quick-view panel) |
| 8. Replace "From the Brand" section | ✅ Done | Product showcase (white lamp) + goggles section added |
| 9. A+ content: Steps layout | ✅ Done | Built as pure HTML/CSS from PDF — no images needed |

---

## Item 5 — DONE ✅
**Old:** `Sperti™ UVB Home Lamp - 7-Year Warranty, 5 Mins Every Other Day, Trusted USA Company, 50K+ Sold!`  
**New:** `Sperti Vitamin D Lamp - 7 Year Warranty, 5 Mins Every Other Day, Trusted USA Company, 50K+ Sold, See If This Product is Right For You!`

All occurrences updated (meta tags, visible H1 at line ~14236, alt text, hidden form fields, etc.).

---

## Item 6 — Images
**Context:** Jessica said "the first image should be the hero, and Image 2-4 should be the other steps." Brad is not sure what "hero" means in Amazon context — slot 0 already shows the product on plain white bg, which is standard Amazon primary image. **Keep slot 0 as-is.** Only slots 1–3 need new step images.

**Slots to update:**
- Slot 1 (variant-FRNT): main image `813YlPzsv4L...`, thumb `412FL7u-t2L._AC_US100_.jpg`
- Slot 2 (variant-SIDE): main image `71-ogGmdaaL...`, thumb `41yJc1iSSiL._AC_US100_.jpg`
- Slot 3 (variant-BACK): main image `716fhL1X6DL...`, thumb `31djCNPER7L._AC_US100_.jpg`

**Images needed from Brad:**
- `sperti-amazon_files/sperti-step-1.jpg` — **1500 × 1500 px** (square preferred)
- `sperti-amazon_files/sperti-step-2.jpg` — **1500 × 1500 px**
- `sperti-amazon_files/sperti-step-3.jpg` — **1500 × 1500 px**
- Thumbnails (100 × 100 px each): `sperti-step-1-thumb.jpg`, `sperti-step-2-thumb.jpg`, `sperti-step-3-thumb.jpg`

Implementation: replace the dynamic-image JS data-src approach with plain `<img src="">` tags for offline compatibility.

---

## Item 7 — Bullet points
**Location:** `id="feature-bullets"` at line ~15799

**Delete** the last bullet (lines ~15826–15831):
```
EFFICIENT AND EFFECTIVE FOR BUSY LIFESTYLES: The lamp is designed for quick and easy sessions, requiring only 5 minutes every other day.
```

**Add as FIRST bullet** (before current first bullet at ~15801):
```
IS THIS BOX RIGHT FOR YOU: This device is not suitable for all users. Follow 5 easy steps to see if it right for you.
```

Note: "IS THIS BOX RIGHT FOR YOU" is Jessica's exact wording — verify with Brad/Jessica if "BOX" or "PRODUCT" is intended.

---

## Item 8 — Replace "From the Brand" section
**Location:** `id="aplusBrandStory_feature_div"` lines ~21823–22792

Currently contains a multi-slide carousel with brand images and "Questions?" box.

**Replace inner content** (`<div id="aplus" ...>` and everything inside it) with a clean A+-style horizontal banner:
- Full width (~970px)
- Sperti brand colors: navy bg `#10106A`, white text, orange accents `#FF9F00`
- Left: Sperti logo image
- Right: "Sperti Vitamin D Lamp" name + short tagline ("Trusted since 1933 · 50K+ Sold · 7 Year Warranty")
- Pure HTML/CSS — no carousel JS needed

**Image needed from Brad:**
- `sperti-amazon_files/sperti-logo.png` — **600 × 120 px** (transparent PNG preferred)
- OR: can be built as pure CSS/text if Brad doesn't have a clean logo file

---

## Item 9 — A+ content: Steps
**Location:** `id="aplus_feature_div"` at line 22795 — **currently empty**

Fill with 5-step how-to layout styled in Amazon A+ visual language.

**Questions for Brad before building:**
1. Is the print file a **single wide infographic** (export at 970 px wide) or **separate images per step** (300 × 400 px each)?
2. What are the exact **5 step titles and descriptions** from the box/website copy?

**Placeholder step structure (pending Brad's copy):**
1. Determine Your Skin Type
2. Review Medical History
3. Set Up Your Lamp
4. Put On Eye Protection
5. Begin 5-Minute Sessions

**Images needed from Brad:**
- Option A (single infographic): `sperti-aplus-steps.jpg` at **970 × 600 px**
- Option B (separate per step): `sperti-aplus-step-1.jpg` through `sperti-aplus-step-5.jpg` at **300 × 400 px** each

---

## Key Line Numbers for Reference
| Section | Line(s) |
|---------|---------|
| `<title>` tag | 2117 |
| Visible H1 / productTitle | 14234–14238 |
| Feature bullets list | 15799–15844 |
| provenanceCertifications (Additional Details) | 15847 |
| aplusBrandStory_feature_div (From the Brand) | 21823–22792 |
| aplus_feature_div (A+ content, currently empty) | 22795 |
| Image gallery main views (slots 0–6) | 12610–12840 |
| Thumbnail strip (slots 0–6) | 12931–13210 |
