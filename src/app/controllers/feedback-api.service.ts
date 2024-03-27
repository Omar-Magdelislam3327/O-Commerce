import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Feedback } from '../modules/Feedback';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackApiService extends ApiFunctionService<Feedback>{
  constructor(public override http : HttpClient) {
    super('http://localhost:3000/feedback', http);
  }
}

