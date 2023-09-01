# React TS Boilerplate

![vite](src/assets/vite.svg)
![react](src/assets/react.svg)
![typescript](src/assets/typescript.svg)
![prettier](src/assets/prettier-2.svg)
![eslint](src/assets/eslint-1.svg)

This boilerplate contains guidelines for a frontend React app.

The following tools are used:

- Basic React installation with [Vite](https://vitejs.dev/guide/)
- Typescript
- ESLint: for testing the static code
- Prettier: for formatting the code
- Husky: executes ESLint and Prettier before every commit
- Path alias for file import
- Basic test cases with [Vitest](https://vitest.dev/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- Github pipeline workflow

## Getting Started

Get your project up and running with the following steps:

## Prerequisite

1. Node 18
2. Yarn

## Setup

1. Fork and clone the repo

   ```sh
   git clone git@github.com:VinayakSuthar/react-ts-boilerplate.git
   ```

2. Install Dependencies

   ```sh
   yarn
   ```

3. Run development server

   ```sh
   yarn run dev
   ```

### Development

- `yarn run dev` Start Vite dev server in the current directory at `localhost:5173`.
- `yarn run lint` to run full linter.
- `yarn run format` to format code.
- `yarn run build` generates a production-ready bundle.

> **Note**  
> To make sure that Eslint and Prettier run before every commit, run the command `yarn run prepare` after setting up your project.
