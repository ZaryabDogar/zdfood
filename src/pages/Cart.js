import React, { useState, useEffect } from 'react';
import { useCart, useDispatch } from "../Context/ContextReducer";
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    let dispatch = useDispatch();
    let cart = useCart();
    const [user, setUser] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        let userEmail = localStorage.getItem("email");
        if (userEmail !== null) {
            setUser(true);
        }
    }, []);

    function calculateTotalWithGST(cart, gstRate = 0.02) {
        let totalPrice = cart.reduce((total, food) => total + food.price * food.quantity, 0);
        let gst = (totalPrice * gstRate).toFixed(2);
        let subtotal = (totalPrice + parseFloat(gst)).toFixed(2);
        return { totalPrice, gst, subtotal };
    }
    
    // Example usage
    let { totalPrice, gst, subtotal } = calculateTotalWithGST(cart);
    

    const handleCheckout = async(e) => {
        e.preventDefault();
        let userEmail = localStorage.getItem("email");
        if (userEmail !== null) {
            try{  const response= await fetch("https://zd-backend.vercel.app/api/orderdata",
                {
                    method:"post",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({email:userEmail,orderdata:cart})
                }
             )

             const result=await response.json()
         
             if(!result.success){
                alert("404 Bad request! "+result.servererror)
              
                }
                else{
                    alert("Order Created Successfully")
                    dispatch({type:"DROP"})
                    navigate('/order_success');
                }
                }
                catch(error){
                    alert("error "+error );
                    
            }
        } else {
            navigate("/login");
        }
    };

    if (cart.length === 0) {
        return (
            <div className='w-full flex justify-center items-center sm:p-5 p-3 sm:pt-28 pt-20'>
                <div className="relative max-w-screen-xl overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Sr.no</th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Quantity</th>
                                <th scope="col" className="px-6 py-3">Options</th>
                                <th scope="col" className="px-6 py-3">TotalPrice</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b bg-gray-800 border-gray-700">
                                <td colSpan="6" className="px-6 py-4 text-center text-white">No Data to display</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className='w-full overflow-x-auto sm:flex justify-center items-center sm:p-5 sm:pt-28 pt-20 p-3 flex-col'>
                    <div className="relative md:max-w-screen-xl max-w-5xl overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Sr.no</th>
                                    <th scope="col" className="px-6 py-3">Name</th>
                                    <th scope="col" className="px-6 py-3">Quantity</th>
                                    <th scope="col" className="px-6 py-3">Options</th>
                                    <th scope="col" className="px-6 py-3">TotalPrice</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((data, index) => (
                                    <tr className="border-b bg-gray-800 border-gray-700" key={index}>
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <th scope="row" className="px-6 py-4 font-medium space-x-3 flex justify-end items-center whitespace-nowrap text-white">
                                            <p>{data.name}</p>
                                            <img src={data.img} alt="" className='w-10 h-10' />
                                        </th>
                                        <td className="px-6 py-4">{data.quantity}</td>
                                        <td className="px-6 py-4">{data.size}</td>
                                        <td className="px-6 py-4 text-white">{data.totalprice}</td>
                                        <td className="px-6 py-4">
                                            <p onClick={() => { dispatch({ type: 'REMOVE', index: index }) }} className="font-medium text-red-500 hover:underline cursor-pointer">Delete</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex flex-col justify-between overflow-x-auto items-center p-2 m-1">
                    <div className="flex w-full xl:max-w-5xl max-w-3xl justify-between sm:space-x-3 space-y-4 sm:flex-row flex-col items-center">
                        <p className="text-xl font-semibold text-white">Total: <span className='text-white p-1.5 rounded-xl'>{totalPrice}</span></p>
                        <p className="text-xl font-semibold text-white">GST 2%: <span className='text-white p-1.5 rounded-xl'>{gst}</span></p>
                        <p className="text-xl font-semibold text-white">SubTotal: <span className='text-white bg-red-800 p-1.5 rounded-xl'>{subtotal}</span></p>
                    </div>
                    {user ? (
                        <button type="button" className="text-white font-medium rounded-lg text-sm sm:px-4 sm:py-2 px-3 py-1.5 text-center bg-blue-600 hover:bg-blue-700 m-3" onClick={handleCheckout}>Checkout</button>
                    ) : (
                        <button type="button" className="text-white font-medium rounded-lg text-sm sm:px-4 sm:py-2 px-3 py-1.5 text-center bg-blue-600 hover:bg-blue-700 m-3" onClick={() => { navigate("/login") }}>Login first</button>
                    )}
                </div>
            </div>
        );
    }
}
