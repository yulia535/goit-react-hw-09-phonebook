
import { useDispatch, useSelector } from "react-redux";
import authSelectors from '..//../redux/auth/auth-selectors';
import authOperations from '..//../redux/auth/auth-operations'
import { useCallback } from "react";


const styles = {
  container: {
    display: "flex",
    alignItems: 'center',
  
  },
  email: {
  
    fontWeight: 700,
    marginRight: 10,

  },
};

export default function UserMenu() {

  const email = useSelector(authSelectors.getCurrentEmail);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [dispatch]);

  return(
  <div style={styles.container}>
    <span style={styles.email}>{email}</span>
    <button type='button' onClick={onLogout}>Logout</button>
  </div>
  );
};
