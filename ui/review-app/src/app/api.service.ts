import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const url = 'https://lo3kcg87r8.execute-api.us-east-1.amazonaws.com/dev';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getRestaurant(){
    return this.http.get(url);
  }
}
