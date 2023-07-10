/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardF = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const { _id, name, price, category, description, image, tags } = product;

  
    return (
        <div>

            <div
                className="w-[300px] h-[400px]"
                style={{ position: 'relative' }}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
            >
                {/* Top part of the box */}
                <div style={{ position: 'relative' }}>
                    <img
                        className="w-full h-[380px]"
                        src={image}
                        alt=""
                    />
                    <img
                        className="w-full h-[380px]"
                        src={image}// Replace with the image URL for hover state
                        alt=""
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: isHovered ? 1 : 0,
                            transition: 'opacity 0.5s ease',
                        }}
                    />

                </div>

                {/* Bottom quick view */}
                {isHovered && (
                    <div
                        className="w-full top-2/4 bg-green-700 text-white p-2 text-center mt-20 "
                        style={{
                            position: 'absolute',
                            // bottom: 0,
                            left: 0,
                            display: 'block',
                            transition: 'opacity 3s ease',
                           

                        }}
                    >
                        {/* Content of the quick view */}
                        {/* <button onClick={() => detailsGO(product)}>Quick View</button> */}
                        <button><Link to={`/details/${_id}`}>Quick View</Link> </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardF;