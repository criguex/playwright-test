# Playwright E2E Test Suite

[![Playwright Tests](https://github.com/criguex/playwright-test/actions/workflows/playwright.yml/badge.svg)](https://github.com/criguex/playwright-test/actions/workflows/playwright.yml)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-45ba4b?logo=playwright&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

End-to-end test automation suite for [SauceDemo](https://www.saucedemo.com) built with **Playwright** and **TypeScript**, following the **Page Object Model (POM)** pattern. Tests run across Chromium, Firefox, and WebKit on every push via GitHub Actions.

## Tech Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev) | Cross-browser E2E automation |
| TypeScript | Type-safe test authoring |
| GitHub Actions | CI/CD pipeline |
| Page Object Model | Maintainable test architecture |

## Test Coverage

| Module | Tests |
|---|---|
| Login | Valid login, locked user, invalid credentials |
| Inventory | Product listing, sort by name/price, add to cart |
| Cart | Item management, item removal |
| Checkout | Full E2E purchase flow, order confirmation |

## Project Structure

```
test_playwrite/
├── tests/
│   ├── pageobjects/
│   │   ├── LoginPage.ts       # Login page interactions
│   │   ├── InventoryPage.ts   # Product inventory interactions
│   │   ├── CartPage.ts        # Shopping cart interactions
│   │   └── CheckoutPage.ts    # Checkout flow interactions
│   ├── TestSwag.spec.ts       # Login test scenarios
│   ├── inventory.spec.ts      # Inventory test scenarios
│   └── checkout.spec.ts       # E2E checkout test scenarios
├── playwright.config.ts       # Playwright configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/criguex/playwright-test.git
cd playwright-test/test_playwrite
npm install
npx playwright install
```

### Running Tests

```bash
# Run all tests (headless)
npx playwright test

# Run tests in a specific file
npx playwright test tests/checkout.spec.ts

# Run tests in UI mode
npx playwright test --ui

# Run tests in headed mode
npx playwright test --headed

# Run on a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# View HTML report
npx playwright show-report
```

## CI/CD

Tests run automatically on every push and pull request to `main` via GitHub Actions. The HTML report is uploaded as an artifact after each run and retained for 30 days.

## License

MIT
