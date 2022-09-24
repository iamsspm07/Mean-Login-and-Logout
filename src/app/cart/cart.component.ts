import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  addCart : any;
  retrievedData : any;
  constructor() {this.addCart=""; }

  ngOnInit(): void {
  }

  displayCart(){
    this.retrievedData = localStorage.getItem("cartData");
    this.addCart = JSON.parse(this.retrievedData)
    console.log(this.addCart);
    return this.addCart;
  }
}
