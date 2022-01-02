import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

function Navigation() {
  const applyClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

  return (
    <nav className={s.nav}>
      <NavLink to='/' className={applyClassName}>
        Home
      </NavLink>

      <NavLink to='/contacts' className={applyClassName}>
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
