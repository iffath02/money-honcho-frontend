import axios from "axios"

export function allCategories() {
  return axios.get(`/api/category/expense`, {}).then(res => res.data)
}

export function allCategoriesIncome() {
  return axios.get(`/api/category/income`, {}).then(res => res.data)
}
