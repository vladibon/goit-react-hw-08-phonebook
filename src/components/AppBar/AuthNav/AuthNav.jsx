import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.scss';

function AuthNav() {
  const applyClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

  return (
    <div>
      <NavLink to='/register' className={applyClassName}>
        Sign Up
      </NavLink>

      <NavLink to='/login' className={applyClassName}>
        Log In
      </NavLink>
    </div>
  );
}

export default AuthNav;
