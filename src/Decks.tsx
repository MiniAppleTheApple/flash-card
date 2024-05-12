import { primaryButton, secondaryButton } from "./utils.js"

const Decks: React.FC<{removeDeck: (deckIndex: number) => void, deckOnEdit: (index: number) => void, deckOnClick: (index: number) => void, decks: Deck[]}> = ({removeDeck, deckOnEdit, deckOnClick, decks}) => (
  <ul>
    {decks.map(
      (x, index) => 
        <li key={index}  className="rounded-lg bg-lunar-green-700 p-4 flex hover:bg-lunar-green-900 transition-colors my-2 cursor-pointer hover:text-lunar-green-700">
          <p className="flex-1 text-2xl font-bold" onClick={_e => deckOnClick(index)}>{x.name}</p>
          <button className={`${primaryButton} ml-auto`} onClick={_e => deckOnEdit(index)}>Edit</button>
          <button className={secondaryButton} onClick={_e => removeDeck(index)}>Delete</button>
        </li>)}
  </ul>
)
export default Decks
