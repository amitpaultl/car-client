import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../UseHook/useAdmin';

const AdminRoute = ({ children }) => {
    // usecontext
    const { user, loading } = useContext(AuthContext)
    // admin route
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    // location
    const location = useLocation()
    // loding
    if (loading || isAdminLoading) {
        return (
            <div className="text-center mt-5 ">

                <div className="spinner-grow text-center mt-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (user && isAdmin) {
        return children
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default AdminRoute;