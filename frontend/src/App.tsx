import LandingPage from './LandingPage';
import SchedulerPage from './SchedulerPage';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated, user} = useAuth0();
  if (user !== undefined && isAuthenticated) {
    return <SchedulerPage />;
  } else {
    return <LandingPage/>;
  }
}

export default App
