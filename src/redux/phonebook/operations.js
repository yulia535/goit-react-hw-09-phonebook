import axios from 'axios'; 
import {addContactRequest,
    addContactSuccess,
    addContactError, deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fatchContactRequest,
    fatchContactSuccess,
    fatchContactError
} from './actions';


// axios.defaults.baseURL = 'http://localhost:3000'

const fatchContact = () => dispatch => {
    dispatch(fatchContactRequest());

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fatchContactSuccess(data)))
        .catch(error => dispatch(fatchContactError(error)))
};


const addContact = data => dispatch => {
    dispatch(addContactRequest());
    

    axios
        .post('/contacts', data)
        .then(({ data }) => dispatch(addContactSuccess(data) ))
        .catch(error => dispatch(addContactError(error)))
};

const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)))
  
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    addContact,
    deleteContact,
    fatchContact
}