import { Component } from '@angular/core';
import { Card } from 'src/lib/card';
import { Rank } from 'src/lib/rank';
import { Suit } from 'src/lib/suit';
import { Deck } from 'src/lib/deck';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gin Rummy';

  cards = [
    new Card(Rank.THREE, Suit.CLUB),
    new Card(Rank.ACE, Suit.SPADE),
    new Card(Rank.QUEEN, Suit.HEART),
  ];

  deck = new Deck();
  hand = [];

  onClickShuffle() {
    this.deck = this.deck.shuffle();
  }

  onClickDeal() {
    for (let i=0; i<10; i++) {
      const card = this.deck.draw();
      this.hand.push(card);
    }
  }
}


