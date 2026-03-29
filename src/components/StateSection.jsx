import React from 'react';

const StateSection = () => {
    return (
        <div className='bg-linear-to-r from-purple-900 to-violet-500 text-white grid grid-cols-1 md:grid-cols-3 gap-12 justify-evenly items-center mb-15 p-8'>
            
            <div className='md:border-r-2 border-gray-400'>
                <h2 className='text-3xl font-bold'>50K+</h2>
                <p>Active Users</p>
            </div>

            <div className='md:border-r-2 border-gray-400'>
                <h2 className='text-3xl font-bold'>200+</h2>
                <p>Premium Tools</p>
            </div>


            <div>
                <h2 className='text-3xl font-bold'>4.9</h2>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default StateSection;