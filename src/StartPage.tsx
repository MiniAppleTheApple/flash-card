import {useState, ChangeEvent} from "react"

// TODO makes this implementation pure
function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const StartPage: React.FC<StartPageProps> = ({decks, index, setPage}) => {
  const [deck, setDeck] = useState({...decks[index], cards: shuffle(decks[index].cards)})
  const [isShowed, setIsShowed] = useState(false)

  const next = (event: ChangeEvent<HTMLElement>) => {
    if (deck.cards.length > 1) {
      setDeck({...deck, cards: deck.cards.slice(1, deck.cards.length)})
    }
  }

  const showAnswer = (event: ChangeEvent<HTMLElement>) => {
    setIsShowed(true)
  }

  return (
    <div>
      <h1>
        Start Page
      </h1>
      <h1>{deck.cards[0].text}</h1>
      {
        isShowed ? 
        <div>
          <h1>{deck.cards[0].answer}</h1>
          <button onClick={next}>Next</button>
        </div> :
        <button onClick={showAnswer}>Show answer</button>
      }
      <button onClick={e => setPage({type: "main", decks})}>Back</button>
    </div>
  )
}

export default StartPage
