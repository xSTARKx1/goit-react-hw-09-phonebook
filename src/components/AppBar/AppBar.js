import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <>
      <header className={styles.header}>
        <Navigation />

        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
}
