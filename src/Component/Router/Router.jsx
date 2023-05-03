import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";

import Register from "../../LoginLayout/Login/Register/Register";
import Login from "../../LoginLayout/Login/Login/Login";
import PrivateRoute from "./PrivateRoute";
import RecepeDetails from "../Pages/RecepeDetails/RecepeDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },

            {
                path:'/recepeDetails/:id',
                element:<PrivateRoute><RecepeDetails></RecepeDetails></PrivateRoute>,
               loader:({params})=>fetch(`https://chef-recepe-hunter-server1.vercel.app/chef/${params.id}`)
            },

            {
            path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            
        ]
        
    }
])

export default router