import { ADD_TO_CART, DELETE_CART } from "../constants/cart";
let cart = JSON.parse(localStorage.getItem("cart"));
const initialState = {
    cart: cart ? cart : [],
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let index = state.cart.findIndex((course) => course.maKhoaHoc === action.payload.data.maKhoaHoc);
            if (index !== -1) {
                state.cart.splice(action.payload.data, 0);
            } else {
                state.cart.push(action.payload.data);
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
            return { ...state };
        case DELETE_CART:
            let key = state.cart.findIndex((course) => course.maKhoaHoc === action.payload.id);
            if (key !== -1) {
                state.cart.splice(key, 1);
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
            return { ...state };
        default:
            return state;
    }
};
export default cartReducer;