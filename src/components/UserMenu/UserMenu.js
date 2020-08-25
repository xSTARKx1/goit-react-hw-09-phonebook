import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserName);
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>Вітаємо, {name} :)</p>
      <button type="button" onClick={onLogout} className={styles.button}>
        Вийти
      </button>
    </div>
  );
}
