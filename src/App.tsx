import { useState } from "react"
import MainPage from "./MainPage"
import StartPage from "./StartPage"

const App : React.FC<{}> = () => {
  const [page, setPage] = useState<Page>({type: "main", decks: []})

  switch (page.type) {
  case "start":
    return <StartPage decks={page.decks} index={page.index} setPage={setPage}/>
  case "main":
    return <MainPage decks={page.decks} setPage={setPage}/>
  default:
    return <div>Which page is this?</div>
  }
}

export default App
