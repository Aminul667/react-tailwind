import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 p-4 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl text-purple-700 font-extrabold'>{price.price}</span>
                <span className='text-2xl font-bold'>/month</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{price.name}</h5>
            <p className='font-bold underline'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='w-full mt-auto bg-green-500 py-2 rounded text-white font-bold hover:bg-green-700'>Buy Now</button>
        </div>
    );
};

export default PriceCard;