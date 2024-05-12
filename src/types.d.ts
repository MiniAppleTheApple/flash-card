type Page = {
	type: "start",
	decks: Deck[],
	index: number, 
} | {
	type: "main",
	decks: Deck[],
}

type AddCard = {
	type: "add",
}

type EditCard = {
	type: "edit",
	index: number,
}

type CardModification = AddCard | EditCard

type CardSelected = {
  type: "card",
  card: Card,
	index: number,
	action: CardModification, 
}

type EditDeck = {
  type: "edit",
  name: string,
}

type EditDeckSelected = {
  type: "edit_deck"
  index: number,
  name: string,
}

type Selected = CardSelected | EditDeckSelected
t
type Card = {
  text: string,
  answer: string,
  id: string,
}

type Deck = {
  name: string,
  cards: Card[],
}

type MainPageProps = {
  setPage: Dispatch<SetStateAction<"main" | "start">>,
  decks: Deck[],
}

type StartPageProps = {
  setPage: Dispatch<SetStateAction<"main" | "start">>,
  index: number,
  decks: Deck[],
}

type CardsProps = {
  cards: Card[],
  selected: Selected,
  remove: Dispatch<SetStateAction<number>>,
  edit: Dispatch<SetStateAction<number>>,
}

interface CardFormInputs {
  text: string
  answer: string
}
