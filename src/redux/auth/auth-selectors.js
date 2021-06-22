/* eslint-disable import/no-anonymous-default-export */
const getIsAuthenticated = state => state.auth.isLogin;

const getCurrentEmail = state => state.auth.user.email


export default {
    getIsAuthenticated,
    getCurrentEmail
}