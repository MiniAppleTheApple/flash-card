type Page = "start" | "main" 

type AddCard = {
	type: "add",
	card: CardType,
}

type EditCard = {
	type: "edit",
	index: number,
}

type CardModification = AddCard | EditCard

type Selected = {
	index: number,
	action: CardModification, 
}

type CardType {
	text: string,
	answer: string,
}

type DeckType {
	name: string,
	cards: Card[],
}

type MainPageProps = {
  setPage: (f: (page: Page) => Page) => void 
}

type StartPageProps = {
  setPage: (f: (page: Page) => Page) => void 
}

type CardsProps = {
	cards: Card[],
	remove: (index: number) => void,
	edit: (index: number) => void,
}
