import axios from "axios"

export function allCategories() {
  return axios.get(`/api/category`, {}).then(res => res.data)
}
