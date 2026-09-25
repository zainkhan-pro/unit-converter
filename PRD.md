# ZETA — Product Requirements Document

## Vision
ZETA is a commercial-grade universal conversion platform: physical, scientific, engineering, digital, currency, calculators and Pakistan-specific units in one fast interface.

## Users
Students, developers, engineers, finance users, office workers, travelers and Pakistan-based users.

## Core requirements
- Deterministic unit conversion with declarative definitions.
- Natural-language parser for common requests.
- All-units results and readable formulas.
- Live currency through a server-side provider; never fake or hardcode current rates.
- Anonymous history and favorites using LocalStorage.
- Calculator suite.
- Responsive mobile-first UX, accessibility and dark/light theme.
- PWA shell and offline support for static conversion features.
- SEO metadata, sitemap and robots.

## User flows
1. Enter amount and select source/target units.
2. Or enter a request such as `5 kg to pounds` and press Enter.
3. Review result, formula and all-units view.
4. Copy, favorite or save to history.
5. For currency, request a live server-side rate and show its update timestamp.

## Non-functional requirements
Fast startup, no exposed secrets, safe input validation, maintainable TypeScript, deterministic tests and no fake production behavior.
