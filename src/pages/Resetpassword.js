import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Resetpassword = () => {
  const [password, setPassword] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://zd-backend.vercel.app/api/resetpassword/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();
      if (result.success) {
        alert('Password has been reset');
        navigate('/login');
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('Error resetting password');
    }
  };

  return (
    <div className=' flex justify-center items-center mt-8 '>
        <div className='flex flex-col space-y-6 max-w-2xl p-8 justify-center  items-center text-white font-semibold bg-gray-900 rounded-md'>
          <h1 className='text-xl'>Enter Your Password</h1>

          <form onSubmit={handleSubmit} className='flex flex-col space-y-8 justify-center  items-center'>
            <label  htmlFor="password">New Password:</label>
            <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              className='outline-none border-none bg-gray-800 text-white p-1.5 rounded-md'
            />
            <button className='bg-blue-600 hover:bg-blue-700 p-2.5 rounded-md text-xl' type="submit">Reset Password</button>
          </form>

        </div></div>
  
  );
};

export default Resetpassword;
