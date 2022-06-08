import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  password: string;
  designation: string;
  bio: string;
  acceptedTerms: boolean;
}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  public user: User = {
    name: '',
    email: '',
    password: '',
    designation: '',
    bio: '',
    acceptedTerms: false,
  };
  constructor() {}

  ngOnInit(): void {}

  public logData(): void {
    if (this.user.acceptedTerms === true) {
      console.log(this.user);
      alert('Data saved in logs');
    } else {
      alert('Please accept the terms and conditions');
    }
  }
}
