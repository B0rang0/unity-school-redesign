# Unity School Redesign

Desktop-first redesign of Unity School's public website.

## Implemented routes
- `/` — Home
- `/about/` — About
- `/admissions/` — Admissions
- `/academics/` — Academics
- `/academics/montessori-preschool/`
- `/academics/elementary/`
- `/academics/middle-school/`
- `/academics/lessons-in-living/`
- `/student-life/`
- `/athletics/`
- `/families/`
- `/contact/` — Contact + Schedule a Tour
- `/support-unity/`
- Custom `404.html`

## Architecture
Plain multi-page HTML/CSS/JavaScript site designed for simple Netlify staging and future CMS integration.

Shared files:
- `assets/css/base.css`
- `assets/css/pages.css`
- `assets/js/site.js`
- `assets/images/photo-placeholder.svg`

The shared JavaScript injects the global utility bar, primary navigation, dropdowns, search dialog and footer so page markup does not duplicate those components.

## Desktop status
Repository-level structural QA is complete:
- primary routes resolve
- internal checked anchors resolve
- no duplicate IDs found
- shared shell is present on every primary page
- JavaScript syntax check passes
- CSS brace balance passes
- legacy redirect file is present

See `QA.md` for details.

## Staging safety
The build is intentionally blocked from search indexing:
- every page includes `noindex,nofollow`
- `robots.txt` disallows crawling

Remove those protections only when the new production site is approved for launch.

## Content rules
- No fabricated events or school statistics
- Dynamic events should come from the live calendar
- Handbook links go to the resource hub rather than an old PDF
- Enrichment does not promote stale Spring 2024 documents
- Financial-aid deadlines are not hard-coded
- Lessons in Living uses the corrected route `/academics/lessons-in-living/`

## Production blockers
1. Replace placeholder photography with approved Unity School photos
2. Replace temporary U mark with the official Unity School logo
3. Perform visual browser QA at 1920, 1440, 1366 and 1280 px
4. Confirm final form backend / submission workflow
5. Confirm live calendar presentation
6. Run final staff content review immediately before launch

See:
- `ASSET-MANIFEST.md`
- `CONTENT-SOURCES.md`
- `QA.md`
