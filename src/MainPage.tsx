import { useState } from "react"
import Decks from "./Decks"
import Cards from "./Cards"
import CardForm from "./CardForm"

import defaultDecks from "./default.json"

const defaultCard = {
  text: "",
  answer: "",
}

const MainPage : React.FC<MainPageProps> = ({setPage}) => {
  const [decks, setDecks] = useState<DeckType>(defaultDecks)
  const [selected, setSelected] = useState<Selected | null>(null)

  const deckOnClick = index => setSelected({index, cardToAdd: defaultCard})
  const onSubmit = (event: Event) => {
    const card = selected.cardToAdd
    event.preventDefault()
    if (selected !== null && [card.text, card.answer].every(x => x !== "")) {
      setDecks(decks => decks.map((deck, index) => index === selected.index ? {...deck, cards: [...deck.cards, card]} : deck))
      setSelected({...selected, cardToAdd: defaultCard})
    }
  }

  const onTextChange = e => setSelected(
    selected => ({...selected, cardToAdd: {...selected.cardToAdd, text: e.target.value}})
  )

  const onAnswerChange = e => setSelected(
    selected => ({...selected, cardToAdd: {...selected.cardToAdd, answer: e.target.value}})
  )

  const edit = index => {

  }

  const remove = index => {
    setDecks(
      decks => decks.map(
        (deck, deckIndex) => deckIndex === selected.index ? 
        {...deck, cards: deck.cards.filter((card, cardIndex) => index !== cardIndex)} :
        deck
      )
    )
  }

  return (
    <div>
      <h1>Decks</h1>
      <Decks deckOnClick={deckOnClick} decks={decks}/>
      <button onClick={e => setPage("start")}>Start</button>
      {selected === null ? 
        null : 
        (
          <div>
            <h1>Cards</h1>
            <Cards cards={decks[selected.index].cards} remove={remove} edit={edit}/>
            <h1>Add new</h1>
            <CardForm card={selected.cardToAdd} onSubmit={onSubmit} onTextChange={onTextChange} onAnswerChange={onAnswerChange}/>
          </div>
        )
      }
    </div>
  )
}

export default MainPage