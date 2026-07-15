# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.



```md
# DPS Professional Tax Services

A modern React website for DPS Professional Tax Services in Maplewood, NJ. This project was built to showcase the business, highlight services, support multiple languages, provide contact and booking information, and create a more professional online presence.

## Project Overview

I rebuilt the DPS Professional Tax Services website in React using Vite. The goal was to create a clean, responsive, and professional business website that presents tax and support services clearly while making it easier for customers to contact the office, book appointments, and find business information.

## What I Built

This React project includes:

- A top bar with contact information, language options, and business/social links
- A sticky header with navigation links
- A hero section with a strong business introduction and call-to-action buttons
- A stats section highlighting trust and experience
- A services section showing the business offerings
- A "How It Works" section for a simple customer process
- A multilingual language support section
- A mission, vision, and commitment section
- A "Why Choose Us" section
- A booking section with appointment form and payment information
- A real estate partner section
- A FAQ section
- A community gallery
- A testimonials section
- A contact section with office details, hours, and embedded Google Map
- A footer with branding and quick business links

## Tech Used

- React
- Vite
- JavaScript
- CSS
- React Icons
- AOS (Animate On Scroll)

## React Component Structure

The app was broken into reusable components:

- `TopBar.jsx`
- `Header.jsx`
- `Hero.jsx`
- `Stats.jsx`
- `Services.jsx`
- `HowItWorks.jsx`
- `Languages.jsx`
- `Purpose.jsx`
- `WhyChoose.jsx`
- `Booking.jsx`
- `Realty.jsx`
- `FAQ.jsx`
- `Gallery.jsx`
- `Testimonials.jsx`
- `Contact.jsx`
- `Footer.jsx`

## What I Did Step by Step

1. Created a new React app using Vite.
2. Installed dependencies with `npm install`.
3. Started the dev server with `npm run dev`.
4. Moved the website layout into React component files.
5. Broke large page sections into reusable components.
6. Moved all styling into `index.css`.
7. Converted HTML to JSX by changing:
   - `class` to `className`
   - `for` to `htmlFor`
   - inline DOM attributes to React-friendly syntax
8. Moved all website images into the `public` folder.
9. Updated image paths to use `/filename.jpg` style paths.
10. Added business sections like services, language support, FAQ, gallery, testimonials, contact, and booking.
11. Added embedded Google Maps to the contact section.
12. Added business links for WhatsApp and Google search/business access.
13. Added icon support using `react-icons`.
14. Added AOS animation support to make sections feel smoother and more modern.
15. Added a "How It Works" section for a more user-friendly customer flow.
16. Kept the layout clean and professional while still making it feel modern.

## Features

- Responsive layout
- Sticky navigation
- Business contact links
- WhatsApp quick access
- Google business and location links
- Appointment form
- Real estate partner section
- Embedded Google Map
- Testimonials and photo gallery
- Scroll animations with AOS
- Multi-section one-page layout

## Important React Concepts Used

- Component-based structure
- Props where needed
- JSX
- Import/export workflow
- CSS styling in React
- Working with images in the `public` folder
- Third-party packages like `react-icons` and `aos`

## Folder Structure

```bash
src/
  components/
    Booking.jsx
    Contact.jsx
    FAQ.jsx
    Footer.jsx
    Gallery.jsx
    Header.jsx
    Hero.jsx
    HowItWorks.jsx
    Languages.jsx
    Purpose.jsx
    Realty.jsx
    Services.jsx
    Stats.jsx
    Testimonials.jsx
    TopBar.jsx
    WhyChoose.jsx
  App.jsx
  index.css
  main.jsx

public/
  DPS-LOGO1.png
  tax-desktop.jpg
  ...
```

## How to Run the Project

```bash
npm install
npm run dev
```

## How to Build the Project

```bash
npm run build
```

## Notes

A few key fixes I made while building:
- fixed JSX syntax issues
- fixed import/export errors
- corrected image paths from `./public/...` to `/...`
- corrected `className` issues
- fixed icon imports
- separated the large HTML file into smaller React components

## Author

Samuel
```

Before you push:
- replace the default Vite README fully with this
- save it as `README.md`

Also, from your screenshot, you ran:
```bash
git init
```
inside the React project


```bash
git status
```

Then:

```bash
git add .
git commit -m "Build DPS Professional Tax Services React site"
```

