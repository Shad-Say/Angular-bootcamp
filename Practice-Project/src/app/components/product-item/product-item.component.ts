import { Component, OnInit } from '@angular/core';

interface Product {
  sno: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  public product: Product = {
    sno: 'AA203',
    name: 'Iphone',
    image:
      'https://images.pexels.com/photos/6791447/pexels-photo-6791447.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1',
    quantity: 6,
    price: 100000,
  };
  constructor() {}

  ngOnInit(): void {}

  public incrementQuantity(): void {
    this.product.quantity += 1;
  }
  public decrementQuantity(): void {
    if (this.product.quantity > 1) {
      this.product.quantity -= 1;
    }
  }
}
