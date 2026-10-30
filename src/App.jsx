import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm.jsx'
import validateExpense from './utils/validateExpense.js'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([])
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [error, setError] = useState('')

  function addExpense(event) {
    event.preventDefault()
    const validationError = validateExpense(title, amount)

    if (validationError) {
      setError(validationError)
      return
    }

    setExpenses((currentExpenses) => [
      ...currentExpenses,
      { title: title.trim(), amount: Number(amount), category },
    ])
    setTitle('')
    setAmount('')
    setError('')
  }

  return (
    <main>
      <h1>Expense Tracker</h1>
      <ExpenseForm
        title={title}
        amount={amount}
        category={category}
        error={error}
        onTitleChange={setTitle}
        onAmountChange={setAmount}
        onCategoryChange={setCategory}
        onSubmit={addExpense}
      />
      <ul aria-label="Expenses">
        {expenses.map((expense, index) => (
          <li key={`${expense.title}-${index}`}>
            {expense.title} — {expense.amount} — {expense.category}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
