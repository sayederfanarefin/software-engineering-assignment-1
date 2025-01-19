# Assignment 1 - Git, GitHub, and TypeScript Starter Code

This assignment provides a basic Express server with a single endpoint that computes the factorial of a given integer. The purpose is to practice setting up a TypeScript project, configuring linting and tests, and running automated checks via GitHub Actions.

## Running the App

1. Make sure you have TypeScript and npm installed.
2. Run `npm install` to install dependencies.
3. Run `npm start` to build and start the server.
4. Open your browser and go to `http://localhost:3000/factorial/<n>` to see the result for `factorial(n)`.

## Running Tests and Linter

A GitHub Action is set up to run ESLint and the Jest tests for the factorial endpoint.

- To run the linter locally, use: `npm run lint`
- To run the tests locally, use: `npm run test`
- Testing Phase
