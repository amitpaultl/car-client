import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useSeller from '../UseHook/UseSeller';

const SellerRoute = ({ children }) => {
    // usecontext
    const { user, loading } = useContext(AuthContext)
   // is seller 
   const [isSeller,isSellerLoading] = useSeller(user?.email)
    // location
    const location = useLocation()
    // loding
    if (loading || isSellerLoading) {
        return (
            <div className="text-center mt-5 ">

                <div className="spinner-grow text-center mt-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (user && isSeller) {
        return children
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );
};

export default SellerRoute;