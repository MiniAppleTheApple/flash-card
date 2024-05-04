import { secondaryButton } from "./utils"

const CardForm: React.FC<any> = ({ onSubmit, textOnChange, answerOnChange }) => {
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <p>Text</p>
      <input onChange={textOnChange} className="py-3 px-5 bg-swamp-green-700"/>
      <p>Answer</p>
      <input onChange={answerOnChange} className="py-3 px-5 bg-swamp-green-700"/>
      <button className={`${secondaryButton} my-6`} role="submit">Submit</button>
    </form>
  )
}

export default CardForm
