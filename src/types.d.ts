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

type CardsModification = AddCard | EditCard

type Selected = {
	index: number,
	card: Card,
	action: CardModification, 
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
