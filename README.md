# Date Invitation Project 💕

A playful, mobile-first React web app that invites someone on a date through five interactive steps: the ask, date selection, activity, food, and confirmation.

## Features

- Animated Yes and shrinking No buttons
- Changing real-animal GIFs
- Two-month future-date calendar
- Quick date shortcuts
- Activity and food choice cards
- Confetti confirmation screen
- Responsive mobile-first layout
- Automated GitHub Pages deployment

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the app and deploys the `dist` directory to GitHub Pages.

Expected site address:

`https://hujaafar.github.io/date-invitation-project/`

## Product Requirements

The complete English product requirements document is available in [`PRD.md`](./PRD.md).
