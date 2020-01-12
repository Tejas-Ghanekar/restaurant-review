import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { dateType } from 'aws-sdk/clients/iam';

const url = 'https://lo3kcg87r8.execute-api.us-east-1.amazonaws.com/dev';
const postUrl = "https://pqu92uk92j.execute-api.us-east-1.amazonaws.com/test"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})



export class ApiService {

  constructor(private http: HttpClient) { }


  public getRestaurant() {
    return this.http.get(url);
  }

  public postReview(review: Review) {
    return this.http.post(postUrl, review, httpOptions);
  }
}
export class Review {
  resReviewText: string;
  customer_id: string;
  rating: number;
  restaurant_id: string;
  reviewTimestamp: number;
}
