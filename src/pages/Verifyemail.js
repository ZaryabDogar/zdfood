import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Verifyemail = () => {
    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        if (state && state.message) {
            console.log(state.message);
        }
    }, [state]);
  return (
    <div className=' flex justify-center items-center mt-8 '>
    <div className='flex flex-col space-y-6 max-w-xl p-8 justify-center  items-center text-white font-semibold bg-gray-900 rounded-md'>
        <h1 className='text-xl'>Email Verification</h1>
        <p className='text-lg'>{state.message}</p>

    </div></div>
  )
}

export default Verifyemail