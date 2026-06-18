# Draphera.com

Static public website for the Draphera ecosystem.

Draphera.com is the main narrative and brand portal for Draphera: identity, manifesto, ecosystem overview, VISION access and contact entry point. The site is intentionally static, lightweight and deployable on GitHub Pages or Vercel without a build pipeline.

## Production URL

- GitHub Pages: https://draphera.github.io/
- Repository: https://github.com/Draphera/draphera.github.io

## Architecture

```text
/
|-- index.html
|-- manifesto.html
|-- ecosystem.html
|-- vision.html
|-- contact.html
|-- privacy.html
|-- assets/
|   |-- css/
|   |   |-- main.css
|   |-- js/
|   |   |-- main.js
|   |-- img/
|   |-- icons/
|-- README.md
```

## Technical Profile

- Static HTML, CSS and vanilla JavaScript.
- No React, Next.js, Vue or build dependency.
- GitHub Pages compatible from repository root.
- Responsive layout for desktop, tablet and mobile.
- Light/dark theme toggle with local browser persistence.
- Lightweight language support for IT, EN, ES, FR and DE using `?lang=` plus localStorage.
- Contact form is static and does not transmit data until connected to Formspree, Netlify Forms or a future backend.

## Brand And UI Notes

- Premium dark violet / black visual system with gold accents.
- Uses existing Draphera visual assets in `assets/img/`.
- Secondary pages reuse the main hero visual language for consistency.
- Main home CTAs are intentionally limited to VISION and the contact form.
- Footer includes ecosystem links, privacy and official social channels.

## Local Development

Open `index.html` directly in the browser, or serve the folder with a local static server.

With PHP/XAMPP:

```powershell
& 'C:\xampp\php\php.exe' -S 127.0.0.1:8080 -t 'C:\xampp\htdocs\draphera.com'
```

Then visit:

```text
http://127.0.0.1:8080/
```

## Deployment: GitHub Pages

This repository is intended to publish from `main` at repository root.

1. Commit changes locally.
2. Push to `main`.
3. Open `Settings -> Pages` on GitHub.
4. Confirm:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ root`

## Pre-Push Checklist

Run before publishing meaningful changes:

```powershell
node --check assets\js\main.js
git status --short
```

Manual browser checks:

- Home loads in dark mode.
- Light mode keeps hero text readable.
- Desktop, tablet and mobile have no horizontal overflow.
- Language selector updates visible copy.
- Contact form remains static and does not submit data.
- Footer links and social links open correctly.

## Social Channels

- Facebook: https://www.facebook.com/draphera
- Instagram: https://www.instagram.com/draphera
- LinkedIn: https://www.linkedin.com/company/draphera

## Maintenance

- Keep the site static unless a real integration requires otherwise.
- Prefer edits in `assets/css/main.css` and `assets/js/main.js`.
- Avoid adding heavy dependencies.
- Keep claims conservative: ecosystem, infrastructure, private preview, vector technologies, technical patternmaking, verifiable data, interoperability and digital assets.
