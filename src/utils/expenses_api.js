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
