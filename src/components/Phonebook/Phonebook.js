import React, { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import operations from '..//..//redux/operations'
import { useDispatch } from 'react-redux';

export default function Phonebook() {
  const dispatch =  useDispatch();
 
  useEffect(() => { dispatch(operations.fatchContact()) }, [dispatch]);

  return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm  />
        <h2>Contacts</h2>

        <Filter />
        
        <ContactList/>
      </div>
  
    )
  
}

// class Phonebook extends React.Component {
//   componentDidMount() {
//     this.props.onFatchContact()
//   }
  
//   render = () => {
//     return (
//       <div>
//         <h1>Phonebook</h1>

//         <ContactForm  />
//         <h2>Contacts</h2>

//         <Filter />
        
//         <ContactList/>
//       </div>
  
//     )
//   }
// }
// const mapDispatchToProps = dispatch => ({
//   onFatchContact: () => dispatch(operations.fatchContact())
// });

// export default connect(null, mapDispatchToProps)(Phonebook);


