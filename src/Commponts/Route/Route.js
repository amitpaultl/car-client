import { createBrowserRouter } from "react-router-dom";
import AllBuyer from "../DashBord/Admin/AllBuyer/AllBuyer";
import AllSeller from "../DashBord/Admin/Allseller/AllSeller";
import MainDasbord from "../DashBord/MainDasbord/MainDasbord";
import PayMent from "../DashBord/Payment/PayMent";
import SellerDashBord from "../DashBord/SellerDashBord/SellerDashBord";
import SellerProduct from "../DashBord/SellerProduct/SellerProduct";
import User from "../DashBord/User/User";
import Main from "../Main/Main";
import Blog from "../Page/Bolg/Blog";
import Carlist from "../Page/CarList/Carlist";
import Category from "../Page/Category/Category";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import SingleProduct from "../Page/SingleProduct/SingleProduct";
import Singup from "../Page/Singup/Singup";
import PravectRoute from "./PravectRoute";

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
                path: '/singleProduct/:id',
                element: <SingleProduct></SingleProduct>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
    },
    {
        path: '/dashboard',
        element: <PravectRoute><MainDasbord></MainDasbord></PravectRoute>,
        children:[
            {
                path:'/dashboard/',
                element:<SellerDashBord></SellerDashBord>
            },
            {
                path:'/dashboard/SellerProduct',
                element:<SellerProduct></SellerProduct>
            },
            {
                path:'/dashboard/allSeller',
                element:<AllSeller></AllSeller>
            },
            {
                path:'/dashboard/allBuyer',
                element:<AllBuyer></AllBuyer>
            },
            {
                path:'/dashboard/user',
                element:<User></User>
            },
            {
                path:'/dashboard/payment/:id',
                element:<PayMent></PayMent>
            },
        ]
        
    },
])