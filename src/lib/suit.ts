export class Suit {
    static readonly CLUB = new Suit('CLUB', 'clubs', 'C', '♣️');
    static readonly DIAMOND = new Suit('DIAMOND', 'diamonds', 'D', '♦️');
    static readonly HEART = new Suit('HEART', 'hearts', 'H', '♥️');
    static readonly SPADE = new Suit('SPADE', 'spades', 'S', '♠️');
    
    private constructor(
        private key: string, 
        public readonly name: string,
        public readonly letter: string,
        public readonly symbol: string,
    ) {}

    toString() {
        return this.key;
    }

    static values(): Suit[] {
        return [Suit.CLUB, Suit.DIAMOND, Suit.HEART, Suit.SPADE];
    }

    static fromString(s: string): Suit {
        for (let suit of Suit.values()) {
            if (s == suit.letter) {
                return suit;
            }
        }
        throw new Error("Cannot convert: " + s + " from String to Suit");
    }
}