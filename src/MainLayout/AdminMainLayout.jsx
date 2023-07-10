
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AdminVerify } from '../API/AdminVerify';

const AdminMainLayout = () => {
    const [isAdmin ]= AdminVerify()


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  p-10">
                    {/* Page content here */}

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 pt-20 h-full bg-[#1AD1A5]  text-white text-xl">
                        {/* Sidebar content here */}
                        {/* >>>>> */}
                        {
                            isAdmin ?
                                <>
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