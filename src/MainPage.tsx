import { useState, useEffect, ChangeEvent } from "react"

import Decks from "./Decks"
import Cards from "./Cards"
import CardForm from "./CardForm"

import { secondaryButton, primaryButton } from "./utils"

const generateID = () => (Date.now() * Math.floor(Math.random() * 200)).toString(16)

const defaultCard: Card = {
  id: "",
  text: "",
  answer: "",  
}
const newCard = (): Card => ({
  text: "",
  answer: "",
  id: generateID(),
})

const newDeck = (): Deck => ({
  name: "New deck",
  cards: [],
})

const updateDeck = (deck: Deck, {action, card}: Selected): Deck => {
  const { cards } = deck;
  switch (action.type) {
  case "add":
    return {...deck, cards: [...cards, card]}
  case "edit":
    return {...deck, cards: updateByIndex(cards, action.index, (_e) => card)}
  }
  throw new Error("Unknown type of action") 
}

const displayAction = ({ type }: CardsModification) => {
  switch(type) {
  case "add":
    return "Add Card"
  case "edit":
    return "Edit Card"
  }
}

function uniqBy<T, K>(arr: T[], f: (x: T) => K): T[] {
  return [...new Map(arr.map(x => [f(x), x])).values()]
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

function isCardFormEmpty({text, answer}: CardFormInputs): boolean {
  return text !== "" && answer !== ""
}

function updateByIndex<T>(arr: T[], index: number, f: (element: T) => T): T[] {
  return arr.map((element, i) => i === index ? f(element) : element)
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

  const onSubmit = (_event: ChangeEvent) => {
    if (selected !== null && isCardFormEmpty(selected.card)) {
      setDecks(decks => updateByIndex(decks, selected.index, deck => updateDeck(deck, selected)))
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

  const removeDeck = (): void => {
    setDecks(decks => decks.filter((x, index) => (selected?.index ?? -1) !== index))
  }

  const addNewDeck = (): void => {
    setDecks(decks => [newDeck(), ...decks])
  }

  return (
    <div className="p-10">
      <h1 className="text-6xl font-bold my-6">Decks</h1>
      <Decks deckOnClick={deckOnClick} decks={decks}/>
      {selected !== null && decks.length > 0 ?
        (
          <div className="my-6">
            <button className={secondaryButton} onClick={_e => removeDeck()}>Delete</button>
            <button className={primaryButton} onClick={_e => setPage({type: "start", index: selected.index, decks: decks})}>Start</button>
            <div>
              <h1 className="text-5xl font-bold my-6">Cards</h1>
              <Cards cards={decks[selected.index].cards} remove={remove} edit={edit}/>
            </div>
            <div>
              <h1 className="text-5xl font-bold my-6">{displayAction(selected.action)}</h1>
              <CardForm onSubmit={onSubmit} onTextChange={onTextChange} onAnswerChange={onAnswerChange}/>
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
