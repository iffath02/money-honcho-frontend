import { useEffect, useState } from "react"
import {
  createIncome,
  incomesChartData,
  allIncomes,
  deleteIncome,
} from "../utils/incomes_api"
import PieChart from "./PieChart"
import "./Income.css"
import { TiDelete } from "react-icons/ti"
import { allCategoriesIncome } from "../utils/categories_api"

export default function Income({ user_id }) {
  const [formData, setFormData] = useState([])
  const [data, setData] = useState([])
  const [accounts, setAccounts] = useState([])
  const [incomeChart, setIncomeChart] = useState([])
  const [incomes, setIncomes] = useState([])

  useEffect(() => {
    allCategoriesIncome().then(setAccounts)
  }, [])

  useEffect(() => {
    incomesChartData(user_id).then(setIncomeChart)
  }, [data, incomes])

  useEffect(() => {
    allIncomes(user_id).then(setIncomes)
  }, [data, incomes])

  const handleSubmit = e => {
    e.preventDefault()
    createIncome(user_id, formData).then(res => setData(res))
  }

  console.log(data)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleClick = id => {
    deleteIncome(id).then(() =>
      setIncomes(incomes.filter(income => income.id !== id))
    )
  }

  return (
    <div>
      <div className="income-wrapper">
        <section className="add-income">
          <h1>Add a New Income</h1>
          <form onSubmit={handleSubmit}>
            <select onChange={handleChange} name="account_id">
              {accounts.map(account => (
                <option key={account.id} value={account.id}>
                  {account.type}
                </option>
              ))}
            </select>

            <input
              onChange={handleChange}
              type="number"
              name="amount"
              placeholder="Amount"
            />
            <button>+ Add Income</button>
          </form>
        </section>
        <section className="display-chart">
          <PieChart data={incomeChart} />
        </section>
      </div>
      <section className="incomes">
        <h1>Delete Incomes</h1>
        {incomes.map(income => (
          <div key={income.id} className="incomes-list">
            <span>{income.type}</span>
            <span style={{ color: "green" }}>${income.amount}</span>
            <TiDelete
              style={{ fontSize: "2.5em", marginLeft: "10px" }}
              onClick={() => handleClick(income.id)}
            >
              Delete
            </TiDelete>
          </div>
        ))}
      </section>
    </div>
  )
}
