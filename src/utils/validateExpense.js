function validateExpense(title, amount) {
  if (typeof title !== 'string' || !title.trim()) {
    return 'Title is required.'
  }

  if (amount === '' || !Number.isFinite(Number(amount))) {
    return 'Amount must be a number.'
  }

  if (Number(amount) <= 0) {
    return 'Amount must be greater than zero.'
  }

  return ''
}

export default validateExpense
