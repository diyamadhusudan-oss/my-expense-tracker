# Prompt Library

## 1. New feature
Context: [what the app is and which files are involved]
Goal: [the one feature to add]
Constraints: [no new dependencies, files you may or may not touch, follow AGENTS.md]
Acceptance criteria: [numbered list, each one checkable by a test]
Examples: [sample inputs and expected results]
First give me a plan and wait for my approval before writing any code.

## 2. Bug fix
Bug: [what is going wrong]
Steps to reproduce: [1, 2, 3]
Expected: [what should happen]
Actual: [what happens instead]
Constraints: Fix only this bug, do not refactor other code. Add a test that fails before the fix and passes after.

## 3. Refactor
Goal: [what to clean up, e.g. move validation into src/utils]
Constraints: Behaviour must not change. All existing tests must still pass. No new dependencies.
Show me a plan first, then make the change in small steps.

## 4. Generate tests
Write tests for [feature or file] using Vitest and React Testing Library.
Cover: [valid cases, invalid cases, edge cases]
Rules: Each test must fail if the feature is broken. Do not write tests that pass regardless. Do not change the source code.

## 5. Review diff
Review this diff: [paste git diff]
Check: Does it match the request? Any bugs or missed edge cases? Anything outside the task scope? Anything that breaks AGENTS.md rules?
List problems by importance. Do not change any code.

## 6. Commit message
Write a one-line commit message (under 70 characters, present tense) for this diff: [paste git diff]
Then add a short description of what changed and why.

---

# Five-part prompt: Add expense feature

## Context
This is a React + Vite expense tracker. State is kept in App.jsx and passed to children as props. Components go in src/components, one per file. Validation logic goes in src/utils/validateExpense.js. Follow AGENTS.md.

## Goal
Build an ExpenseForm component that lets the user add an expense with a title, an amount and a category (Food, Travel, Bills, Other). Valid expenses are added to the list held in App.

## Constraints
- No new dependencies.
- Only create or edit ExpenseForm.jsx, validateExpense.js and App.jsx.
- Add data-cy attributes: title, amount, category, add-expense, error.
- Add a short comment at the top of the component explaining its props and state.
- Show a plan first and wait for approval before writing code.

## Acceptance criteria
1. Entering title "Lunch", amount "250", category "Food" and clicking add-expense adds exactly one expense to the list.
2. After a successful add, the title and amount fields are cleared.
3. An empty title shows an error message (data-cy="error") and adds nothing.
4. A non-numeric amount such as "abc" shows an error and adds nothing.
5. An amount of 0 shows an error and adds nothing.
6. A negative amount such as -5 shows an error and adds nothing.
7. validateExpense returns an error for each invalid case above and no error for a valid expense.

## Examples
Valid: ("Lunch", "250", "Food"), ("Cab", "400.50", "Travel")
Invalid: ("", "100", "Food"), ("Rent", "abc", "Bills"), ("Snack", "0", "Food"), ("Taxi", "-20", "Travel")