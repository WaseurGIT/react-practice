import React from 'react';

const Banner = () => {
    return (
        <div className="mt-20 mb-8 px-4 md:px-8 lg:px-12">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl py-12 md:py-16 lg:py-20 px-6 md:px-10 lg:px-16 text-center shadow-lg">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 momo-signature-regular">
                    Welcome to Foodie
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white mb-6 dancing-script">
                    Discover delicious recipes and amazing food experiences
                </p>
                <button className="bg-white hover:bg-gray-100 text-orange-600 font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full transition">
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default Banner;