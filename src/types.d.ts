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
}

type StartPageProps = {
  setPage: Dispatch<SetStateAction<"main" | "start">>,
}

type CardsProps = {
  cards: Card[],
  remove: Dispatch<SetStateAction<number>>,
  edit: Dispatch<SetStateAction<number>>,
}
