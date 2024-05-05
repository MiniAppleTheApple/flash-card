import { useState, useEffect, ChangeEvent } from "react"

import Decks from "./Decks"
import Cards from "./Cards"
import CardForm from "./CardForm"

import { secondaryButton, primaryButton } from "./utils"
import { uniqBy, updateByIndex } from "./array"
import { updateDeck } from "./deck"
import { newCard, isCardEmpty } from "./card"

const newDeck = (): Deck => ({
  name: "New deck",
  cards: [],
})

const displayAction = ({ type }: CardsModification) => {
  switch(type) {
  case "add":
    return "Add Card"
  case "edit":
    return "Edit Card"
  }
}

function bindOnloadEvent(fileObject: File, deckByName: Map<string, Deck>, setDecks: (x: Deck[]) => void) {
  const reader = new FileReader()
	reader.onload = e => {
		if (typeof e?.target?.result === "string") {
			const parsed = JSON.parse(e.target.result)
			setDecks(parsed.map((loaded: Deck) => {
        
				const cards = (deckByName.get(loaded.name)?.cards ?? []).
					concat(loaded.cards)

				const uniqCards = uniqBy(cards, card => card.id)

				return {...loaded, cards: uniqCards}
			}))
		}
	} 
	reader.readAsText(fileObject)
}

const MainPage : React.FC<MainPageProps> = (props) => {
  const {setPage} = props
  const [decks, setDecks] = useState<Deck[]>(props.decks)
  const [selected, setSelected] = useState<Selected | null>(null)
  const [file, setFile] = useState<string>("")

  useEffect(() => {
    const text = localStorage.getItem("decks")
    if (text !== null) {
      setDecks(JSON.parse(text))
    }
  }, []);

  useEffect(() => {
    // sotre in localStorage 
    localStorage.setItem("decks", JSON.stringify(decks))
    // create a url of it and store in file
    const file = new Blob([JSON.stringify(decks)], {type: "application/json"});
    const href = URL.createObjectURL(file);
    setFile(href)
  }, [decks])

  // reset the form, and set index to another deck
  const deckOnClick = (index: number) => setSelected({
    index,
    card: newCard(),
    action: {
      type: "add",
    }
  })

  const onSubmit = (event: ChangeEvent<HTMLElement>) => {
    event.preventDefault() 
    if (selected !== null && !isCardEmpty(selected.card)) {
      setDecks(decks => updateByIndex(decks, selected.index, deck => updateDeck(deck, selected)))
      // reset the form, but remain the others data
      setSelected(selected => (selected === null ? selected : {
        ...selected,
        card: newCard(),
        action: {
          type: "add",
        }
      }))
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
      setDecks(decks => updateByIndex(decks, selected.index, deck => ({...deck, cards: deck.cards.filter((_card, cardIndex) => index !== cardIndex)})))
    }
  }

  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files !== null) {
      const deckByName = new Map(decks.map(deck => ([deck.name, deck])))
      const fileObject = event.target.files[0]
      bindOnloadEvent(fileObject, deckByName, setDecks)
    }
  }

  const removeDeck = (deckIndex: number): void => {
    setDecks(decks => decks.filter((_x, index) => (deckIndex ?? -1) !== index))
  }

  const addNewDeck = (): void => {
    setDecks(decks => [newDeck(), ...decks])
  }

  return (
    <div className="p-10">
      <h1 className="text-6xl font-bold my-6">Decks</h1>
      <Decks removeDeck={removeDeck} deckOnClick={deckOnClick} decks={decks}/>
      {selected !== null && decks.length > 0 ?
        (
          <div className="my-6">
            <button className={primaryButton} onClick={_e => setPage({type: "start", index: selected.index, decks: decks})}>Start</button>
            <div>
              <h1 className="text-5xl font-bold my-6">Cards</h1>
              <Cards selected={selected} cards={decks[selected.index].cards} remove={remove} edit={edit}/>
            </div>
            <div>
              <h1 className="text-5xl font-bold my-6">{displayAction(selected.action)}</h1>
              <CardForm card={selected.card} onSubmit={onSubmit} onTextChange={onTextChange} onAnswerChange={onAnswerChange}/>
            </div>
          </div>
        ) :
        <p>No selected deck</p>}
      <section className="flex w-max my-6">
        <button className={`${primaryButton} flex-1`} onClick={_e => addNewDeck()}>New</button>
        {file === "" ? "" : <p className={`${secondaryButton} flex-1`}><a href={file} download>Download</a></p>}
      </section>
      <input className={`${primaryButton} w-max`} type="file" onChange={uploadFile} multiple={false} accept=".json,application/json"></input>
    </div>
  )
}
  
export default MainPage
