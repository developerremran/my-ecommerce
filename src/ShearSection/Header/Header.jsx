import React from 'react';
import Navber from './Navber';
import MainNavber from './MainNavber';
import MobileNavBer from './MobileNavBer';

const Header = () => {
    return (
        <div>
            <div className='md:block lg:block  hidden'>
                <Navber></Navber>
                <MainNavber></MainNavber>
            </div>
            <div className='md:hidden lg:hidden sm:block block'>
                <MobileNavBer></MobileNavBer>
            </div>
        </div>
    );
};

export default Header;