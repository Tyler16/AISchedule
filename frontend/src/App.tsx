import HomePage from './HomePage';
import SchedulerPage from './SchedulerPage';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated, user} = useAuth0();
  console.log(user)
  if (isAuthenticated) {
    return <SchedulerPage />;
  } else {
    return <HomePage/>;
  }
}

export default App
