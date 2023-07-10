import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <button className="p-3 rounded-md m-3 bg-cyan-300 transition hover:bg-cyan-500 duration-500" onClick={() => loginWithRedirect()}>Login/Sign-Up</button>
  )
}

export default LoginButton