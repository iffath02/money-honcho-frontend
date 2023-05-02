import { useState } from "react"
import { userValidator } from "../utils/users_api"
import logo from "../money-honcho.png"
import "./LoginPage.css"

export default function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (formData.email && formData.password) {
      userValidator(formData)
        .then(token => {
          console.log(token)
          localStorage.setItem("token", token)
          onLogin(formData)
        })
        .catch(err => console.log(err))
    } else {
      setError("invalid email or password")
    }
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")
  }

  return (
    <section className="login">
      <img src={logo} alt="" />
      <p>{error}</p>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">email</label>
        <input onChange={handleChange} type="text" name="email" />
        <label htmlFor="">passsword</label>
        <input onChange={handleChange} type="password" name="password" />
        <button>Login</button>
      </form>
    </section>
  )
}
