import { useEffect, useState } from "react"
import { allExpenses } from "../utils/expenses_api"
import { allIncomes } from "../utils/incomes_api"

import "./Dashboard.css"

export default function Dashboard({ user_id }) {
  const [expenses, setExpenses] = useState([])
  const [incomes, setIncomes] = useState([])

  useEffect(() => {
    allExpenses(user_id).then(setExpenses)
  }, [])

  useEffect(() => {
    allIncomes(user_id).then(setIncomes)
  }, [])

  return (
    <div className="dashboard-wrapper">
      <section className="data-card">
        <h1>All Expenses</h1>
        {expenses.map(expense => (
          <div key={expense.id}>
            <span>{expense.spent_on}</span>
            <span>${expense.amount}</span>
          </div>
        ))}
      </section>

      <section className="data-card">
        <h1>All Incomes</h1>
        {incomes.map(income => (
          <div key={income.id}>
            <span>{income.type}</span>
            <span>${income.amount}</span>
          </div>
        ))}
      </section>
    </div>
  )
}
