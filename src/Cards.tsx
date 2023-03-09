const Cards: React.FC<{cards: Card[]}> = ({cards}) => (
  <ul>
    {cards.map((x, index) => <li key={index}>{x.text} - {x.answer}</li>)}	
  </ul> 
)

export default Cards
