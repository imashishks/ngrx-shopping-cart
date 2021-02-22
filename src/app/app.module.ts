import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectableItemsComponent } from './dashboard/selectable-items/selectable-items.component';
import { CartItemsComponent } from './dashboard/cart-items/cart-items.component';
import * as fromReducer from './_shared/redux/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './_shared/redux/effects';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SelectableItemsComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      products: fromReducer.productsReducer,
      cart: fromReducer.cartReducer
    }),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Assignment App',
    }),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
