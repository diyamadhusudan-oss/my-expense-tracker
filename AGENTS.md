# AGENTS.md

## Stack
- React (Vite), JavaScript
- Vitest + React Testing Library for unit and component tests
- Cypress for end-to-end tests
- Node.js 20

## Folder layout
- src/App.jsx: main component, holds all app state
- src/components/: one file per component (ExpenseForm, ExpenseList, ExpenseItem, CategoryFilter)
- src/utils/: pure helper functions (validateExpense, calculateTotal)
- src/__tests__/ (or next to each file): Vitest tests
- cypress/e2e/: Cypress specs

## Commands
- Install: npm install
- Run the app: npm run dev
- Unit/component tests: npm test (or npx vitest run)
- Coverage: npx vitest run --coverage
- Lint: npm run lint
- E2E tests (app must be running): npm run cy:run

## Conventions
- One component per file.
- State lives in App and is passed down as props. Child components do not own shared state.
- Put logic in pure functions in src/utils so it is easy to test.
- Add a short comment at the top of every component explaining its props and state.
- Use data-cy attributes on elements that tests need (title, amount, category, add-expense, total, filter, expense-item, count, delete-expense).
- Categories are: Food, Travel, Bills, Other.

## Rules
- Do not add new dependencies without asking first.
- Always work on a branch, never directly on main.
- Make small, scoped changes. Do not edit files unrelated to the task.
- Ask for a plan and wait for approval before writing code.
- At the end of each task, summarise what changed so it can go in the PR description.