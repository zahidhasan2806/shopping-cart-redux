import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { productIncrement } from '../../redux/action/actions';


const Item = ({ cartItem }) => {
    const { cartItems } = useSelector(
        (state) => state.shoppingCart
    );
    const dispatch = useDispatch();
    const { id, name, stock, price } = cartItem;
    const findCartItem = cartItems.find((item) => item.id === id);


    const incrementBtnHandler = () => {
        dispatch(productIncrement(cartItem));
    };

    return (
        <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <div className="flex justify-between px-4 items-center">
                <div className="text-lg font-semibold">
                    <p className={
                        findCartItem ? (stock - findCartItem.quantity === 0 ? "text-red-600" : "") : ""
                    }>
                        {name} <span className="text-gray-400 text-sm">available in stock {findCartItem ? stock - findCartItem.quantity : stock}</span>
                    </p>
                    <p className="text-gray-400 text-base">Tk {price}</p>
                </div>
                <div className="text-lg font-semibold">
                    <button
                        onClick={incrementBtnHandler}
                        disabled={findCartItem ? (stock - findCartItem.quantity === 0 ? true : "") : ""}
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;