import "./App.css"
// import HomePage from "./pages/HomePage"
import Layout from "./pages/Layout"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./components/DashBoard"
import Expense from "./components/Expense"
import Income from "./components/Income"
import Accounts from "./components/Accounts"
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/income" element={<Income />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/accounts" element={<Accounts />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
