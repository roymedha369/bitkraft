import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CricketService } from '../cricket.service';
import { StateCarrierService } from '../state-carrier.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countriesList = [];
  constructor(
    private cricketService: CricketService,
    private router: Router,
    private stateCarrier: StateCarrierService
  ) {}

  ngOnInit(): void {
    this.cricketService.getCountries().subscribe((response) => {
      this.countriesList = response.data;
    });
  }
  goToMatches(data) {
    this.stateCarrier.cache['country'] = data.name;
    this.router.navigate(['/matches']);
  }
}
