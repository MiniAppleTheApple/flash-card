import Decks from "./Decks"
import Cards from "./Cards"

const MainPage : React.FC<MainpageProps> = ({card, setCard, onClick, onSubmit, decks, selected}) => ( 
  <div>
    <Decks onClick={onClick} decks={decks}/>
    <button>Start</button>
    {
      selected === null ? null : <Cards cards={decks[selected].cards}/>
    }
    <form onSubmit={onSubmit}>
      <label>Text</label>
      <input value={card.text} onChange={e => setCard(card => ({...card, text: e.target.value}))}/>
      <label>Answer</label>
      <input value={card.answer} onChange={e => setcard(card => ({...card, answer: e.target.value}))}/>
      <button role="submit">Submit</button>
    </form>
  </div>
)

export default MainPage