import { useEffect, useState } from "react"
import "./Expense.css"

export default function Expense({ user_id }) {
  return (
    <div className="expense-wrapper">
      <section className="add-expense">
        <form>
          <select>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <input
            // onChange={handleChange}
            type="text"
            name="spent_on"
            placeholder="Spent on"
          />

          <input
            // onChange={handleChange}
            type="number"
            name="amount"
            placeholder="Amount"
          />
          <button>+ Add Expense</button>
        </form>
      </section>
      <section className="display-chart">This is chart</section>
    </div>
  )
}
