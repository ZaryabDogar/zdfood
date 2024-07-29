import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
    const [signupdata, setsignupdata] = useState({name:"",email:"",password:"",location:""})
    const navigate = useNavigate();
  const handelsubmit=async(e)=>{
    e.preventDefault();
    try{  const response= await fetch("http://zd-backend.vercel.app/api/createuser",
        {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:signupdata.name,email:signupdata.email,password:signupdata.password,location:signupdata.location})
        }
     )
    //  console.log({name:signupdata.name,email:signupdata.email,password:signupdata.password,location:signupdata.location})
     const result=await response.json()

     if(!result.success){
        alert("404 Bad request! "+result.message)
        console.log("Email already in use")
        }
        else{
            navigate('/Verifyemail', { state: { message: result.message } });
        }
        }
        catch(error){
            alert("error "+error );
            
    }
  }

  const onChange=(e)=>{
setsignupdata({...signupdata,[e.target.name]:e.target.value})
  }
  return (
    <div className=" w-full flex justify-center items-center h-full  p-10 py-5  ">
<form className="sm:max-w-xl max-w-screen-md w-full flex-col" onSubmit={handelsubmit}>
  
    <div className="mb-6">
        <label htmlFor="name" className="block mb-2 outline-none border-none text-sm font-medium text-white">Name</label>
        <input type="name" id="name" name='name' className=" text-sm rounded-lg outline-none  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " placeholder="" required value={signupdata.name} onChange={onChange}/>
    </div> 
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 outline-none border-none text-sm font-medium text-white">Email</label>
        <input type="email" id="email" name='email' className=" text-sm rounded-lg outline-none  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " placeholder="john.doe@company.com" required value={signupdata.email} onChange={onChange}/>
    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="block mb-2 outline-none border-none text-sm font-medium text-white">Password</label>
        <input type="password" name='password' id="password" className=" text-sm rounded-lg outline-none  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " placeholder="•••••••••"   autoComplete="current-password" required value={signupdata.password} onChange={onChange}/>
    </div> 
    <div className="mb-6">
        <label htmlFor="location" className="block mb-2 outline-none border-none text-sm font-medium text-white">Address</label>
        <input name='location' type="text" id="location" className=" text-sm rounded-lg outline-none  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " placeholder="" required value={signupdata.location} onChange={onChange}/>
    </div> 
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        {/* <input id="remember" type="checkbox" value="" className="w-4 h-4 border  rounded  focus:ring-3  bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800" required /> */}
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-300">Already have an account! <Link to="/login" className="hover:underline text-blue-500 font-bold">Login</Link>.</label>
    </div>
    <button type="submit" className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
</form>
</div>
  )
}

export default Signup