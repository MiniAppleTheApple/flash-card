import { secondaryButton } from "./utils"

const CardForm: React.FC<any> = ({card, onSubmit, onTextChange, onAnswerChange}) => (
  <form className="flex flex-col" onSubmit={onSubmit}>
    <p>Text</p>
    <input
      className="py-3 px-5 bg-swamp-green-700"
      value={card.text}
      onChange={onTextChange}/>
    <p>Answer</p>
    <input
      className="py-3 px-5 bg-swamp-green-700"
      value={card.answer}
      onChange={onAnswerChange}/>
    <button className={`${secondaryButton} my-6`} role="submit">Submit</button>
  </form>
)

export default CardForm