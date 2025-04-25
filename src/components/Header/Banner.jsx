import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-white'>
            <div className='bg-gray-100 flex justify-between items-center w-11/12 mx-auto p-16 lg:px-42 rounded-2xl'>
                <div>
                    <h1 className='text-4xl font-bold mb-4'>Books to freshen up <br /> your bookshelf</h1>
                    <Link to='/listedBook'><button className='bg-green-500 text-white font-bold px-4 py-2 rounded-sm hover:cursor-pointer'>View The List</button></Link>
                </div>
                <div>
                    <img src="/images.jpeg" alt="" /> 
                </div>
            </div>
        </div>
    );
};

export default Banner;