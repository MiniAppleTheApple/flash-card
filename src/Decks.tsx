import { primaryButton } from "./utils.js"

const Decks: React.FC<{deckOnClick: (index: number) => void, decks: DeckType[]}> = ({deckOnClick, decks}) => (
  <ul>
    {decks.map(
      (x, index) => 
        <div className={primaryButton}>
          <li onClick={_ => deckOnClick(index)} key={index}>{x.name}</li>
        </div>)}
  </ul>
)
export default Decks
