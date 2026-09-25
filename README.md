# ZETA — Ultimate Universal Converter

**Convert Anything. Instantly.**

ZETA is a production-oriented universal converter for physical, scientific, engineering, digital, financial and Pakistan-specific units.

## Included
- 18 conversion categories
- Deterministic conversion engine
- Natural-language parser
- Formula and all-units views
- Live currency API architecture
- History and favorites
- BMI, percentage, discount and tip calculators with extensible calculator library
- Dark/light theme
- PWA manifest and service worker
- SEO metadata, sitemap and robots
- Prisma/PostgreSQL schema for optional account synchronization
- Vitest tests

## Run
```bash
npm install
npm run dev
```

## Validate
```bash
npm run lint
npm test
npm run build
```

The execution environment used to package this archive did not complete `npm install` before timeout, so dependencies are intentionally not bundled. Run `npm install` locally or in CI.

## Environment
Copy `.env.example` to `.env.local`. `EXCHANGE_RATE_API_URL` must point to a provider returning a `rates` object. Do not commit secrets.

## Production notes
Set a real domain in `metadataBase` and sitemap, configure HTTPS, set the live currency provider, optionally configure PostgreSQL/Prisma for authenticated sync, then run the full validation commands.
