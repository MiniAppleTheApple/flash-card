import { useState, ChangeEvent } from "react"
import Decks from "./Decks"
import Cards from "./Cards"
import CardForm from "./CardForm"

import defaultDecks from "./default.json"

const defaultCard = {
  text: "",
  answer: "",
}

const updateDeck = (deck: DeckType, {action, card}: Selected): DeckType => {
  switch (action.type) {
  case "add":
    return {...deck, cards: [...deck.cards, card]}
  case "edit":
    return {...deck, cards: deck.cards.map((x, index) => index === action.index ? card : x)}
  default:
    return deck
  }
}

const displayAction = (action: CardsModification) => {
  switch(action.type) {
  case "add":
    return "Add Card"
  case "edit":
    return "Edit Card"
  }
}

const MainPage : React.FC<MainPageProps> = ({setPage}) => {
  const [decks, setDecks] = useState<DeckType[]>(defaultDecks)
  const [selected, setSelected] = useState<Selected | null>(null)

  const deckOnClick = (index: number) => setSelected({
    index,
    card: defaultCard,
    action: {
      type: "add",
    }
  })
  const onSubmit = (selected: Selected) => (event: Event) => {
    const { card } = selected 
    event.preventDefault()
    if (selected !== null && [card.text, card.answer].every(x => x !== "")) {
      setDecks(decks => decks.map((deck, index) => index === selected.index ? updateDeck(deck, selected) : deck))
      setSelected({
        ...selected,
        card: defaultCard,
        action: {
          type: "add"
        }
      })
    }
  }

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => setSelected(
    selected => (selected === null || e.target === null ? null : {...selected, card: {...selected.card, text: e.target.value}})
  )

  const onAnswerChange = (e: ChangeEvent<HTMLInputElement>) => setSelected(
    selected => (selected === null || e.target === null ? null : {...selected, card: {...selected.card, answer: e.target.value}})
  )

  const edit = (index: number) => {
    setSelected(selected => (selected === null ? null : {
      ...selected,
      card: decks[selected.index].cards[index],
      action: {
        type: "edit",
        index: index,
      },
    }))
  }

  const remove = (index: number) => {
    if (selected !== null) {
      setDecks(
        decks => decks.map(
          (deck, deckIndex) => deckIndex === selected.index ? 
          {...deck, cards: deck.cards.filter((card, cardIndex) => index !== cardIndex)} :
          deck
        )
      )
    }
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
            <h1>{displayAction(selected.action)}</h1>
            <CardForm card={selected.card} onSubmit={onSubmit} onTextChange={onTextChange} onAnswerChange={onAnswerChange}/>
          </div>
        )
      }
    </div>
  )
}

export default MainPage