import { useEffect, useState } from "react"
import { userDetails } from "../utils/users_api"

export default function Profile({ user_id }) {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    userDetails(user_id).then(setUserData)
  }, [])

  console.log(userData)
  return (
    <div>
      <div key={userData.id}>
        <p>Name: {userData.name}</p>
        <p>email: {userData.email}</p>
        <p>password: {userData.password_digest}</p>
      </div>
    </div>
  )
}
