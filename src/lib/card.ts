import { Rank } from './rank';
import { Suit } from './suit';


export class Card {
    constructor(public readonly rank: Rank, public readonly suit: Suit) {}

    toString(): string {
        // return `Card<${this.rank}, ${this.suit}>`;
        return this.rank.symbol + ' ' + this.suit.symbol;
    }
    
    getFullName(): string {
        return `${this.rank.name} of ${this.suit.name}`;
    }

    equals(c: Card): boolean {
        return this.suit === c.suit && this.rank === c.rank;
    }
}

