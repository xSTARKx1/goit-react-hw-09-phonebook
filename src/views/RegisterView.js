import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './styles.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const changeName = e => setName(e.target.value);

  const [email, setEmail] = useState('');
  const changeEmail = e => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const changePassword = e => setPassword(e.target.value);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(authOperations.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, name, email, password],
  );

  return (
    <>
      <h2>Сторінка реєстрації</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Ім'я
          <input type="text" name="name" value={name} onChange={changeName} />
        </label>

        <label className={styles.label}>
          Email
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
          Зареєструватися
        </button>
      </form>
    </>
  );
}
