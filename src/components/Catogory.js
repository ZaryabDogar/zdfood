import React from 'react';
import Card from './Card';

const Catogory = () => {
  return (
    <div className='mx-auto py-10 w-full'>
      <h2 className='text-2xl font-bold text-center mb-6'>Category</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-4 gap-6 justify-items-center w-full'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Catogory;
