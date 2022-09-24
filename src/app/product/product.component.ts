import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  addTCart : any;
  product : any;
  constructor() {
    this.addTCart = [];
    this.product = [{productId: 1, productName:"Honor 30 Pro", price: "95000", description: "Whether it`s your personal work or professional work, you can trust the seamless and quick configuration of the Honor 30 Pro.", imagePath: "./assets/images/honor30pro.jpg"},
    {productId: 2, productName:"Huawei Honor View 20", price: "55000", description: "Whether it`s your personal work or professional work, you can trust the seamless and quick configuration of the Honor 30 Pro.", imagePath: "./assets/images/huaweihonorview20.jpg"},
    {productId: 3, productName:"Huawei Mate 40", price: "90000", description: "Whether it`s your personal work or professional work, you can trust the seamless and quick configuration of the Honor 30 Pro.", imagePath: "./assets/images/huaweimate40.jpg"},
    {productId: 4, productName:"Nothing Phone 1", price: "35000", description: "Whether it`s your personal work or professional work, you can trust the seamless and quick configuration of the Honor 30 Pro.", imagePath: "./assets/images/nothingphone1.jpg"},
    {productId: 5, productName:"OnePlus 8 Pro", price: "75000", description: "Whether it`s your personal work or professional work, you can trust the seamless and quick configuration of the Honor 30 Pro.", imagePath: "./assets/images/oneplus8pro.jpg"},
    {productId: 6, productName:"Samsungalaxys 21 Ultra", price: "125000", description: "Introducing Galaxy S21 Ultra 5G. Designed with a unique contour-cut camera to create a revolution in photography.", imagePath: "./assets/images/samsungalaxys21ultra.jpg"}

    ]
   }

  ngOnInit(): void {
  }

  addtocart( add : any){
    this.addTCart.push(add)
    localStorage.setItem("cartData" , JSON.stringify(this.addTCart))
  }
}
