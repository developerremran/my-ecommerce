import { Link } from "react-router-dom";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Navber = () => {
    return (
        <div className="mainWidth">
            <div className="navbar bg-[#5E8D95] text-white  shadow-md h-[10px]">
                <div className="flex-1">
                    <a className="  normal-case text-xl">Welcome To MY Shop.........</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-sm">
                    <li className="border-r-2"><Link to='#'>About</Link></li>
                        <li  className="border-r-2"><Link to='#'>Our Story</Link></li>
                        <li  className="border-r-2"><Link to='blog'>Blog</Link></li>
                        <li  className="border-r-2"><Link to='#'>Contact</Link></li>
                        <li  className="border-r-2"><Link to='#'>FAQ</Link></li>
                        <li  className="border-r-2"><Link to='#'>Newsletter</Link></li>
                        {/* icon list */}
                        <div className="flex ">
                        <li><Link><FaFacebook></FaFacebook></Link></li>
                        <li><Link><FaInstagram></FaInstagram></Link></li>
                        <li><Link><FaTwitter></FaTwitter></Link></li>
                        <li><Link><FaYoutube></FaYoutube></Link></li>

                        </div>
                    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;