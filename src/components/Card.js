import React from 'react'

const Card = () => {
  return (
 

<div className="w-full sm:max-w-xs max-w-lg bg-white shadow-black shadow-2xl rounded-lg  dark:bg-gray-900 dark:border-gray-7 sm:m-5 hover:scale-y-105 transition-transform delay-200  duration-300 ease-in-out">
    <a href="#">
        <img className="mx-auto rounded-t-lg" src="burger.png" alt="product image" />
    </a>
    <div className="px-5 py-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-white">Food</h5>
        </a>
       <div className="flex justify-between w-full space-x-3" >
        <div className=" w-1/2 flex flex-col text-white my-3">
        <label htmlFor="quantity">Quantity</label>
        <select name="quantity" id="quantity" className='bg-gray-800 outline-none rounded-lg my-2 p-1'>
        
        {Array.from(Array(6),(e,i)=>{
            return(
                <option value={i+1} key={i+1} className='outline-none rounded-lg'>{i+1}</option>
            )
        })}
        </select>
        </div>
        <div className=" w-1/2 flex flex-col text-white my-3">
        <label htmlFor="size">Size</label>
        <select name="quantity" id="quantity" className='bg-gray-800 outline-none rounded-lg my-2 p-1'>
     <option value="half"  className='outline-none rounded-lg'>Half</option>
     <option value="full"  className='outline-none rounded-lg'>Full</option>
       
        </select>
        </div>
       </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-white">$599</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

  )
}

export default Card