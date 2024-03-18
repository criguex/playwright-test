# Playwright Project

## Introduction

This repository contains automated tests for Initial test using [Playwright](https://playwright.dev/). Playwright enables reliable end-to-end testing for modern web apps across all major browsers, including Chrome, Firefox, and WebKit. This project is structured to support testing across different environments and includes examples of both UI and API tests.

## Prerequisites

Before running the tests, ensure you have the following installed on your system:

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

## Installation

Follow these steps to set up your Playwright testing environment:

1. Clone this repository to your local machine:
git clone https://github.com/criguex/playwright-test


2. Navigate to the project directory:
cd playwright-project


3. Install the required dependencies:
npm install


4. (Optional) Install Playwright browsers. This step is only necessary if you haven't run Playwright on your system before, or if you need to install browsers for the first time:


npx playwright install


## Running Tests

To run all tests, use the following command:

npx playwright test


To run tests in a specific file:

npx playwright test tests/your-test-file.spec.js


For more advanced usage and to run tests across specific browsers, refer to the [Playwright CLI documentation](https://playwright.dev/docs/cli).

## Structure

- `tests/`: Contains test files. Organize your tests by functionality, pages, or features for better maintainability.
- `playwright.config.js`: Playwright configuration file. Customize it according to your project's requirements.

## Additional Resources

- [Playwright Documentation](https://playwright.dev/docs/intro) - Official Playwright documentation, including API reference and guides.
- [Playwright GitHub Repository](https://github.com/microsoft/playwright) - Source code and additional examples.















