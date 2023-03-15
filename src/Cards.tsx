const Cards: React.FC<CardsProps> = ({remove, edit, cards}) => (
  <ul>
    {cards.map((x, index) => <li key={index}>
      <div>
        <span>{x.text} - {x.answer}</span>
        <button onClick={e => edit(index)}>edit</button>
        <button onClick={e => remove(index)}>delete</button>
      </div>
    </li>)}
  </ul> 
)

export default Cards
