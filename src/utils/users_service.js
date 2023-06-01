function getPayload(token) {
  try {
    return JSON.parse(window.atob(token.split(".")[1]))
  } catch (error) {
    // Handle parsing error, such as returning null or throwing a specific error
    return null
  }
}

export function getToken() {
  const token = localStorage.getItem("token")
  if (token === null) return null

  const payload = getPayload(token)
  if (
    !payload ||
    typeof payload.exp === "undefined" ||
    payload.exp < Date.now() / 1000
  ) {
    // Token is expired or invalid
    localStorage.removeItem("token")
    return null
  }
  return token
}

export function getUser() {
  const token = getToken()
  if (token) {
    let user = getPayload(token)
    console.log(user)
    return user
  } else {
    return null
  }
}
