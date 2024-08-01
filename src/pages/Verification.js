import React from 'react';
import { Link } from 'react-router-dom';

const Verification = () => {
    return (
        <div className=' flex justify-center items-center  sm:pt-28 pt-20'>
        <div className='flex flex-col space-y-6 max-w-xl p-8 justify-center  items-center text-white font-semibold bg-gray-900 rounded-md'>
            <h1 className='text-xl'>Email Verified Successfully</h1>
            <p className='text-lg'>Thank you for verifying your email address.</p>
            <p className='text-lg'>
                You can now <Link to="/login" className='text-blue-400'>Log in</Link> to your account.
            </p>
        </div></div>
    );
}

export default Verification