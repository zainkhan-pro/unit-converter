# Engineering Rules

- TypeScript strict mode; no `any` unless unavoidable at an external boundary.
- Deterministic mathematics never uses AI.
- Current exchange rates are never hardcoded.
- API keys and provider URLs belong in environment variables.
- Validate inputs and external API responses.
- Never expose stack traces to users.
- No fake data for production features.
- Keep dependencies minimal.
- Every button must work or clearly communicate why it cannot.
- Prefer pure functions, immutable data and declarative unit definitions.
- Test zero, decimals, large/small values, invalid units and parser aliases.
- Respect reduced-motion and accessibility improvements when expanding UI.
