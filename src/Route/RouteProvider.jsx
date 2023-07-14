import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../MainLayout/HomePageLayout";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Shop from "../Pages/Shop/Shop";
import BLog from "../Pages/Blog/BLog";
import Help from "../Pages/Help/Help";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import SingleDetailsPage from "../ShearSection/SInglePageDetails/SingleDetailsPage";
import AdminMainLayout from "../MainLayout/AdminMainLayout";
import AdminDashboard from "../Pages/AdminPage/AdminDashboard/AdminDashboard";
import ProductAdd from "../Pages/AdminPage/AddProduct/ProductAdd";
import MyProduct from "../Pages/AdminPage/MyProduct/MyProduct";
// import UpdateProduct from "../Pages/AdminPage/UpdateProduct/UpdateProduct";
import AddPost from "../Pages/AdminPage/AddPost/AddPost";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllManageUser from "../Pages/AdminPage/AllManageUser/AllManageUser";
import ManageAllProduct from "../Pages/AdminPage/ManageAllProduct/ManageAllProduct";

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
                    element:<PrivateRoute><Shop></Shop></PrivateRoute>
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
                {
                    path:'/details/:id',
                    element:<PrivateRoute><SingleDetailsPage></SingleDetailsPage></PrivateRoute>,
                    loader:({params})=>(`${import.meta.env.VITE_lOCAL_Server}/products/${params.id}`)
                },
            ]
           },
        //    admin route 
           {
               path:'/admin',
               element:<PrivateRoute><AdminMainLayout></AdminMainLayout></PrivateRoute>,
               children:[
                {
                    path:'dashboard',
                    element: <PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>
                },
                {
                    path:'product-add',
                    element:<PrivateRoute><ProductAdd></ProductAdd></PrivateRoute>
                },
                {
                    path:'my-product',
                    element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
                },
                // { 
                //     path:'/admin/my-product/updates/:id',
                //     element:<UpdateProduct></UpdateProduct>,
                //     loader:({params})=>
                //      fetch(`${import.meta.env.VITE_lOCAL_Server}/product/${params.id}`)

                // },
                {
                    path:'user-dashboard',
                    element: <PrivateRoute><AddPost></AddPost></PrivateRoute>
                },
                {
                    path:'manage-user',
                    element: <PrivateRoute><AllManageUser></AllManageUser></PrivateRoute>
                },
                {
                    path:'manage-all-product',
                    element: <PrivateRoute><ManageAllProduct></ManageAllProduct></PrivateRoute>
                },
               ]
           }
])

export default router;