import { useState, useEffect } from "react"
import { incomesChartData } from "../utils/incomes_api"
import "./Accounts.css"

export default function Accounts({ user_id }) {
  const [incomeAccount, setIncomeAccount] = useState([])

  useEffect(() => {
    incomesChartData(user_id).then(setIncomeAccount)
  }, [])

  return (
    <div className="income-account-list">
      {incomeAccount.map(account => (
        <div key={account.id} className="income-account-item">
          <span className="income-account-type">{account.type}</span>
          <span className="income-account-amount">{account.total_amount}</span>
        </div>
      ))}
    </div>
  )
}
