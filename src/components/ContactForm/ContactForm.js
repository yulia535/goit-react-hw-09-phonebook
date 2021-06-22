import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux'
import operations from '..//../redux/phonebook/operations'
import styles from '../ContactForm/contactForm.module.css';


export default function ContactForm() {

  const [name, setName ] = useState('');
  const handleChengeName = useCallback( e => {
    setName(e.target.value);
    
  }, []);

  const  [number, setNumber]  = useState('');
  const handleChengeNumber = useCallback( e => {
    setNumber(e.currentTarget.value);   
  },[]);

  const dispatch = useDispatch();

  const handleInputChange = useCallback(e => {
    e.preventDefault();
    dispatch(operations.addContact({ name, number }));
    setName('');
    setNumber('');

  },[dispatch, name, number]);


  return (
          <div>
        <form className={styles.ContactForm} onSubmit={handleInputChange}>
          <label>
            Name
            <input
              className={styles.inputForm}
              type="text"
              name="name"
              value={name}
              onChange={handleChengeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
          </label>
          <label>
            Number
            <input
              className={styles.inputForm}
              type="text"
              name="number"
              value={number}
              onChange={handleChengeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
  )
}

