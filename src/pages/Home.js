import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slide from '../components/Slide';
import Card from '../components/Card';
import { useSearch } from '../Context/SearchContext'; // import the useSearch hook

const Home = () => {
  const navigate = useNavigate();
  const { searchTerm } = useSearch(); // use the search context
  const [foodcat, setFoodcat] = useState([]);
  const [fooddata, setFooddata] = useState([]);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/');
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch("https://zd-backend.vercel.app/api/fooddata", {
      method: "GET"
    });
    const data = await response.json();
    setFooddata(data.food_data);
    setFoodcat(data.foodcatagory);
  };

  const filteredFoodData = fooddata.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Slide />
      <div className='md:p-8 p-6 mt-5'>
        {foodcat.map((data) => (
          <div key={data._id}>
            <h5 className='text-2xl text-white font-semibold underline underline-offset-8'>{data.CategoryName}</h5>
            <div className='md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
              {filteredFoodData.filter((items) => items.CategoryName === data.CategoryName).map((filterdata) => (
                <div className='flex' key={filterdata._id}>
                  <Card food_data={filterdata} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
