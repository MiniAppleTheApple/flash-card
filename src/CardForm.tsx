import { secondaryButton } from "./utils"

const CardForm: React.FC<any> = ({ card, onSubmit, onTextChange, onAnswerChange }) => {
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <p>Text</p>
      <input value={card.text} onChange={onTextChange} className="py-3 px-5 bg-swamp-green-700"/>
      <p>Answer</p>
      <input value={card.answer} onChange={onAnswerChange} className="py-3 px-5 bg-swamp-green-700"/>
      <button className={`${secondaryButton} my-6`} role="submit">Submit</button>
    </form>
  )
}

export default CardForm
