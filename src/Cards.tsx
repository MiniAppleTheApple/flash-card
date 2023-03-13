const Cards: React.FC<CardsProps> = ({deleteCard, editCard, cards}) => (
  <ul>
    {cards.map((x, index) => <li key={index}>
      <div>
        <span>{x.text} - {x.answer}</span>
        <button onClick={editCard}>edit</button>
        <button onClick={deleteCard}>delete</button>
      </div>
    </li>)}
  </ul> 
)

export default Cards
