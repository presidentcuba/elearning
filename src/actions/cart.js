import { ADD_TO_CART, DELETE_CART } from "../constants/cart";

const addToCart = (course) => {
    const data = { ...course };
    return {
        type: ADD_TO_CART,
        payload: { data, },
    }
}
const deleteToCart = (id) => {
   
    return {
        type: DELETE_CART,
        payload: { id, },
    }
}
export { addToCart, deleteToCart };