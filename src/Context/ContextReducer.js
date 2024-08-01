import React, { createContext, useReducer, useContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    img: action.img,
                    price: action.price,
                    quantity: action.quantity,
                    size: action.size,
                    totalprice: action.price * action.quantity
                }
            ];
        case 'REMOVE':
            return state.filter((_, index) => index !== action.index);
        case 'UPDATE': {
            return state.map((food) => {
                if (food.id === action.id) {
                    const newQuantity = parseInt(action.quantity, 10);
                    const newTotalPrice = action.price * newQuantity;
                    return {
                        ...food,
                        quantity: newQuantity,
                        price: action.price,
                        totalprice: newTotalPrice
                    };
                }
                return food;
            });
        }
        case "DROP":{
            let emptyArr=[];
            return emptyArr;
        }
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatch = () => useContext(CartDispatchContext);
