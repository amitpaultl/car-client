import { createBrowserRouter } from "react-router-dom";
import AllBuyer from "../DashBord/Admin/AllBuyer/AllBuyer";
import AllSeller from "../DashBord/Admin/Allseller/AllSeller";
import ReportProduct from "../DashBord/Admin/ReportProduct/ReportProduct";
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
import AdminRoute from "./Admin";
import PravectRoute from "./PravectRoute";
import SellerRoute from "./SellerRoute";
import UserRoute from "./UserRout";

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
                path: '/car',
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
                path:'/dashboard/SellerAddProduct',
                element:<SellerRoute><SellerDashBord></SellerDashBord></SellerRoute> 
            },
            {
                path:'/dashboard/SellerProduct',
                element:<SellerRoute><SellerProduct></SellerProduct></SellerRoute> 
            },
            {
                path:'/dashboard/allSeller',
                element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path:'/dashboard/allBuyer',
                element:<AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path:'/dashboard/report',
                element: <AdminRoute><ReportProduct></ReportProduct></AdminRoute>
            },
            {
                path:'/dashboard/user',
                element:<UserRoute><User></User></UserRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<UserRoute><PayMent></PayMent></UserRoute>
            },
        ]
        
    },
])