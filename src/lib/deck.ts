import { Card } from './card';
import { Suit } from './suit';
import { Rank } from './rank';

export class Deck {
    private cards: Card[];

    constructor(cards: Card[] = []) {
        this.cards = cards;
        if (cards.length === 0) {
            Suit.values().forEach(suit => {
                Rank.values().forEach(rank => {
                    this.cards.push(new Card(rank, suit));
                });
            });
        }
    }

    shuffle(): Deck {
        const tuples = this.cards.map(card => {
            const tuple: [number, Card] = [Math.random(), card];
            return tuple;
        });
        const cards = tuples.sort().map(([val, card]) => card);
        return new Deck(cards);
    }

    draw(): Card {
        return this.cards.shift();
    }

    toString(): string {
        return this.cards.join(', ');
    }
}
