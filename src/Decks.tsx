import { primaryButton, secondaryButton } from "./utils.js"

const Decks: React.FC<{removeDeck: (deckIndex: number) => void, deckOnClick: (index: number) => void, decks: Deck[]}> = ({removeDeck, deckOnClick, decks}) => (
  <ul>
    {decks.map(
      (x, index) => 
        <li key={index} className={`${primaryButton} flex`}>
          <p className="flex-1 text-2xl" onClick={_ => deckOnClick(index)} key={index}>{x.name}</p>
          <button className={`${secondaryButton} ml-auto`}>Edit</button>
          <button className={secondaryButton} onClick={(_e) => removeDeck(index)}>Delete</button>
        </li>)}
  </ul>
)
export default Decks
