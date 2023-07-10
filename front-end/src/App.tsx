import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();
  
  if (isAuthenticated) return (
    <>
      <LogoutButton />
    </>
  )
  return (
    <>
      <LoginButton />
    </>
  )
}

export default App
