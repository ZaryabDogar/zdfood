import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';
const Loginn = () => {
    const [Loginndata, setLoginndata] = useState({email:"",password:""})
    const navigate = useNavigate();
    const { login } = useAuth();
  const handelsubmit=async(e)=>{
    e.preventDefault();
    try{  const response= await fetch("https://zd-backend.vercel.app/api/loginuser",
        {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:Loginndata.email,password:Loginndata.password})
        }
     )
    //  console.log({email:Loginndata.email,password:Loginndata.password,})
     const result=await response.json()
 
     if(!result.success){
        alert("404 Bad request! "+result.message)
      
        }
        else{
            login(result.auth);
            navigate('/');
        }
        }
        catch(error){
            alert("error "+error );
            
    }
  }

  const onChange=(e)=>{
setLoginndata({...Loginndata,[e.target.name]:e.target.value})
  }
  return (
    <div className=" w-full flex justify-center items-center h-full  p-10 py-5  ">
<form className="sm:max-w-xl max-w-screen-md w-full flex-col" onSubmit={handelsubmit}>
  
 
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 outline-none border-none text-sm font-medium text-white">Email</label>
        <input type="email" id="email" name='email' className=" text-sm rounded-lg outline-none  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " placeholder="john.doe@company.com" required value={Loginndata.email} onChange={onChange}/>
    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="block mb-2 outline-none border-none text-sm font-medium text-white">Password</label>
        <input type="password" name='password' id="password" className=" text-sm rounded-lg outline-none  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white " placeholder="•••••••••" required value={Loginndata.password} onChange={onChange}/>
    </div> 
  
    <div className="flex flex-col items-start mb-6">
     
        <label htmlFor="remember" className=" text-sm font-medium text-gray-300"><Link to="/forgetpassword" className="hover:underline text-blue-500 font-bold">Forget Password</Link></label><br />
        <label htmlFor="remember" className=" text-sm font-medium text-gray-300">Don't have an account! <Link to="/signup" className="hover:underline text-blue-500 font-bold">Signup</Link>.</label>
    </div>
    <button type="submit" className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
</form>
</div>
  )
}

export default Loginn