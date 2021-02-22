import {createAction, props} from "@ngrx/store";
import { CartItem } from "../models/cart";
import { Product } from "../models/products";


 export const getProducts =createAction (
    '[Products API] Fetch the products'
);

 export const getProductsSuccess =createAction (
    '[Products API] Products fetched successfully',
    props <{items: Product[]}>()
);

 export const getProductsFailure =createAction (
    '[Products API] Products fetch failed',
    props <{error: string}>()
);

export const  ProductsActions = {
    getProducts,
    getProductsSuccess,
    getProductsFailure
}

// export const getCartItems =createAction (
//     '[Cart Items] Card items fetched',
//     props <{cartItems: CartItem[]}>()
// );

export const addCartItem =createAction (
    '[Cart Items] Card item added',
    props <{cartItem: CartItem}>()
);

export const removeCartItem =createAction (
    '[Cart Items] Card item removed',
    props <{cartItem: CartItem}>()
);

export const  CartActions = {
    addCartItem,
    removeCartItem
}

