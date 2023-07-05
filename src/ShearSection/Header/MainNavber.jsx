import { Link } from "react-router-dom";

import cartIcon from '../../Image/Icon/cart.png'

const MainNavber = () => {
    return (
        <div className="mainWidth">
            <div className="navbar bg-[#F5F5F5]">
                <div className="navbar-start">
                    <p className="btn btn-ghost normal-case text-4xl italic font-thin">MY _0_ SHOP</p>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-mono">
                        <li><Link to=''>Home</Link></li>
                        <li><Link to='shop'>Shop</Link></li>
                        <li><Link to='bLog'>BLog</Link></li>
                        <li><Link to='help'>Help</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 text-lg font-mono border-r-2">
                        <li><Link to='login'> Login</Link></li>
                        <li><Link to='register'>Register</Link></li>
                    </ul>
                    <span className="flex gap-2 items-center pl-2">
                        <p>
                            Cart/$560
                        </p>
                        <img className="w-[20px]" src={cartIcon} alt="" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MainNavber;