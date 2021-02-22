import { Injectable } from '@angular/core';
import  * as data from '../data/products.json';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  getProducts (){
    return of((data as any).default);
  }
}