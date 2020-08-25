import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
import styles from './ContactForm.module.css';

export default function ContactEditor() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const changeName = e => setName(e.target.value);
  const [number, setNumber] = useState('');
  const changeNumber = e => setNumber(e.target.value);

  const contacts = useSelector(phonebookSelectors.getContacts);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const isUniqueName = contacts.some(contact => contact.name === name);

      if (isUniqueName) {
        alert(`${name} is alredy in contacts`);

        return;
      }

      if (!name || !number) {
        alert('Введіть повні дані, будь ласка)');

        return;
      }
      dispatch(phonebookOperations.addContact({ name, number }));

      setName('');
      setNumber('');
    },
    [contacts, dispatch, name, number],
  );

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h3 className={styles.title_form}>Ім'я</h3>
        <input
          className={styles.input}
          value={name}
          name="name"
          onChange={changeName}
        />
        <h3 className={styles.title_form}>Номер</h3>
        <input
          className={styles.input}
          value={number}
          name="number"
          onChange={changeNumber}
        />
        <br />
        <button className={styles.add_contact_btn} type="submit">
          Додати контакт
        </button>
      </form>
    </div>
  );
}
