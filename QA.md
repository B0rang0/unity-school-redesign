# Desktop QA Status

## Passed by repository audit
- All primary desktop routes exist
- Shared header, footer, CSS and JavaScript load on every primary page
- No duplicate HTML IDs found in primary pages
- Internal route targets resolve
- Checked internal anchor links point to existing IDs
- Staging pages are blocked from indexing
- Legacy redirect map includes the major known old paths
- No fabricated calendar events
- Handbook is linked through the handbook hub instead of hard-coding an obsolete PDF
- Lessons in Living uses the corrected /academics/lessons-in-living/ URL

## Desktop widths targeted
- 1920
- 1440
- 1366
- 1280

## Still requires visual browser review before launch
- Real Unity School photography and official logo replacement
- Pixel-level review at each target width
- Keyboard navigation through dropdowns and search modal in a real browser
- Contrast review after final photography is inserted
- External third-party flow review for FACTS/RenWeb, Nutrislice and tour/application pages
- Live calendar presentation
- Production contact-form backend decision
- Final staff review of tuition, leadership, athletics and family-resource content immediately before launch

## Launch blockers intentionally left in place
- meta robots noindex,nofollow
- robots.txt disallow all
- placeholder photography SVG
