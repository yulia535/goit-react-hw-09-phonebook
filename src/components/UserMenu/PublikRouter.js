import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';
import authSelectors from '..//../redux/auth/auth-selectors'


const PublikRouter = ({
    children,
    isAuthenticated,
    redirectTo,
    ...routeProps
}) => {
     const isLoggedIn = useSelector(authSelectors.getIsAuthenticated)
    return (
        <Route {...routeProps}>
            {isLoggedIn && routeProps.restricted ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
}
    

export default PublikRouter;