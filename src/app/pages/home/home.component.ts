import { Component, OnInit } from '@angular/core';
import { gameData } from 'src/app/data/gameData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	games: any[] = []
  constructor() {
		this.games = gameData
	}

  ngOnInit(): void {
  }

}
