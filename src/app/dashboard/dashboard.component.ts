import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import { ProductEffects } from '../_shared/redux/effects';
import  {ProductState} from '../_shared/redux/reducers';
import { Product} from '../_shared/models/products';
import {ApiServiceService } from '../_shared/services/api-service.service';
import { Observable } from 'rxjs';
import {selectProducts} from '../_shared/redux/selectors';
import { ProductsActions } from '../_shared/redux/actions';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor( private store: Store<ProductState>) { 
   
  }

  ngOnInit() {
   
  }

}
