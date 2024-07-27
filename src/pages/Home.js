import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Catogory from '../components/Catogory';
import Slide from '../components/Slide';
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the auth token is present in localStorage
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
      // Redirect to login page if token is not found
      // navigate('/login');
      navigate('/');
    }
  }, [navigate]);

  return (
    <div  >
      <Slide></Slide>
     <Catogory></Catogory>
    </div>
  )
}

export default Home