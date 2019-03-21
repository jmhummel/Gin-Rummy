import { Component } from '@angular/core';
import { Card } from 'src/lib/card';
import { Rank } from 'src/lib/rank';
import { Suit } from 'src/lib/suit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cards = [
    new Card(Rank.THREE, Suit.CLUB),
    new Card(Rank.ACE, Suit.SPADE),
    new Card(Rank.QUEEN, Suit.HEART),
  ];
}
