import { useEffect, useState } from "react"
import { allExpenses } from "../utils/expenses_api"

export default function Dashboard({ user_id }) {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    allExpenses(user_id).then(setExpenses)
  }, [])

  return (
    <div>
      <p>This is Expense</p>
      {expenses.map(expense => (
        <div key={expense.id}>
          {expense.spent_on}: {expense.amount}
        </div>
      ))}
    </div>
  )
}
