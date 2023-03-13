import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MainPage from "./MainPage"
import StartPage from "./StartPage"

import defaultDecks from "./default.json"

interface Props {}

const defaultCard = {
  text: "",
  answer: "",
}

const App : React.FC<Props> = () => {
  const [state, setState] = useState<State>({
    type: "normal",
    decks: defaultDecks, 
  })

  const start = () => {
    setIsStarted(true)
  }

  const onClick = (index: number) => {
    setSelected(index)
  }

  const onSubmit = (event: Event) => {
    event.preventDefault()
    if (selected !== null && [card.text, card.answer].every(x => x !== "")) {
      setDecks(decks => decks.map((deck, index) => index === selected ? {...deck, cards: [...deck.cards, card]} : deck))
      setCard(defaultCard)
    }
  }

  return (
    isStarted ? (
      <StartPage/>
    ) : (
      <MainPage onSubmit={onSubmit} selected={selected} onClick={onClick} decks={decks} card={card} setCard={setCard}/>
    )
  )
}

export default App
