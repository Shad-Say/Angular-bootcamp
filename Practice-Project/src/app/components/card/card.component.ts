import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  public tourImage: string =
    'https://images.pexels.com/photos/12319997/pexels-photo-12319997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  constructor() {}

  ngOnInit(): void {}

  public getDate(): string {
    return Date();
  }
}
