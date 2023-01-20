import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Header from '../../Share/Header'
import useAdmin from '../../UseHook/useAdmin';
import useSeller from '../../UseHook/UseSeller';
import useUser from '../../UseHook/useUser';
import './DasbordMenu.css'
const MainDasbord = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user.email)
    const [isSeller] = useSeller(user.email)
    const [isUser] = useUser(user.email)
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="menu-dasbord">
                            {
                                isSeller && <>
                                    <Link to={'/dashboard/SellerAddProduct'}>ADD Product</Link>
                                    <Link to={'/dashboard/SellerProduct'}>Show Product</Link>
                                </>
                            }




                            {
                                isAdmin && <>

                                    <Link to={'/dashboard/allUser'}>All User</Link>
                                    <Link to={'/dashboard/allSeller'}>All Seller</Link>
                                    <Link to={'/dashboard/allBuyer'}>All Buyer</Link>
                                    <Link to={'/dashboard/report'}>Report Product</Link>
                                </>

                            }

                            {
                                isUser &&
                                <Link to={'/dashboard/user'}>Booking</Link>
                            }


                        </div>
                    </div>
                    <div className="col-md-10">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainDasbord;