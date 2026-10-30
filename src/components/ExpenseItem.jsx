// Props: receives one expense from ExpenseList; this component owns no state.
function ExpenseItem({ expense }) {
  return (
    <li data-cy="expense-item">
      <span data-cy="expense-title">{expense.title}</span>
      {' - '}
      <span data-cy="expense-category">{expense.category}</span>
      {' - '}
      <span data-cy="expense-amount">{Number(expense.amount).toFixed(2)}</span>
    </li>
  )
}

export default ExpenseItem
