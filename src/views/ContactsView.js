import React, { useEffect } from 'react';
import ContactForm from '../components/contactForm';
import ContactList from '../components/contactList';
import Filter from '../components/Filter';
import { phonebookOperations, phonebookSelectors } from '../redux/phonebook';
import styles from '../App.module.css';
import { useSelector, useDispatch } from 'react-redux';

export default function ContactsView() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContacts);

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h1>Телефонна книга</h1>
      <ContactForm />
      {contacts.length > 0 && <h2>Контакти</h2>}
      {contacts.length >= 2 && <Filter />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
