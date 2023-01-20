import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../UseHook/useAdmin';
import useUser from '../UseHook/useUser';

const UserRoute = ({ children }) => {
    // usecontext
    const { user, loading } = useContext(AuthContext)
    // admin route
    const [isUser,isUserLoading] = useUser(user?.email)

    // location
    const location = useLocation()
    // loding
    if (loading || isUserLoading) {
        return (
            <div className="text-center mt-5 ">

                <div className="spinner-grow text-center mt-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (user && isUser) {
        return children
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default UserRoute;