# Kaunos VIP Transfer

Production-ready Next.js 15 app with `next-intl` localization (EN/TR/RU), Framer Motion animations, and a responsive Google Form embed for bookings.

## Tech Stack
- Next.js 15 (App Router)
- next-intl for i18n
- TailwindCSS for styling
- Framer Motion for UI animations

## Local Development
```bash
npm install
npm run dev
```
Open `http://localhost:3000/en`, `http://localhost:3000/tr`, or `http://localhost:3000/ru`.

## Production Build
```bash
npm run build
npm run start
```

## Deployment (GitHub → Vercel)
1. Initialize Git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial production build"
   git branch -M main
   ```
2. Create a new GitHub repo (e.g. `kaunos-vip-transfer`) and add remote:
   ```bash
   git remote add origin https://github.com/<your-org-or-user>/kaunos-vip-transfer.git
   git push -u origin main
   ```
3. Import in Vercel:
   - Go to `https://vercel.com/new` → Import the GitHub repo
   - Framework preset: `Next.js`
   - Root directory: `/` (default)
   - Environment variables: none required
   - Click Deploy; Vercel builds and gives a preview URL

4. Configure domain:
   - Add your domain (e.g., `kaunosviptransfer.com`) in Vercel → Domains
   - Update DNS per Vercel’s instructions

5. Post-deploy checks:
   - Visit EN/TR/RU routes: `/en`, `/tr`, `/ru`
   - Open Contact section: `/#contact` and confirm Google Form loads
   - Verify Open Graph image and favicon resolve

## SEO & Metadata
- `src/app/[locale]/layout.tsx` sets Open Graph and icons.
- Update `metadataBase` to your final production domain after it’s live.
- Recommended: add `public/og-image.png`, `robots.txt`, and `sitemap.xml`.

## Notes
- The Google Form CTA opens in a new tab.
- Animations align with strict types in Framer Motion 11.
- Localization messages in `src/app/messages/{en,tr,ru}.json`.
