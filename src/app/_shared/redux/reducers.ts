
import {createReducer, on} from "@ngrx/store";
import {ProductsActions,CartActions} from "./actions";
import {Product} from '../models/products';
import {CartItem} from '../models/cart';
export interface ProductState {
    items: Product[];
}
const ProductInitialState: ProductState = {
    items: []
};

export const productsReducer = createReducer(
    ProductInitialState,
    on(ProductsActions.getProductsSuccess, (state, { items }) => {
       return  {
      ...state,
      items,
    }})
);

export interface CartState {
    cartItems: CartItem[];
}
const CartInitialState: CartState = {
    cartItems: []
};

export const cartReducer = createReducer(
    CartInitialState,
    on(CartActions.addCartItem, (state, { cartItem}) => {
        let cartItems = [...state.cartItems];
        const existingItemIndex = cartItems.findIndex((item)=>(item.product.name===cartItem.product.name));
        if(existingItemIndex === -1){
            cartItems.push(cartItem);
        }else{
            let selectedItem = {...cartItems[existingItemIndex]};
            selectedItem.quantity = selectedItem.quantity + cartItem.quantity;
            cartItems.splice(existingItemIndex,1,selectedItem);
        }
        return {
            ...state,
            ...{cartItems},
        }
    }
    ),
    on(CartActions.removeCartItem, (state, { cartItem}) => {
        let cartItems = [...state.cartItems];
        const existingItemIndex = cartItems.findIndex((item)=>(item.product.name === cartItem.product.name));  
        let selectedItem = {...cartItems[existingItemIndex]};
        selectedItem.quantity--;
        if(!selectedItem.quantity){
            cartItems.splice(existingItemIndex,1);
        }else{
            cartItems.splice(existingItemIndex,1,selectedItem);
        }
        return {
            ...state,
            ...{cartItems},
        }
    }
    ),
);