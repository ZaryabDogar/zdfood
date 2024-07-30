import React, { useState, useEffect, useRef } from 'react';
import { useCart, useDispatch } from "../Context/ContextReducer";

const Card = React.memo((props) => {
    let dispatch = useDispatch();
    let cart = useCart();
    const fooddata = { ...props.food_data };

    let options = fooddata.options[0];
    let priceOptions = Object.keys(options);

    // Initialize state with default values
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(priceOptions[0] || "");

    // Calculate final price based on size and quantity
    const selectedPrice = size ? options[size] * qty : 0;

    // Use a ref to store the previous cart state
    const prevCartRef = useRef(cart);

    // Log cart state whenever it changes
    useEffect(() => {
        if (prevCartRef.current !== cart) {
            console.log(cart);
            prevCartRef.current = cart; // Update the previous cart state
        }
    }, [cart]);

    const handleCart = async () => {
        await dispatch({
            type: 'ADD',
            id: fooddata._id,
            name: fooddata.name,
            img: fooddata.img,
            price: selectedPrice,
            quantity: qty,
            size: size,
        });
    };

    return (
        <div className="w-full sm:max-w-xs max-w-lg bg-white shadow-black shadow-2xl rounded-lg dark:bg-gray-900 dark:border-gray-7 sm:m-5 m-2 hover:scale-y-105 transition-transform delay-200 duration-300 ease-in-out">
            <div>
                <img className="mx-auto rounded-t-lg sm:max-h-[196px] max-h-[396px] container" src={fooddata.img} alt="product" />
            </div>
            <div className="px-5 py-5">
                <h5 className="text-xl font-semibold tracking-tight text-white">{fooddata.name}</h5>
                <div className="flex justify-between w-full space-x-3">
                    <div className="w-1/2 flex flex-col text-white my-3">
                        <label htmlFor="quantity">Quantity</label>
                        <select
                            name="quantity"
                            id="quantity"
                            className='bg-gray-800 outline-none rounded-lg my-2 p-1'
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                        >
                            {Array.from(Array(6), (e, i) => (
                                <option value={i + 1} key={i + 1} className='outline-none rounded-lg'>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/2 flex flex-col text-white my-3">
                        <label htmlFor="size">Size</label>
                        <select
                            name="size"
                            id="size"
                            className='bg-gray-800 outline-none rounded-lg my-2 p-1'
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        >
                            {priceOptions.map((sizeOption) => (
                                <option value={sizeOption} key={sizeOption} className='outline-none rounded-lg'>
                                    {sizeOption}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="lg:text-3xl md:text-xl text-lg font-bold text-white">
                        {selectedPrice} PKR
                    </span>
                    <div
                        onClick={handleCart}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:px-4 px-2.5 py-2.5 text-center lg:text-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Card;
