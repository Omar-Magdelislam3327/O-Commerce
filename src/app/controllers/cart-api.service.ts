import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Carts } from '../modules/carts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartApiService extends ApiFunctionService<Carts>{
  constructor(public override http : HttpClient) {
    super('http://localhost:3000/carts', http);}
  }

