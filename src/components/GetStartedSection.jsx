import React from 'react';
import userPng from '../assets/user.png';
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const GetStartedSection = () => {
    return (
        <div className='w-10/12 mx-auto mb-15'>
            <div className='text-center mb-10'>
                <h2 className='text-3xl font-bold mb-4'>Get Started in 3 Steps</h2>
                <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='card text-center space-y-3 shadow py-10 bg-zinc-100'>
                    <div className='flex justify-center'>
                        <img className='bg-purple-200 rounded-[50%] p-4' src={userPng} alt="" />
                    </div>

                    <h3 className='font-bold text-2xl'>Create Account</h3>

                    <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>


                <div className='card text-center space-y-3 shadow py-10 bg-zinc-100'>
                    <div className='flex justify-center'>
                        <img className='bg-purple-200 rounded-[50%] p-4' src={packageImg} alt="" />
                    </div>

                    <h3 className='font-bold text-2xl'>Choose Products</h3>

                    <p className='text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='card text-center space-y-3 shadow py-10 bg-zinc-100'>
                    <div className='flex justify-center'>
                        <img className='bg-purple-200 rounded-[50%] p-4' src={rocketImg} alt="" />
                    </div>

                    <h3 className='font-bold text-2xl'>Start Creating</h3>

                    <p className='text-gray-500'>Download and start using your premium tools immediately.</p>
                </div>
                
            </div>
        </div>
    );
};

export default GetStartedSection;