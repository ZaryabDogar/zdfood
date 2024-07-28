import React, { useEffect } from 'react';
import { useNavigate,useState } from 'react-router-dom';
import Slide from '../components/Slide';
const Home = () => {
  const navigate = useNavigate();
  const [foodcat, setfoodcat] = useState([])
  const [fooddata, setfooddata] = useState([])
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/');
    }
  }, [navigate]);

  
  let fetch_data=>async()=>{
    let response=await fetch("http://localhost:5000/api/fooddata",{
      method:"GET"
    })}

  return (
    
<div  >
      <Slide></Slide>
     
    </div>
  )
}

export default Home