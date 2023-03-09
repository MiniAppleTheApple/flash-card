import Decks from "./Decks"
import Cards from "./Cards"

const MainPage : React.FC<MainpageProps> = ({onClick, decks, selected}) => ( 
  <div>
    <Decks onClick={onClick} decks={decks}/>
    <button>Start</button>
    {
      selected === null ? null : <Cards cards={decks[selected].cards}/>
    }
  </div>
)

export default MainPage