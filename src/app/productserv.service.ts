import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductservService {
  itemToBroadCast : Subject<any>;

  constructor(private httpClient: HttpClient) { 
    this.itemToBroadCast = new Subject();
  }

  getFromCart(){
   return this.itemToBroadCast.asObservable();
  }
  addToCart(product: any){
    this.itemToBroadCast.next(product)
  }

  getCountries(){
    //get -> receive data
    //post -> send data
    //put -> update data
    //delete -> delete data
    return this.httpClient.get('https://restcountries.com/v2/all');
  }
}