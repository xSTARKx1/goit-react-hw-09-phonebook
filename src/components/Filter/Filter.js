import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { phonebookSelectors, phonebookActions } from '../../redux/phonebook';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(phonebookSelectors.getFilterValue);
  const changeFilter = useCallback(
    e => {
      dispatch(phonebookActions.changeFilter(e.target.value));
    },
    [dispatch],
  );

  return (
    <>
      <label className={styles.filter_title}>
        Знайти контакт за іменем
        <br />
        <input type="text" value={value} onChange={changeFilter} />
      </label>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
