import { createSelector } from '@ngrx/store';
import { CartItem } from '../models/cart';
import { CartState, ProductState } from './reducers';


export interface AppState {
    products: ProductState;
    cart:CartState;
}

export const products = (state: AppState) => state.products;
export const selectProducts = createSelector(
    products,
    (state: ProductState) => state.items
);


export const cartItems = (state: AppState) => state.cart;
export const selectCartItems = createSelector(
    cartItems,
    (state: CartState) => state.cartItems 
);


export const selectProductswithCartItems = createSelector(
    products,
    cartItems,
    (products, cartItems) =>{
        console.log(products,cartItems);
        const cartItemsHash = cartItems.cartItems.reduce((initState: object,item: CartItem)=>{
            const data = {};
            data[item.product.name] = item.quantity;
            return {
                ...initState,...data
            }
        },{});

        return products.items.map((item)=>{
            return {...item,quantity:cartItemsHash[item.name]?cartItemsHash[item.name]:0}
        })
    }
)