import { Injectable } from '@angular/core';
import { Sales } from '../modules/sales';
import { ApiFunctionService } from './api-function.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesApiService extends  ApiFunctionService<Sales>{

  constructor(public override http: HttpClient) {
    super('http://localhost:3000/sales', http)
  }
}
