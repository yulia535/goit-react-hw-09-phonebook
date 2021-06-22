import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import authSelectors from '..//../redux/auth/auth-selectors'
import { useSelector } from 'react-redux';
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};


export default function AppBar() {

  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated)
  
  return(
  <header style={styles.header}>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
  </header>
)
};