const CardForm: React.FC<any> = ({card, onSubmit, onTextChange, onAnswerChange}) => (
  <form onSubmit={onSubmit}>
    <label>Text</label>
    <input
      value={card.text}
      onChange={onTextChange}/>
    <label>Answer</label>
    <input
      value={card.answer}
      onChange={onAnswerChange}/>
    <button role="submit">Submit</button>
  </form>
)

export default CardForm