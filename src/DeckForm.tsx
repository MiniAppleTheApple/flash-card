import { secondaryButton } from "./utils"

const DeckForm: React.FC<any> = ({deck, onSubmit, onTextChange, onAnswerChange}) => (
  <form className="flex flex-col" onSubmit={onSubmit}>
    <p>Name</p>
    <input
      className="py-3 px-5 bg-swamp-green-700"
      value={deck.name}
      onChange={onTextChange}/>
    </form>
)

export default DeckForm 
