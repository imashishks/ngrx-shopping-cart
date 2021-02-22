import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/_shared/models/cart';
import { CartState } from 'src/app/_shared/redux/reducers';
import { AppState, selectCartItems } from 'src/app/_shared/redux/selectors';

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems$ : Observable<CartItem[]>;
  constructor(private store: Store<AppState>) { 
    this.cartItems$ = store.select(selectCartItems);
  
  }

  ngOnInit() {
  }

}
