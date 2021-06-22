import { createAction } from '@reduxjs/toolkit';

export const fatchContactRequest = createAction('phonebook/fatchContactRequest');
export const fatchContactSuccess = createAction('phonebook/fatchContactSuccess');
export const fatchContactError = createAction('phonebook/fatchContactError');

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

export const deleteContactRequest = createAction('phonebook/deleteContactRequest');
export const deleteContactSuccess = createAction('phonebook/deleteContactSuccess');
export const deleteContactError = createAction('phonebook/deleteContactError');

export const chengeFilter = createAction('phonebook/filter');



