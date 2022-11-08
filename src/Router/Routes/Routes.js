import Blog from "../../Pages/Blog/Blog";
import AllService from "../../Pages/Home/AllService/AllService";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/services',
                element:<AllService></AllService>
               
            },
            {
                path:'/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },

        ]
    }
])
export default router;