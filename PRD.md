# Product Requirements Document: Interactive Date Invitation Web App

## Overview

A fun, interactive single-page web app that invites one person on a date through a five-step flow featuring real-animal GIFs, playful button behavior, a touch-friendly date picker, activity and food selection, and an animated confirmation screen.

## Purpose and Audience

- Share as a link through text message or direct message.
- Designed for one recipient.
- Casual, funny, slightly cringe, and cute.
- No login or account required.
- Mobile-first and responsive across modern devices.

## Visual Design

- Background: white to very light pink.
- Floating heart decorations moving upward.
- Primary color: `#fa0561`.
- Headline color: `#d32f2f`.
- Body copy: neutral gray.
- Cards: white, pink border, large rounded corners, subtle shadow.
- Font: Nunito with extra-bold headlines and semibold controls.
- Motion: spring button animations, staggered card entrances, and step transitions.

## User Flow

### Step 1: The Ask

Headline: “Will you go on a date with me?”

The Yes button grows after every No click. The No button shrinks, changes text, and becomes difficult to press. The animal GIF and supporting message also change after repeated No clicks.

### Step 2: Calendar

Headline: “When are you free?”

- Show the current and following month on desktop.
- Show one month on smaller screens.
- Disable today and all past dates.
- Highlight the selected date in pink.
- Provide shortcuts for Friday, weekend, next week, and tomorrow.

### Step 3: Activity

Headline: “What are we feeling?”

Options include movie night, park walk, cooking, stargazing, game night, and a drive.

### Step 4: Food

Headline: “Now the important question...”

Options include sushi, pizza, ramen, burgers, tacos, and ice cream.

### Step 5: Confirmation

- Display confetti and a celebration GIF.
- Show the selected date, activity, and food.
- Show a pulsing heart.
- Provide a restart action.

## Technical Requirements

- React 19 and TypeScript.
- Vite build tooling.
- Tailwind CSS 4.
- Framer Motion animations.
- State-driven single-page flow without routing.
- GitHub Actions deployment to GitHub Pages.
- External GIFs must feature real animals and avoid copyrighted fictional characters.

## Success Criteria

- The complete flow works on mobile and desktop.
- No past date can be selected.
- Every selection is retained through confirmation.
- The project builds without TypeScript errors.
- Pushes to `main` initiate deployment.
