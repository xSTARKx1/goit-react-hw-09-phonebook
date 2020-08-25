import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './styles.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const changeEmail = e => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const changePassword = e => setPassword(e.target.value);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(authOperations.logIn({ email, password }));

      setEmail('');
      setPassword('');
    },
    [dispatch, email, password],
  );

  return (
    <>
      <h2>Сторінка логіну</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeEmail}
          />
        </label>
        <label className={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={changePassword}
          />
        </label>
        <button type="submit" className={styles.button}>
          Увійти
        </button>
      </form>
    </>
  );
}
