import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Admins } from '../modules/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService extends ApiFunctionService<Admins>{

  constructor(protected override http : HttpClient) {
    super( "http://localhost:3000/admin" , http);
  }
}
