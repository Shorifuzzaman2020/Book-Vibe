import React from 'react';

const Banner = () => {
    return (
        <div className='bg-white'>
            <div className='bg-gray-100 flex justify-between items-center w-11/12 mx-auto p-16 px-42 rounded-2xl'>
                <div>
                    <h1 className='text-4xl font-bold mb-4'>Books to freshen up <br /> your bookshelf</h1>
                    <button className='bg-green-500 text-white font-bold px-4 py-2 rounded-sm'>View The List</button>
                </div>
                <div>
                    <img src="src/assets/images.jpeg" alt="" /> 
                </div>
            </div>
        </div>
    );
};

export default Banner;