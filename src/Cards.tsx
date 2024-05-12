import { primaryButton, secondaryButton } from "./utils"

const Cards: React.FC<CardsProps> = ({remove, edit, cards, selected}) => {
  if (cards.length > 0) {
    return (
      <ul>
        {cards.map((x, index) => <li key={index}>
          <div className="text-xl flex justify-between">
            <span className={`mx-4 my-auto ${selected.type === "card" && selected.action.type === "edit" && selected.action.index === index ? "text-timberwolf-50 font-bold" : ""}`}>{x.text} - {x.answer}</span>
            <div>
              <button className={primaryButton} onClick={_e => edit(index)}>Edit</button>
              <button className={secondaryButton} onClick={_e => remove(index)}>Delete</button>
            </div>
          </div>
        </li>)}
      </ul>
    )
  } else {
    return <p>No content on this deck</p>
  }
}

export default Cards
