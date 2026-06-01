# LP Learning

Onboarding site for developers joining the LP Go/Fiber team from a Node.js background. 13 modules: Foundation → Craft → Project.

## Open locally

```bash
open index.html          # macOS double-click also works
# or with a local server:
npx serve .              # then visit http://localhost:3000
```

## Add a lesson

1. Create `lessons/NN-topic.html` following the template in any existing lesson
2. Add the entry to the `LESSONS` array in `js/nav.js`
3. Update `COVERAGE.md` if the lesson covers project-specific code

## Keep content fresh

When adding a library, changing a standard, or modifying middleware in `lp-coupon-api` or `lp-reward-store-api` — check `COVERAGE.md` and update the affected lesson.
