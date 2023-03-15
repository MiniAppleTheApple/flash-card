const Decks: React.FC<{deckOnClick: (index: number) => void, decks: DeckType[]}> = ({deckOnClick, decks}) => (
  <ul>
    {decks.map((x, index) => <li onClick={_ => deckOnClick(index)} key={index}>{x.name}</li>)}
  </ul>
)
export default Decks
