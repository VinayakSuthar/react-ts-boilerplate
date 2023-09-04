# React TS Boilerplate

![vite](src/assets/vite.svg)
![react](src/assets/react.svg)
![typescript](src/assets/typescript.svg)
![prettier](src/assets/prettier-2.svg)
![eslint](src/assets/eslint-1.svg)

A boilerplate project for building modern web applications using React, Vite, TypeScript, ESLint, Prettier, Husky, Vitest, and GitHub Actions.

## Features

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast, modern development build tool.
- **TypeScript**: A statically typed superset of JavaScript.
- **ESLint**: A pluggable linting utility for JavaScript and TypeScript.
- **Prettier**: An opinionated code formatter.
- **Husky**: Git hooks made easy.
- **Vitest**: A simple, lightweight, and fast testing framework.
- **GitHub Actions**: Automate your workflow with CI/CD.

## Getting Started

Get your project up and running with the following steps:

### Prerequisite

Before you begin, ensure you have met the following requirements:

1. Node 18
2. Yarn

### Installation

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

- `yarn run dev` start Vite dev server in the current directory at `localhost:5173`.
- `yarn run lint` to lint your code.
- `yarn run format` to automatically format your code with Prettier.
- `yarn run build` generates a production-ready bundle.

> **Note**  
> To make sure that Eslint and Prettier run before every commit, run the command `yarn run prepare` after setting up your project.

### Continuous Integration (GitHub Actions)

This project is set up for continuous integration using GitHub Actions. The CI pipeline includes running tests and deploying to Github Pages. You can view the CI/CD workflows in the .github/workflows directory.
