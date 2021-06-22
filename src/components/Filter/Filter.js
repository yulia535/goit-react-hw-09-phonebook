import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Filter/filter.module.css';
import {chengeFilter} from '..//../redux/phonebook/actions'
import PropTypes from 'prop-types';
import {getFilter} from '../../redux/phonebook/selectors'

export default function Filter() {

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleChenge = useCallback( (e) => dispatch(chengeFilter(e.currentTarget.value)), [dispatch]);

  return (<label>
    Find contacts by name
    <input
      className={styles.inputFilter}
      type="text"
      value={filter}
      onChange={handleChenge}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      required
    />
  </label>)
};
Filter.propTypes = {
  filter: PropTypes.string,
    handleChenge: PropTypes.func,
};
 

