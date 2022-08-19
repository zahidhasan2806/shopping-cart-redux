import * as Types from "../action/actionTypes";

//initialState state
const initialState = {
  cartItems: [],
  totalItem: 0,
  totalAmount: 0
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.PRODUCT_INCREMENT:
      const item = action.payload;
      const matchedProducts = state.cartItems.find((matchedProduct) => matchedProduct.id === item.id);
      if (matchedProducts) {
        let incrementProducts = state.cartItems.map((cartItem) => {
          if (cartItem.id === matchedProducts.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        });
        return { ...state, cartItems: incrementProducts };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case Types.PRODUCT_DECREMENT:
      const items = action.payload;
      const selectedProducts = state.cartItems.find((selectedProduct) => selectedProduct.id === items.id);
      if (selectedProducts) {
        let decrementProducts = state.cartItems.map((cartItem) => {
          if (cartItem.id === selectedProducts.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            };
          }
          return cartItem;
        });
        return { ...state, cartItems: decrementProducts };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case Types.GET_TOTAL_ITEMS:
      const { totalItem, totalAmount } = state.cartItems.reduce(
        (total, current) => {
          let { price, quantity } = current;
          let updatedTotalPrice = price * quantity;
          total.totalAmount += updatedTotalPrice;
          total.totalItem += quantity;
          return total;
        },
        { totalItem: 0, totalAmount: 0 }
      );
      return { ...state, totalItem, totalAmount };

    default:
      return state;
  }
};

export default productReducer;
