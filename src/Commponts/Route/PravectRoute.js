import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PravectRoute = ({ children }) => {
    // usecontext
    const { user, loading } = useContext(AuthContext)
    // location
    const location = useLocation()
    // loding
    if (loading) {
        return (
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
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