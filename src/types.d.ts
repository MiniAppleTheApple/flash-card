interface Card {
	text: string,
	answer: string,
}

interface DeckType {
	name: string,
	cards: Card[],
}

interface MainPageProps {
  onClick: (index: number) => void,
  cards: Card[],
  selected: number,
}