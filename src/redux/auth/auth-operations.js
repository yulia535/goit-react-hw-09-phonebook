import axios from 'axios'
import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError

} from './auth-action'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.common.Authorization = '';
    }
};

const register = credentials => async dispatch => {
    dispatch(registerRequest());

    try {
        const response = await axios.post('/users/signup', credentials)
        token.set(response.data.token)
        dispatch(registerSuccess(response.data))
    }catch(error){dispatch(registerError(error.message ))}
};

const login = credentials => async dispatch => {
    dispatch(loginRequest())

    try {
        const response = await axios.post('/users/login', credentials)
        token.set(response.data.token)
        dispatch(loginSuccess(response.data))
    }catch(error){dispatch(loginError(error.message ))}
    
}

const logOut = () => async dispatch => {
    dispatch(logoutRequest())
    
    try {
        await axios.post('/users/logout');
        token.unset();
        dispatch(logoutSuccess());
    }catch(error){dispatch(logoutError(error.message ))}
}

const getCurrentUser = () => async (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
        
    } = getState();
    //state.auth.token
    if (!persistedToken) {
        return;
    }
    token.set(persistedToken);
    dispatch(getCurrentUserRequest())
    try {
        const response = await axios.get('/users/current');
        dispatch(getCurrentUserSuccess((response.data)))

    }catch(error){dispatch(getCurrentUserError(error.message ))}

 }
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    login,
    logOut,
    getCurrentUser
}