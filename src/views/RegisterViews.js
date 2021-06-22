import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations'

const styles = {
  form: {
    width: 320, 
      marginLeft: 'auto',
    marginRight: 'auto',
 

  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {

  const [name, setName] = useState('');
  const handleChangeName = useCallback( e => {
    setName(e.target.value);

  }, []);

  const [email, setEmail] = useState('');
  const handleChangeEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);

   const [password, setPassword] = useState('');
  const handleChangePassword = useCallback(e => {
    setPassword(e.target.value);

  }, []);

  const dispatch = useDispatch();

     const  handleSubmit = useCallback( e => {
    e.preventDefault();

      dispatch(authOperations.register({name, email, password}));
    setName('');
     setEmail('');
     setPassword('');
   
  }, [dispatch, email, name, password]);



  return (
      <div>
        <h1>Sing in</h1>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChangeName}
            />
          </label>

          <label style={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    );
}

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div>
//         <h1>Sing in</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//           autoComplete="off"
//         >
//           <label style={styles.label}>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             E-mail
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             Password
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button type="submit">Register</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
// onRegister: authOperations.register,
// }

// export default connect(null, mapDispatchToProps)(RegisterView);