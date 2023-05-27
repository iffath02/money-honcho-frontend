import logo from "../money-honcho.png"
import { Link } from "react-router-dom"
import "./usersignin.css"
export default function UserSignIn() {
  return (
    <section className="user-login">
      <img src={logo} alt="Money Honcho" />
      <div className="links">
        <button>
          <Link to="/login">Login</Link>
        </button>
        <span>|</span>
        <button>
          <Link to="/signup">SignUp</Link>
        </button>
      </div>
    </section>
  )
}
