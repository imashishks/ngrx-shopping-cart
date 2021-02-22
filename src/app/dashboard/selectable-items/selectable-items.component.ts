import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../../_shared/models/products';
import {Observable} from 'rxjs';
import {select, Store} from "@ngrx/store";
import { ProductState } from 'src/app/_shared/redux/reducers';
import { AppState, selectCartItems, selectProductswithCartItems,  } from 'src/app/_shared/redux/selectors';
import { CartActions, ProductsActions } from 'src/app/_shared/redux/actions';
import { CartItem } from 'src/app/_shared/models/cart';
import {map, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'selectable-items',
  templateUrl: './selectable-items.component.html',
  styleUrls: ['./selectable-items.component.scss']
})
export class SelectableItemsComponent implements OnInit {
  products$: any;
  product$: any;
  cartItems$: Observable<CartItem[]>;
  cartItems : CartItem[];
  constructor(private store: Store<AppState>) { 
   
    this.cartItems$ = store.select(selectCartItems);
    this.cartItems$.subscribe((cartItems)=>{
      this.cartItems = cartItems;
    })

    this.products$ =store.select(selectProductswithCartItems);
    
  }

  ngOnInit() {
    this.store.dispatch(ProductsActions.getProducts());
  }

  addItemToCart(product){
    let item = {...product};
    delete item.quantity;
    this.store.dispatch(CartActions.addCartItem({cartItem: {product:item,quantity: 1}}));
  }
  removeItemFromCart(product){
    let item = {...product};
    delete item.quantity;
    this.store.dispatch(CartActions.removeCartItem({cartItem: {product:item,quantity: 1}}));
  }

  getCartQuantity(product: Product): number{
    const filteredCardItem = this.cartItems.filter((item: CartItem)=>{
      item.product.name === product.name;
    })
    if(filteredCardItem.length){
      return filteredCardItem[0].quantity;
    }
    return 0;
  }

}
