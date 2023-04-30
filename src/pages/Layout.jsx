import "./Layout.css"
import logo from "../money-honcho.png"
import { Routes, Route, Link } from "react-router-dom"
import DashboardPage from "./DashBoardPage"

export default function Layout() {
  return (
    <div className="grid-container">
      <div className="sidebar">
        <nav className="navbar">
          <img src={logo} alt="" />
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/expense">Expense</Link>
            </li>
            <li>
              <Link to="/income">Income</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/accounts">Accounts</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header"></div>
      <div className="main">{<DashboardPage />}</div>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </div>
  )
}
