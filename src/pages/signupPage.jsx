import { useState } from "react"
import logo from "../money-honcho.png"
import { createUser } from "../utils/users_api"
import { useNavigate } from "react-router-dom"
import "./signupPage.css"

export default function SignUp() {
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    createUser(formData)
      .then(res => {
        console.log(res)
        navigate("/login")
      })
      .catch(err => console.log(err))
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <section className="signup">
      <img src={logo} alt="" />
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">Name</label>
        <input onChange={handleChange} type="text" name="name" />
        <label htmlFor="">Email</label>
        <input onChange={handleChange} type="text" name="email" />
        <label htmlFor="">Passsword</label>
        <input onChange={handleChange} type="password" name="password" />
        <button>Login</button>
      </form>
    </section>
  )
}
