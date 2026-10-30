// Props: App supplies field values, error, change handlers, and submit handler; this component owns no state.
function ExpenseForm({ title, amount, category, error, onTitleChange, onAmountChange, onCategoryChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="expense-title">Title</label>
      <input
        id="expense-title"
        name="title"
        data-cy="title"
        type="text"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
      />

      <label htmlFor="expense-amount">Amount</label>
      <input
        id="expense-amount"
        name="amount"
        data-cy="amount"
        type="number"
        step="any"
        value={amount}
        onChange={(event) => onAmountChange(event.target.value)}
      />

      <label htmlFor="expense-category">Category</label>
      <select
        id="expense-category"
        name="category"
        data-cy="category"
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Other</option>
      </select>

      <button type="submit" data-cy="add-expense">Add</button>
      {error && <p data-cy="error" role="alert">{error}</p>}
    </form>
  )
}

export default ExpenseForm
