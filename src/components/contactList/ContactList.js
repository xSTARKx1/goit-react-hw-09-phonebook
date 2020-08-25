import React, { useCallback } from 'react';
import Proptypes, { shape } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact';
import {
  phonebookOperations,
  phonebookActions,
  phonebookSelectors,
} from '../../redux/phonebook';
import styles from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getVisibleContacts);
  const onDeleteContact = useCallback(
    id => {
      dispatch(phonebookOperations.deleteContact(id));
    },
    [dispatch],
  );
  const onChangeFilter = useCallback(() => {
    dispatch(phonebookActions.changeFilter(''));
  }, [dispatch]);

  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={styles.contact}>
            <Contact
              name={name}
              number={number}
              id={id}
              onDeleteContact={() => {
                onDeleteContact(id);

                if (contacts.length === 1) {
                  onChangeFilter();
                }
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: Proptypes.arrayOf(
    shape({
      id: Proptypes.string.isRequired,
    }),
  ),
};
