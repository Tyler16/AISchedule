import { useAuth0 } from '@auth0/auth0-react';

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    return (
      <button className='w-32 h-10 mt-4 bg-cyan-300 text-white rounded-lg m-1 ml-3 transition duration-300 hover:bg-cyan-400' onClick={() => loginWithRedirect()}>
        Get Started
      </button>
    )
  }
  