import React from 'react';
import { NavLink } from 'react-router-dom';
import navStyle from './Nav.module.css';

const Nav = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <>
      <nav className={navStyle.nav}>
        <ul>
          <div className={navStyle.unorderedList}>
            <li>
              <NavLink
                to="/"
                className={navStyle.navLink}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="details"
                className={navStyle.navLink}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Details
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
