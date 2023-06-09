import { getToken } from "./users_service"
import axios from "axios"

export function allExpenses(user_id) {
  return axios
    .get(`/api/expenses/${user_id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then(res => res.data)
}

export function createExpense(user_id, expenseData) {
  return axios
    .post(`/api/expenses/${user_id}`, expenseData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then(res => res.data)
}

export function expensesChartData(user_id) {
  return axios
    .get(`/api/expenses/chart/${user_id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then(res => res.data)
}

export function deleteExpense(id) {
  return axios.delete(`/api/expenses/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    method: "delete",
  })
}
