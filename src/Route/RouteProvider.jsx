import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../MainLayout/HomePageLayout";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Shop from "../Pages/Shop/Shop";
import BLog from "../Pages/Blog/BLog";
import Help from "../Pages/Help/Help";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
           {
            path:'/',
            errorElement:<Error></Error>,
            element:<HomePageLayout></HomePageLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/shop',
                    element:<Shop></Shop>
                },
                {
                    path:'/blog',
                    element:<BLog></BLog>
                },
                {
                    path:'/help',
                    element:<Help></Help>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
            ]
           }
])

export default router;