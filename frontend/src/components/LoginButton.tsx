import { useAuth0 } from '@auth0/auth0-react';

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    return (
      <button className='w-24 h-10 bg-cyan-300 text-white rounded-lg m-1 ml-3 transition duration-300 hover:bg-cyan-400' onClick={() => loginWithRedirect()}>
        Login
      </button>
    )
  }
  