import { useSelector } from 'react-redux';
import Container from 'components/Container';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from 'redux/auth';
import s from './AppBar.module.scss';

function AppBar() {
  const isRefreshed = useSelector(authSelectors.getIsRefreshed);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Container>
        <div className={s.content}>
          <h1>Contacts</h1>

          {isRefreshed && (isLoggedIn ? <UserMenu /> : <AuthNav />)}
        </div>
      </Container>
    </header>
  );
}

export default AppBar;
