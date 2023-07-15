import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button className="p-3 mr-0 rounded-md bg-cyan-300 transition hover:bg-cyan-500 duration-500" onClick={() => logout()}>Logout</button>
  )
}

export default LogoutButton