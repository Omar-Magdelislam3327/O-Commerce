import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { HttpClient } from '@angular/common/http';
import { Products } from '../modules/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService extends ApiFunctionService<Products> {

  constructor(public override http : HttpClient) {
    super("http://localhost:3000/products" , http);
  }
}
