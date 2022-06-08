import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CounterComponent } from './components/counter/counter.component';
import { WishMessageComponent } from './components/wish-message/wish-message.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { ChangeUsernameComponent } from './components/change-username/change-username.component';
import { ChangeUsernameAutoComponent } from './components/change-username-auto/change-username-auto.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component';
import { ShowPasswordComponent } from './components/show-password/show-password.component';
import { AmountRangeComponent } from './components/amount-range/amount-range.component';
import { ThemeComponent } from './components/theme/theme.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { HttpClientModule } from '@angular/common/http';
import { ContactAppComponent } from './components/contact-app/contact-app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

interface Employee {
  sno: string;
  name: string;
  age: number;
  designation: string;
  doj: Date;
  salary: number;
}

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CounterComponent,
    WishMessageComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    ChangeUsernameComponent,
    ChangeUsernameAutoComponent,
    SmsAppComponent,
    ShowPasswordComponent,
    AmountRangeComponent,
    ThemeComponent,
    UserRegisterComponent,
    AuthUserComponent,
    UserListComponent,
    ContactAppComponent,
    ContactListComponent,
    ContactCardComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    CountryListComponent,
    CountryDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
