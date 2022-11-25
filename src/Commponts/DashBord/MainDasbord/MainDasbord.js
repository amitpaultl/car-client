import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Share/Header'
import './DasbordMenu.css'
const MainDasbord = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="menu-dasbord">
                            <Link to={'/dashboard'}>ADD Product</Link>
                            <Link to={'/dashboard/SellerProduct'}>Show Product</Link>
                            <Link to={'/dashboard/allSeller'}>All Seller</Link>
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