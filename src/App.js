import "./App.css"
import Layout from "./pages/Layout"
import { Routes, Route, useNavigate } from "react-router-dom"
import Dashboard from "./components/DashBoard"
import Expense from "./components/Expense"
import Income from "./components/Income"
import Accounts from "./components/Accounts"
import Profile from "./components/Profile"
import LoginPage from "./pages/LoginPage"
import { useState } from "react"
import UserSignIn from "./pages/usersignin"
import SignUp from "./pages/signupPage"

import { getUser } from "./utils/users_service"

function App() {
  const [user, setUser] = useState(getUser())
  const navigate = useNavigate()
  const login = data => {
    setUser(data)
    navigate("/")
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
    navigate("/")
  }

  console.log(user)

  return (
    <div className="App">
      {user ? (
        <Layout user={user} onLogout={logout}>
          <Routes>
            <Route path="/" element={<Dashboard user_id={user.id} />} />
            <Route path="/expense" element={<Expense user_id={user.id} />} />
            <Route path="/income" element={<Income user_id={user.id} />} />
            <Route path="/profile" element={<Profile user_id={user.id} />} />
            <Route path="/accounts" element={<Accounts user_id={user.id} />} />
          </Routes>
        </Layout>
      ) : (
        // <LoginPage onLogin={login} />
        <Routes>
          <Route path="/" element={<UserSignIn />} />
          <Route path="/login" element={<LoginPage onLogin={login} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      )}
    </div>
  )
}

export default App
