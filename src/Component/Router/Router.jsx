import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import RecepeDetails from "../RecepeDetails/RecepeDetails";
import Register from "../../LoginLayout/Login/Register/Register";
import Login from "../../LoginLayout/Login/Login/Login";

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
                element:<RecepeDetails></RecepeDetails>,
               loader:({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
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