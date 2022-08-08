import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  playersList = [];
  constructor(private cricketService: CricketService) {}

  ngOnInit(): void {
    this.cricketService.getPlayers().subscribe((response) => {
      this.playersList = response.data;
    });
  }
}
