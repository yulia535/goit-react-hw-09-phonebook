import React, { useState, useCallback } from 'react';
import {  useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

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

export default function LoginView() {

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

 dispatch(authOperations.login({email, password}));  
     setEmail('');
     setPassword('');
   
  }, [dispatch, email, password]);
  
      return (
      <div>
        <h1>Login</h1>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
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

          <button type="submit">Login</button>
        </form>
      </div>
    );
}


// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//  this.props.onLogin(this.state);  

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div>
//         <h1>Login</h1>

//         <form
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//           autoComplete="off"
//         >
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

//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
// onLogin: authOperations.login
// }
// export default connect(null, mapDispatchToProps )(LoginView)