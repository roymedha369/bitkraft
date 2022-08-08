import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';
import { Match } from '../entities/match';
import { StateCarrierService } from '../state-carrier.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent implements OnInit {
  matchList = [];
  match = new Match();
  countryName;
  constructor(
    private cricketService: CricketService,
    private stateCarrier: StateCarrierService
  ) {}

  ngOnInit(): void {
    this.cricketService.getMatches().subscribe((response) => {
      this.matchList = response.data;
      if (this.stateCarrier.cache && this.stateCarrier.cache['country']) {
        this.countryName = this.stateCarrier.cache['country'];
        this.matchList = this.matchList.filter((match) => {
          return (
            this.countryName === match.teams[0] ||
            this.countryName === match.teams[1]
          );
        });
        this.stateCarrier.clearCache();
      }
    });
  }

  seeDeatils(data) {
    this.match = data;
  }
}
