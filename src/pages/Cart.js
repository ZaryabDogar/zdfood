import React from 'react';
import { useCart, useDispatch } from "../Context/ContextReducer";

export default function Cart() {
    let dispatch = useDispatch();
    let cart = useCart();
    let totalprice=cart.reduce((total,food)=>total+food.price,0)
    console.log(totalprice)
    if (cart.length === 0) {
        return (
            <div className='w-full flex justify-center items-center mt-5 sm:p-5 p-3'>
                <div className="relative  max-w-screen-xl overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sr.no
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Options
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-b bg-gray-800 border-gray-700">
                                No Data to display
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
        )
    } else {
        return (
            <div>
            <div className='w-full overflow-x-auto sm:flex justify-center items-center mt-5 sm:p-5 p-3
       flex-col '>

                <div className="relative  md:max-w-screen-xl max-w-5xl overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sr.no
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Options
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((data,index)=>(
                                 <tr className=" border-b bg-gray-800 border-gray-700" key={index}>
                                <td className="px-6 py-4">
                                    {index+1}
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                    {data.name}
                                </th>
                                <td className="px-6 py-4">
                                    {data.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {data.size}
                                </td>
                                <td className="px-6 py-4 text-white">
                                    {data.price}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-red-500 hover:underline">Delete</a>
                                </td>
                            </tr>
                            ))}
                          

                        </tbody>
                    </table>


                </div>
            
           
                </div>
                <div className="flex flex-col justify-between overflow-x-auto  items-center p-2 m-1">
                <div className="flex w-full justify-between sm:space-x-3 space-y-4 sm:flex-row flex-col items-center">
                <p className="text-xl font-semibold text-white">Total : <span className='text-white  p-1.5 rounded-xl'>{totalprice}</span></p>
                <p className="text-xl font-semibold text-white">GST 2% : <span className='text-white  p-1.5 rounded-xl'>{totalprice * (0.02).toFixed(2)}</span></p>
                <p className="text-xl font-semibold text-white">SubTotal : <span className='text-white bg-red-800 p-1.5 rounded-xl'>{(totalprice * (0.02).toFixed(2)+totalprice)}</span></p></div>
                <button type="button" className="text-white font-medium rounded-lg text-sm sm:px-4 sm:py-2 px-3 py-1.5 text-center bg-blue-600 hover:bg-blue-700 m-3">
                    CheckOut
                </button>
                </div>
            </div>
        )
    }
}
