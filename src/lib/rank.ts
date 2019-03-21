export class Rank {
    static readonly ACE = new Rank('ACE', 1, 1, 'ace', 'A');
    static readonly TWO = new Rank('TWO', 2, 2, 'two', '2');
    static readonly THREE = new Rank('THREE', 3, 3, 'three', '3');
    static readonly FOUR = new Rank('FOUR', 4, 4, 'four', '4');
    static readonly FIVE = new Rank('FIVE', 5, 5, 'five', '5');
    static readonly SIX = new Rank('SIX', 6, 6, 'six', '6');
    static readonly SEVEN = new Rank('SEVEN', 7, 7, 'seven', '7');
    static readonly EIGHT = new Rank('EIGHT', 8, 8, 'eight', '8');
    static readonly NINE = new Rank('NINE', 9, 9, 'nine', '9');
    static readonly TEN = new Rank('TEN', 10, 10, 'ten', 'T');
    static readonly JACK = new Rank('JACK', 11, 10, 'jack', 'J');
    static readonly QUEEN = new Rank('QUEEN', 12, 10, 'queen', 'Q');
    static readonly KING = new Rank('KING', 13, 10, 'king', 'K');
    
    private constructor(
        private key: string, 
        public readonly order: number,
        public readonly value: number,
        public readonly name: string,
        public readonly symbol: string,
    ) {}

    toString() {
        return this.key;
    }

    static values(): Rank[] {
        return Object.values(Rank);
    }

    static fromString(r: string): Rank {
        for (let rank of Rank.values()) {
            if (r == rank.symbol) {
                return rank;
            }
        }
        throw new Error('Cannot convert: ' + r + ' from String to Suit');
    }
}