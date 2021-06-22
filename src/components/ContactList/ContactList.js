/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '..//../redux/phonebook/operations';
import styles from '../ContactList/contactList.module.css';
import PropTypes from 'prop-types';
import { gatFilteredList } from '../../redux/phonebook/selectors'

export default function ContactList() {
  const contacts = useSelector(gatFilteredList);

  const dispatch = useDispatch();

   const onDeteteContact = (id) => dispatch(operations.deleteContact(id));

  return(<ul>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.contactListItem} key={id}>
        <span>
          {name}:{number}
        </span>

        <button
          className={styles.deleteButton}
           onClick={(e) => onDeteteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>)
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  })),
  onDeteteContact: PropTypes.func,
};

// const ContactList = ({ contacts, onDeteteContact }) => (
//   <ul>
//     {contacts.map(({ id, name, number }) => (
//       <li className={styles.contactListItem} key={id}>
//         <span>
//           {name}:{number}
//         </span>

//         <button
//           className={styles.deleteButton}
//           onClick={() => onDeteteContact(id)}
//         >
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>
// );
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//     number: PropTypes.string,
//   })),
//   onDeteteContact: PropTypes.func,
// };

// // const gatFilteredList = (allItems, filter) => {
// //   const normalizedFilter = filter.toLowerCase();
// //   return allItems.filter(item =>
// //       item.name.toLowerCase().includes(normalizedFilter),
// //   ); 
// // }

// const mapStateToProps = state => ({
//   contacts: gatFilteredList(state)

// });
// const mapDispatchToProps = dispatch => ({
//   onDeteteContact: (id) => dispatch(operations.deleteContact(id))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
