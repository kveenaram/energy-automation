# Automated Test Framework

## Prerequisites
- Node.js 18.18 or later
- npm

## Setup
1. Clone the repository
2. Run `npm install` to install dependencies.
3. Run `npx playwright install` to install browsers.
4. Run `npm run build` to compile TypeScript files.

## Running Tests
- All tests: ```npm run test```
- UI tests only: ```npm run test:ui```
- API tests only: ```npm run test:api```
- With browser visible: ```npm run test:headed```

## View Reports
```npm run report```

## Project Structure
- `tests/ui/` - UI Tests
- `tests/api/` - API Tests
- `pages/` - Page Object Model for UI elements
- `utils/` - Reusable functions (e.g. API calls)
