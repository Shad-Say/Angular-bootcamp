import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/Country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  public country: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getUsers().subscribe((data: Country[]) => {
      this.country = data;
    });
  }
}
