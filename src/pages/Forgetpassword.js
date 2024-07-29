import React, { useState } from 'react';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [verify, setverify] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://zd-backend.vercel.app/api/forgetpass', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (result.success) {
        setverify(true)
        alert('Password reset email sent');
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('Error sending email');
    }
  };

  return (
    <>
      {!verify && (<div className=' flex justify-center items-center mt-8 '>
        <div className='flex flex-col space-y-6 max-w-2xl p-8 justify-center  items-center text-white font-semibold bg-gray-900 rounded-md'>
          <h1 className='text-xl'>Enter Your Email</h1>

          <form onSubmit={handleSubmit} className='flex flex-col space-y-8 justify-center  items-center'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='outline-none border-none bg-gray-800 text-white p-1.5 rounded-md'
            />
            <button className='bg-blue-600 hover:bg-blue-700 p-2.5 rounded-md text-xl' type="submit">Send Password Reset Email</button>
          </form>

        </div></div>)}
      {verify && (
        <div className='flex justify-center items-center mt-8'>
          <div className='flex  space-y-6 max-w-6xl p-8 justify-center  items-center text-white font-semibold bg-gray-900 rounded-md'>
            <h1 className='text-xl'>Check your Email</h1>
            </div>
            </div>)}
    </>
  );
};

export default Forgotpassword;
