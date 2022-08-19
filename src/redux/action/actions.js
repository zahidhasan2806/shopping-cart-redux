import * as Types from "./actionTypes";
export const productIncrement = (value) => {
    return {
        type: Types.PRODUCT_INCREMENT,
        payload: value,
    };
};
export const productDecrement = (value) => {
    return {
        type: Types.PRODUCT_DECREMENT,
        payload: value,
    };
};
