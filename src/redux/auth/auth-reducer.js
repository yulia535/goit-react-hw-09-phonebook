import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    registerSuccess,
    registerError,
    loginSuccess,
    loginError,
    logoutSuccess,
    logoutError,
     getCurrentUserSuccess,
    getCurrentUserError
} from './auth-action'

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => initialUserState,
    [getCurrentUserSuccess]: (_, { payload }) => payload,
    
});

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload.token,
    [loginSuccess]: (_, { payload }) => payload.token,
    [logoutSuccess]: () => null,
});

const error = createReducer(null, {
    [registerError]: (_, { payload }) => payload,
    [loginError]: (_, { payload }) => payload,
    [logoutError]: (_, { payload }) => payload,
    [getCurrentUserError]:(_, { payload }) => payload,
});

const isLogin = createReducer(false, {
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    [getCurrentUserSuccess]: () => true,
    [registerError]: () => false,
    [loginError]: () => false,
    [logoutError]: () => false,
    [getCurrentUserError]: () => false,
    [logoutSuccess]:() => false,
    
     
})

export default combineReducers({
    user, isLogin, token, error,
})