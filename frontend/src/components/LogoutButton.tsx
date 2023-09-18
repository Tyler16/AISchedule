import { useAuth0 } from '@auth0/auth0-react';

export default function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button className='w-24 h-10 justify-self-end
                    bg-cyan-300 text-white rounded-lg m-1 
                    transition duration-300 hover:bg-cyan-400' onClick={() => logout()}>
      Logout
    </button>
  )
}