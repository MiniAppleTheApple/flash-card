type NormalState = {
	type: "normal",
	decks: DeckType[],
}

type DeckSelectedState = {
	type: "deck_selected"
	selected: number,
	decks: DeckType[],
	newCard: CardType,
}

type StartState = {
	type: "start"
	cards: CardType[],
}

type State = NormalState | DeckSelectedState | StartState 

type CardType {
	text: string,
	answer: string,
}

type DeckType {
	name: string,
	cards: Card[],
}

type MainPageProps {
  onClick: (index: number) => void,
  cards: Card[],
  selected: number,
  onSubmit: (event: Event) => void,
  setCard: (card: CardType) => void,
  card: CardType, 
  deleteCard: (index: number) => void,
  editCard
}

type CardsProps {
	cards: Card[],
	deleteCard: (index: number) => void
	editCard: (index: number) => void
}
