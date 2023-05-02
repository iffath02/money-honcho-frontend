import axios from "axios"
import { getToken } from "./users_service"

export function userValidator(data) {
  return axios.post("/api/users/login", data).then(res => res.data)
}

export function userDetails(user_id) {
  return axios.get(`/api/users/${user_id}`).then(res => res.data)
}
