import { getToken } from "./users_service"
import axios from "axios"

export function allIncomes(user_id) {
  return axios
    .get(`/api/incomes/${user_id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then(res => res.data)
}

export function createIncome(user_id, incomeData) {
  return axios
    .post(`/api/incomes/${user_id}`, incomeData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then(res => res.data)
}

export function incomesChartData(user_id) {
  return axios
    .get(`/api/incomes/chart/${user_id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then(res => res.data)
}

export function deleteIncome(id) {
  return axios.delete(`/api/incomes/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    method: "delete",
  })
}
