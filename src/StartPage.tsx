import { useState, MouseEvent } from "react"
import { primaryButton, secondaryButton } from "./utils"

// TODO remove mutable data from this implementation 
function shuffle<T>(arr: T[]) {
  const array = [...arr]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const StartPage: React.FC<StartPageProps> = ({decks, index, setPage}) => {
  const [deck, setDeck] = useState<Deck>({...decks[index], cards: shuffle(decks[index].cards)})
  const [isShowed, setIsShowed] = useState<boolean>(false)

  const next = (_event: MouseEvent) => {
    if (deck.cards.length > 1) {
      setDeck({...deck, cards: deck.cards.slice(1, deck.cards.length)})
      setIsShowed(false)
    } else {
      setPage({type: "main", decks})
    }
  }

  const showAnswer = (_event: MouseEvent) => {
    setIsShowed(true)
  }

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold my-6 text-canary-500">{deck.cards[0].text}</h1>
      {
        isShowed ? 
        <div>
          <h1 className="text-4xl font-bold my-6 text-canary-300">{deck.cards[0].answer}</h1>
          <button className={primaryButton} onClick={next}>Next</button>
        </div> :
        <button className={primaryButton} onClick={showAnswer}>Show answer</button>
      }
      <button className={secondaryButton} onClick={_e => setPage({type: "main", decks})}>Back</button>
    </div>
  )
}

export default StartPage
