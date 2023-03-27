type Page = {
	type: "start",
	decks: DeckType[],
	index: number, 
} | {
	type: "main",
	decks: DeckType[],
}

type AddCard = {
	type: "add",
	card: CardType,
}

type EditCard = {
	type: "edit",
	index: number,
}

type CardsModification = AddCard | EditCard

type Selected = {
	index: number,
	card: CardType,
	action: CardModification, 
}

type CardType = {
  text: string,
  answer: string,
}

type DeckType = {
  name: string,
  cards: Card[],
}

type MainPageProps = {
  setPage: Dispatch<SetStateAction<"main" | "start">>,
  decks: DeckType[],
}

type StartPageProps = {
  setPage: Dispatch<SetStateAction<"main" | "start">>,
  index: number,
  decks: DeckType[],
}

type CardsProps = {
  cards: Card[],
  remove: Dispatch<SetStateAction<number>>,
  edit: Dispatch<SetStateAction<number>>,
}
