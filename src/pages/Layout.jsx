import "./Layout.css"
import logo from "../money-honcho.png"
import { Link } from "react-router-dom"

export default function Layout(props) {
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
          </ul>
        </nav>
      </div>
      <div className="header">
        <button onClick={e => props.onLogout()}>Logout</button>
      </div>
      <div className="main">{props.children}</div>
    </div>
  )
}
