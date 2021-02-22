import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { ApiServiceService } from "../services/api-service.service";
import {ProductsActions} from './actions';
import { exhaustMap,map,catchError} from 'rxjs/operators';
import { of} from 'rxjs';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private apiService: ApiServiceService
    ) {}

    loadProducts$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(ProductsActions.getProducts),
            exhaustMap((action) =>
            this.apiService.getProducts().pipe(
                map(items => ProductsActions.getProductsSuccess({ items })),
                catchError(error => of(ProductsActions.getProductsFailure({ error })))
            )
            )
        )
    });

}