# Gallery Work Session — 2026-06-05

## Files
- `human-study/sperti-amazon-offline.html` — **ORIGINAL, untouched** (restored from git 60b9c95). Keep this as the safety copy.
- `human-study/sperti-amazon-v2.html` — **WORKING COPY** with all Jessica edits + custom gallery. This is the one to use.

## What v2 Has
- Updated title (Sperti Vitamin D Lamp - 7 Year Warranty...)
- Updated bullets (IS THIS BOX RIGHT FOR YOU first, EFFICIENT AND EFFECTIVE deleted)
- Updated From the Brand section
- Updated A+ content / How It Works steps
- Working gallery (Amazon's original JS restored, all images local)
- Working hover zoom
- Working lightbox popup with MutationObserver thumbnail fix

## Gallery Image System
All gallery images live in `human-study/sperti-amazon_files/` with clean numbered names.

| Slot | Main Image | Thumbnail | Source |
|------|-----------|-----------|--------|
| 1 | gallery-1.jpg | gallery-1-thumb.jpg | Lamp on white bg (hero) |
| 2 | gallery-2.jpg | gallery-2-thumb.jpg | Sperti lifestyle woman |
| 3 | gallery-3.jpg | gallery-3-thumb.jpg | Sperti lifestyle man |
| 4 | gallery-4.jpg | gallery-4-thumb.jpg | Lamp angle |
| 5 | gallery-5.jpg | gallery-5-thumb.jpg | Lamp accessories |
| 6 | gallery-6.jpg | gallery-6-thumb.jpg | Lamp with goggles/parts |
| 7 | gallery-7.jpg | gallery-7-thumb.jpg | Box/shipping |
| 8 | gallery-8.jpg | gallery-8-thumb.jpg | Wide panoramic shot |
| 9 | gallery-9.jpg | gallery-9-thumb.jpg | Another product view |

**To swap an image:** Replace `gallery-N.jpg` and `gallery-N-thumb.jpg` in `sperti-amazon_files/`. No HTML edits needed.

**To add a new slot (10+):** Add one entry to the `thumbs` array in the MutationObserver script near the top of `<head>` in v2, and add the image files.

**Thumbnail spec:** 100×100 px JPEG. Created originally with: `sips -z 100 100 source.jpg --out gallery-N-thumb.jpg`

## Lightbox Thumbnail Fix (MutationObserver)
Amazon's IV lightbox JS sets thumbnail `background-image` from CDN URLs. The fix is a `MutationObserver` injected at the top of `<head>` that:
1. Watches `#ivThumbs` for child/style mutations
2. Overrides each `.ivThumbImage` background-image with `gallery-N-thumb.jpg` using `setProperty(..., 'important')`
3. Retries at 50ms, 150ms, 400ms to catch late-rendered elements (Amazon creates some thumbnails in a second pass)
4. Loop-prevents by checking if the value is already set before writing

## Downloaded CDN Images (now local)
All original Amazon product photos downloaded to `sperti-amazon_files/`:
- `71-ogGmdaaL._AC_SL1500_.jpg`, `716fhL1X6DL._AC_SL1500_.jpg`
- `81o35u7NfaL._AC_SL1500_.jpg`, `815RhCKuERL._AC_SL1500_.jpg`
- `71CJ5gF0bXL._AC_SL1500_.jpg`, `61LKYLxQzlL._AC_SL1500_.jpg`
- `813YlPzsv4L._AC_SL1500_.jpg`, `71v1yCsr-iL._AC_SL1440_.jpg`
- Various `_AC_US100_` thumbnails

## Known Issues at Session End
- Lightbox thumbnail thumbnails show but are slightly mismatched (Brad will fix by swapping gallery-N-thumb.jpg files)
- 9th thumbnail may still be blank — retry timer should fix it; test on reload

## Next Steps (Brad's plan)
- Brad will swap out gallery images with final Sperti assets using the numbered system
- Future: introduce new images that don't exist on Amazon CDN (the reason for this whole offline gallery project)
