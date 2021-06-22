import { combineReducers } from 'redux';
import {createReducer} from '@reduxjs/toolkit'
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fatchContactRequest,
    fatchContactSuccess,
    fatchContactError,
    chengeFilter
 

} from './actions'


// const addContacts = (state, action) => {
//     const normalizedData = action.payload.name.toLowerCase();
    
//         const iterateName = state.find(contact =>
//             contact.name.toLowerCase().includes(normalizedData),
//         );
//         if (iterateName === undefined) {
//             return [...state, action.payload];
//         } else {
//             alert(`${iterateName.name} is already in contacts`);
//             return state;
//         }
// };
      
const items = createReducer([], {
    [fatchContactSuccess]: (_, {payload}) => payload,
    [addContactSuccess]:(state, {payload}) => [...state, payload ],
    [deleteContactSuccess]:(state, action) => state.filter(({id}) => id !== action.payload)
})
const filter = createReducer('', {
    [chengeFilter]: (_, action) => action.payload,
})
const loading = createReducer(false, {
    [fatchContactRequest]:() => true,
    [fatchContactSuccess]: () => false,
    [fatchContactError]:() => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,


})
export default combineReducers({
    items,
    filter,
    loading,
})

