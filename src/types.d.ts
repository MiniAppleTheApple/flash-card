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
  card: Card,
}

type EditCard = {
	type: "edit",
	index: number,
  card: Card,
}

type CardsModification = AddCard | EditCard

type Selected = {
	index: number,
	action: CardsModification, 
}

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

  remove: Dispatch<SetStateAction<number>>,
  edit: Dispatch<SetStateAction<number>>,
}

interface CardFormInputs {
  text: string
  answer: string
}
