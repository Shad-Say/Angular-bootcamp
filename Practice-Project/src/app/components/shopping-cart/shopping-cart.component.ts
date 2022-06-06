import { Component, OnInit } from '@angular/core';

interface Product {
  sno: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public products: Product[] = [
    {
      sno: 'AA203',
      name: 'Iphone 13 pro max',
      image:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3HnNffGkE3crAZwFhGQAKbQunoCfWlJdz-eeexd0aJg9e1tpl2zpIg7zWHEeEtkbZsmjzL66R6w&usqp=CAc',
      quantity: 1,
      price: 100000,
    },
    {
      sno: 'AA204',
      name: 'Motorola Edge 30 Pro',
      image:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1OP6dM8_hbojne9o6ncGTBl4otPeZbXvHsxeSwdh51TIe_83YqGwm8CAoVjAS7hx3JpdV65Kxkco&usqp=CAc',
      quantity: 1,
      price: 50000,
    },
    {
      sno: 'AA205',
      name: 'Google Pixel 6 Pro',
      image:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQFDEYVMmj4Uyxe41JRkHlZRLbe7yzz3o1kmAx9SAlqGmFp6KaH_FUQ3mli0Bg-lKsWiWDMys83ucE&usqp=CAc',
      quantity: 1,
      price: 87000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  public incrementQuantity(productId: string): void {
    for (let product of this.products) {
      if (product.sno === productId) {
        product.quantity += 1;
      }
    }
  }
  public decrementQuantity(productId: string): void {
    for (let product of this.products) {
      if (product.sno === productId && product.quantity > 1) {
        product.quantity -= 1;
      }
    }
  }

  public calTotal() {
    let total: number = 0;
    for (let product of this.products) {
      total += product.quantity * product.price;
    }
    return total;
  }
}
