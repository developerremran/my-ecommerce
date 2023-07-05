import { Animation } from 'react-lottie';

import yourAnimation from './Animation in REgister/145499-temanasn-home-mobile.json';



const Register = () => {
    return (
       <div>
                <Animation
                    animationData={yourAnimation}
                    loop={true}
                    autoplay={true}
                />

        </div >
    );
};

export default Register;