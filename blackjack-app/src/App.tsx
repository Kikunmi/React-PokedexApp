import { useEffect, useState } from 'react';
import './App.css';

// Card suits and values
const suits = ['C', 'D', 'H', 'S'];
const values = [
  'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',
];

// Helper to get card image URL
const getCardImageUrl = (value: string, suit: string) => {
  return `https://deckofcardsapi.com/static/img/${value}${suit}.png`;
};

// Helper to get card score
const getCardScore = (value: string) => {
  if (value === 'A') return 11;
  if (['K', 'Q', 'J', '10'].includes(value)) return 10;
  return parseInt(value);
};

// Generate a shuffled deck
const getShuffledDeck = () => {
  const deck = suits.flatMap((suit) => values.map((value) => ({ value, suit })));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

function App() {
  const [cards, setCards] = useState<{ value: string; suit: string }[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const deck = getShuffledDeck();
    const drawn = deck.slice(0, 2);
    setCards(drawn);
    setScore(getCardScore(drawn[0].value) + getCardScore(drawn[1].value));
  }, []);

  return (
    <div className="blackjack-app" style={{ textAlign: 'center', marginTop: 40 }}>
      <h1>Blackjack Card Dealer</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, margin: '32px 0' }}>
        {cards.map((card, idx) => (
          <img
            key={idx}
            src={getCardImageUrl(card.value, card.suit)}
            alt={`${card.value} of ${card.suit}`}
            width={100}
            height={145}
            style={{ borderRadius: 8, boxShadow: '0 2px 8px #0002' }}
          />
        ))}
      </div>
      <h2>Total: {score}</h2>
      {score === 21 && <div style={{ color: 'green', fontWeight: 'bold', fontSize: 24 }}>Blackjack!</div>}
      <p style={{ marginTop: 32, color: '#888' }}>
        Refresh the page to deal new cards.
      </p>
    </div>
  );
}

export default App;
