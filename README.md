![Logo](https://codetekt-logo.s3.eu-central-1.amazonaws.com/codetekt_V2_rgb%404x.png)

---

# codetekt Frontend


## Setup

This project uses Husky to add a pre-commit hook, that runs the linter
If you want to commit without running the hook, add --no-verify.
you may need to run `husky install` during setup
`yarn husky install`
or
`npx husky install`



## Development server
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

Angular based frontend for the [codetekt](https://codetekt.org) website.

## Tech Stack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).
Interfaces to AWS backend services are handled by the [AWS Amplify Framework](https://aws.amazon.com/de/amplify/).

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via Jest.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via Cypress.

### Running linting

Run `ng lint` to run linting via ESLint.

---

## Acknowledgements

- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [Amplify Framework](https://aws.amazon.com/de/amplify/)

### to run just until first failure
`yarn test -b`

### to run just one test
`yarn test --test-path-pattern=/src/app/archive/components/archive/archive.component.spec.ts`

## Running end-to-end tests
---

## License

Copyright 2021, codetekt e.V.

Licensed under [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.html).
