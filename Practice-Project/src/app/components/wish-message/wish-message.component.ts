import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrls: ['./wish-message.component.css'],
})
export class WishMessageComponent implements OnInit {
  public message: String = 'Hello';
  constructor() {}

  ngOnInit(): void {}

  public updateMessage(msg: string): void {
    this.message = msg;
  }
}
