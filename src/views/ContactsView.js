
import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import operations from '../redux/phonebook/operations'
import {  useDispatch } from 'react-redux';

export default function ContactsView() {

  const dispatch = useDispatch();
 
  useEffect(() => { dispatch(operations.fatchContact()) }, [dispatch]);
   

  return (
    <>
        <h2>Phonebook</h2>
         <ContactForm />

        <Filter />
        
         <h2>Contacts</h2>
         
        <ContactList />


      </>
    
  )
}


