import { useEffect, useState } from "react"
import { userDetails } from "../utils/users_api"
import "./Profile.css"

export default function Profile({ user_id }) {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    userDetails(user_id).then(setUserData)
  }, [])

  console.log(userData)
  return (
    <div className="card">
      <div className="profile-wrapper">
        <div key={userData.id}>
          <p>Name: {userData.name}</p>
          <p>email: {userData.email}</p>
        </div>
      </div>
    </div>
  )
}
