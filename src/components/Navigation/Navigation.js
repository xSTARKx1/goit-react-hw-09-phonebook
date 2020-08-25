import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <>
      <ul className={styles.NavList}>
        <li>
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
          >
            Головна
          </NavLink>
        </li>

        {isAuthenticated && (
          <li>
            <NavLink
              to="/contacts"
              className={styles.NavLink}
              activeClassName={styles.NavLink__active}
            >
              Контакти
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
}
