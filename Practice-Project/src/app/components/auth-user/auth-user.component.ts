import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css'],
})
export class AuthUserComponent implements OnInit {
  public isLoggedin: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public logIn(): void {
    this.isLoggedin = true;
  }
  public logOut(): void {
    this.isLoggedin = false;
  }
}
