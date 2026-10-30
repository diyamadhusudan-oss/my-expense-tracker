import ExpenseItem from './ExpenseItem.jsx'

// Props: receives the expenses array from App; this component owns no state.
function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p data-cy="empty">No expenses yet</p>
  }

  return (
    <ul aria-label="Expenses">
      {expenses.map((expense, index) => (
        <ExpenseItem key={`${expense.title}-${index}`} expense={expense} />
      ))}
    </ul>
  )
}

export default ExpenseList
