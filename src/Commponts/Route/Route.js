import { createBrowserRouter } from "react-router-dom";
import MainDasbord from "../DashBord/MainDasbord/MainDasbord";
import SellerDashBord from "../DashBord/SellerDashBord/SellerDashBord";
import SellerProduct from "../DashBord/SellerProduct/SellerProduct";
import Main from "../Main/Main";
import Carlist from "../Page/CarList/Carlist";
import Category from "../Page/Category/Category";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
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
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/addProduct/${params.id}`)
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
        ]
        
    },
])