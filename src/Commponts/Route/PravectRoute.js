import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';

const PravectRoute = ({ children }) => {
    // usecontext
    const { user, loading } = useContext(AuthProvider)
    // location
    const location = useLocation()
    // loding
    if (loading) {
        return (
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
    }

    if (user) {
        return children
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default PravectRoute;