
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AdminVerify } from '../API/AdminVerify';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import DashboardNavber from '../Pages/AdminPage/AdminDashboard/DashboardNavber';

const AdminMainLayout = () => {
    const [isAdmin] = AdminVerify()
    const { user } = useContext(AuthContext)

    console.log(user);
    return (
        <div >
                  
            <div className="drawer lg:drawer-open ">
           
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                     <DashboardNavber></DashboardNavber>
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

                <div className="drawer-side fixed ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 pt-10 h-full bg-[#1AD1A5]  text-white text-xl">
                        {/* Sidebar content here */}

                        <div className='flex items-center gap-3 py-5 mx-auto  text-center'>
                            <div>
                                <img className='w-[70px] h-[70]  bg-yellow-600 rounded-full' src={user?.photoURL} alt="" />
                            </div>
                            <div className='flex items-center gap-1 '><h2>{user?.displayName}</h2>
                                <h1 className='text-sm'>({isAdmin ? <>Admin</> : <></>})</h1></div>
                        </div>


                        {/* >>>>> */}

                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to="/" activeclassname="bg-black text-white">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="dashboard" activeclassname="bg-black text-white">
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="product-add" activeclassname="bg-black text-white" >
                                            Product Add
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="manage-user" activeclassname="bg-black text-white" >
                                            Manage User
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="manage-all-product" activeclassname="bg-black text-white" >
                                            Manage All Products
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to="my-product" activeclassname="bg-black text-white">
                                            My Product
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="user-dashboard" activeclassname="bg-black text-white" >
                                            User DashBoard
                                        </NavLink>
                                    </li>
                                </>
                        }

                        {/* <li>
                            <NavLink to="update" activeclassname="bg-black text-white" >
                                Update Product
                            </NavLink>
                        </li> */}





                        {/* others  */}
                        <div className='mt-48'>
                            <h2>AUTH PAGES</h2>
                            <li><Link to='/'>Back To Home</Link></li>
                            <li><Link>Sign Out</Link></li>
                            <li><Link>Support</Link></li>
                        </div>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AdminMainLayout;