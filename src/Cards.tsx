import { primaryButton, secondaryButton } from "./utils"

const Cards: React.FC<CardsProps> = ({remove, edit, cards}) => (
  <ul>
    {cards.map((x, index) => <li key={index}>
      <div className="text-xl flex justify-between">
        <span className="text-canary-500 mx-4 my-auto">{x.text} - {x.answer}</span>
        <div>
          <button className={primaryButton} onClick={e => edit(index)}>Edit</button>
          <button className={secondaryButton} onClick={e => remove(index)}>Delete</button>
        </div>
      </div>
    </li>)}
  </ul> 
)

export default Cards
