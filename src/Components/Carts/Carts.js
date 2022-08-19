import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productIncrement, productDecrement } from "../../redux/action/actions.js";
import * as Types from "../../redux/action/actionTypes";
const Carts = () => {
    const { cartItems, totalItem, totalAmount } = useSelector(
        (state) => state.shoppingCart
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: Types.GET_TOTAL_ITEMS });
    }, [cartItems]);


    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                {cartItems.length === 0 ? (
                    <div className="flex justify-center items-center text-center border-b-2">
                        <div className="text-xl font-semibold">
                            <p>No product in your cart</p>
                        </div>
                    </div>
                ) : (
                    cartItems &&
                    cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between border-b-2 mb-2">
                            <div className="text-lg py-2">
                                <p>{item.name}</p>
                            </div>
                            <div className="text-lg py-2">
                                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                                    <button
                                        disabled={item.quantity === 0 ? true : ""}
                                        onClick={() => dispatch(productDecrement(item))}
                                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M18 12H6"
                                            />
                                        </svg>
                                    </button>
                                    <p>{item.quantity}</p>
                                    <button
                                        disabled={item.quantity >= item.stock ? true : ""}
                                        onClick={() => dispatch(productIncrement(item))}
                                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}

                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Item</p>
                        <p className="text-5xl">{totalItem}</p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Price</p>
                        <p className="text-5xl">{totalAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;
