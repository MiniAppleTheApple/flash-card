import { useState, useEffect, ChangeEvent } from "react"
import Decks from "./Decks"
import Cards from "./Cards"
import CardForm from "./CardForm"

import { secondaryButton, primaryButton } from "./utils"

const generateCardID = () => Date.now().toString(16) 

const defaultCard: CardType = {
  id: "",
  text: "",
  answer: "",  
}
const newCard = (): CardType => ({
  text: "",
  answer: "",
  id: generateCardID(),
})

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

const MainPage : React.FC<MainPageProps> = (props) => {
  const {setPage} = props
  const [decks, setDecks] = useState<DeckType[]>(props.decks)
  const [selected, setSelected] = useState<Selected | null>(null)
  const [file, setFile] = useState<string>("")

  useEffect(() => {
    console.log("Hello")
    const text = localStorage.getItem("decks")
    if (text !== null) {
      setDecks(JSON.parse(text))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("decks", JSON.stringify(decks))
    const file = new Blob([JSON.stringify(decks)], {type: "application/json"});
    const href = URL.createObjectURL(file);
    setFile(href)
  }, [decks])

  const deckOnClick = (index: number) => setSelected({
    index,
    card: newCard(),
    action: {
      type: "add",
    }
  })

  const onSubmit = (event: Event) => {
    event.preventDefault()
    if (selected !== null && [selected?.card?.text, selected?.card?.answer].every(x => x !== "")) {
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
    selected => (selected === null ? null : {...selected, card: {...selected.card, text: e.target.value}})
  )

  const onAnswerChange = (e: ChangeEvent<HTMLInputElement>) => setSelected(
    selected => (selected === null ? null : {...selected, card: {...selected.card, answer: e.target.value}})
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

  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files !== null) {
      const fileObject = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        if (typeof e?.target?.result === "string") {
          const parsed = JSON.parse(e.target.result)
          setDecks(parsed.map(deck => {
            const cards = deck.cards.map(card => ({...card, id: card.id ?? generateCardID()}))
            return {...deck, cards: cards}
          }))
        }
      } 
      reader.readAsText(fileObject)
    }
  }

  const deleteDeck = (): void => {
    setDecks(decks => decks.filter((x, index) => (selected?.index ?? -1) !== index))
  }

  return (
    <div className="p-10">
      <h1 className="text-6xl font-bold my-6">Decks</h1>
      <Decks deckOnClick={deckOnClick} decks={decks}/>
      {selected === null || decks.length < 1  ? 
        null : 
        (
          <div className="my-6">
            <button className={secondaryButton} onClick={e => deleteDeck()}>Delete</button>
            <button className={primaryButton} onClick={e => setPage({type: "start", index: selected.index, decks: decks})}>Start</button>
            <div>
              <h1 className="text-5xl font-bold my-6">Cards</h1>
              <Cards cards={decks[selected.index].cards} remove={remove} edit={edit}/>
            </div>
            <div>
              <h1 className="text-5xl font-bold my-6">{displayAction(selected.action)}</h1>
              <CardForm card={selected.card} onSubmit={onSubmit} onTextChange={onTextChange} onAnswerChange={onAnswerChange}/>
            </div>
          </div>
        )
      }
      {file === "" ? "" : <p className={`${secondaryButton} w-max my-6`}><a href={file} download>Download</a></p>}
      <input className={`${primaryButton} w-max`} type="file" onChange={uploadFile} multiple={false} accept=".json,application/json"></input>
    </div>
  )
}
  
export default MainPage