import { createBrowserRouter } from "react-router-dom";
import SellerDashBord from "../DashBord/SellerDashBord/SellerDashBord";
import Main from "../Main/Main";
import Carlist from "../Page/CarList/Carlist";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Singup from "../Page/Singup/Singup";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/carlist',
                element: <Carlist></Carlist>
            },
            {
                path: '/SellerDashBord',
                element: <SellerDashBord></SellerDashBord>
            },
            {
                path: '/singup',
                element: <Singup></Singup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
        ]
    }
])