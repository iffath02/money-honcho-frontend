import { useEffect, useState } from "react"
import "./Expense.css"
import { allCategories } from "../utils/categories_api"
import {
  createExpense,
  expensesChartData,
  allExpenses,
  deleteExpense,
} from "../utils/expenses_api"
import PieChart from "./PieChart"
import { TiDelete } from "react-icons/ti"

export default function Expense({ user_id }) {
  const [formData, setFormData] = useState([])
  const [categories, setCategories] = useState([])
  const [data, setData] = useState([])
  const [expenseChart, setExpenseChart] = useState([])
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    allCategories().then(setCategories)
  }, [])

  useEffect(() => {
    expensesChartData(user_id).then(setExpenseChart)
  }, [data])

  useEffect(() => {
    allExpenses(user_id).then(setExpenses)
  }, [data])

  const handleSubmit = e => {
    e.preventDefault()
    createExpense(user_id, formData).then(res => setData(res))
  }

  console.log(data)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleClick = id => {
    deleteExpense(id).then(() =>
      setData(data.filter(expense => expense.id !== id))
    )
  }

  return (
    <div className="expense-wrapper">
      <section className="add-expense">
        <form onSubmit={handleSubmit}>
          <select onChange={handleChange} name="category_id">
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            onChange={handleChange}
            type="text"
            name="spent_on"
            placeholder="Spent on"
          />

          <input
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="Amount"
          />
          <button>+ Add Expense</button>
        </form>
      </section>
      <section className="display-chart">
        <PieChart data={expenseChart} />
      </section>
      <section className="expenses">
        <h1>Expenses</h1>
        {expenses.map(expense => (
          <div key={expense.id} className="expenses-list">
            <span>{expense.spent_on}</span>
            <span>${expense.amount}</span>
            <button onClick={() => handleClick(expense.id)}>Delete</button>
          </div>
        ))}
      </section>
    </div>
  )
}
