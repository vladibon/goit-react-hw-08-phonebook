import { useSelector } from 'react-redux';
import Container from 'components/Container';
// import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from 'redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

function AppBar() {
  const isRefreshed = useSelector(authSelectors.getIsRefreshed);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <header style={styles.header}>
        {/* <Navigation /> */}
        {isRefreshed && (isLoggedIn ? <UserMenu /> : <AuthNav />)}
      </header>
    </Container>
  );
}

export default AppBar;
