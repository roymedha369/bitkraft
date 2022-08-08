import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css'],
})
export class ScoreTableComponent implements OnInit {
  scores = {};
  sortedKeys;
  constructor(private cricketService: CricketService) {}

  ngOnInit(): void {
    this.cricketService.getResults().subscribe((response) => {
      let result = response.data;
      result.forEach((match) => {
        [0, 1].forEach((i) => {
          if (this.scores[match.teams[i]]) {
            this.scores[match.teams[i]].score =
              this.scores[match.teams[i]].score + match.score[i].r;
            this.scores[match.teams[i]].matches++;
          } else {
            this.scores[match.teams[i]] = {
              score: match.score[i].r,
              matches: 1,
              flag: match.teamInfo[i].img,
              name: match.teamInfo[i].name,
            };
          }
        });
      });
      let tempScores = this.scores;
      this.sortedKeys = Object.keys(tempScores).sort(function (a, b) {
        return tempScores[b].score - tempScores[a].score;
      });
    });
  }
}
