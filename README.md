# OpenCart System Tests

This repository contains Assignment 3 automated system tests for the OpenCart demonstration website at https://opencart.abstracta.us/.

## Scope

The project contains three test cases assigned to Member A:

1. T-A01 - F1 User Registration
2. T-A02 - F2 User Login
3. T-A03 - F3 User Logout

Each test case contains three independently reported test scenarios. See [TEST_CASES.md](TEST_CASES.md) for the scenario definitions and expected results.

The latest verified run is documented in [TEST_RESULTS.md](TEST_RESULTS.md).

## Technology

- JavaScript
- Node.js
- TestCafe 3.7.6
- Google Chrome or Chromium

## Project structure

```text
tests/
  helpers/account.js
  registration.test.js
  login.test.js
  logout.test.js
artifacts/
  screenshots/
  test-results.json
```

## Installation

```bash
npm install
```

## Run tests with a visible Chrome browser

```bash
npm test
```

## Run tests in a Codespace or other headless environment

```bash
npm run test:headless
```

Individual test cases can be run with:

```bash
npm run test:registration
npm run test:login
npm run test:logout
```

## Evidence

The test run produces console results, a JSON result file, and screenshots. TestCafe also captures a screenshot automatically when a scenario fails.

## Responsible use of test data

All account information is synthetic. The test suite generates unique `example.com` email addresses and does not contain personal credentials.
