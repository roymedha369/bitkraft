import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  teamList;
  constructor(private cricketService: CricketService) {}

  ngOnInit(): void {
    this.cricketService.getTeams().subscribe((response) => {
      this.teamList = response.data;
    });
  }
}
