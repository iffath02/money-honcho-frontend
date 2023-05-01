import axios from "axios"

export default function userValidator(data) {
  return axios.post("/api/users/login", data).then(res => res.data)
}
