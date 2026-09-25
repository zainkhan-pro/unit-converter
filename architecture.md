# ZETA Architecture

## Layers
- **UI:** Next.js App Router + React + semantic HTML + Lucide icons.
- **Domain:** `src/lib/converter` contains unit definitions, resolution, deterministic math and all-units conversion.
- **Parser:** `src/lib/parser/natural.ts` resolves numeric natural-language requests through aliases.
- **Calculators:** pure deterministic functions.
- **Currency:** browser calls `/api/currency`; server keeps provider configuration private and validates the response.
- **Persistence:** LocalStorage for anonymous history/favorites; Prisma schema is included for future authenticated sync.
- **PWA:** manifest + service worker cache app shell/static resources.

## Data flow
User input → parser/unit resolver → conversion engine → formatted result → optional LocalStorage.
Currency input → API route → external rate provider → validated response → UI.

## Folder structure
`src/app` routes and API, `src/lib/converter` conversion engine, `src/lib/parser` parser, `src/lib/calculators.ts` calculators, `prisma` persistence model, `tests` automated tests.

## Extension rule
Adding a unit should normally require only a declarative definition and tests; the engine must not be rewritten.
