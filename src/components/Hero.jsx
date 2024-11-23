/**
 * Hero component renders a section with a background image and a heading.
 * 
 * @component
 * 
 * @returns {JSX.Element} A section element with a background image and a heading.
 */

import React from 'react';

const Hero = () => {
    return (
        <section className='mb-20'>

            <div className="relative py-32  lg:pt-32 xl:pb-44">
                <div className="absolute inset-0 block bg-[url(https://www.rit.edu/computing/sites/rit.edu.computing/files/images/paragraph/banner-item/4387_Campus_Roar_10.jpg)] brightness-50">
                </div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl bg-opacity-80">
                    <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
                        <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight drop-shadow-lg">Improving lives through computing</h1>
                    </div>
                </div>
            </div>
        </section>
    );    
};

export default Hero;