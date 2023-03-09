const Decks: React.FC<{onClick: (index: number) => void, decks: DeckType[]}> = ({onClick, decks}) => (
  <ul>
    {decks.map((x, index) => <li onClick={_ => onClick(index)} key={index}>{x.name}</li>)}
  </ul>
)
export default Decks