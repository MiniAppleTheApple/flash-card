import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MainPage from "./MainPage"
import StartPage from "./StartPage"

import defaultDeck from "./default.json"

interface Props {}

const App : React.FC<Props> = () => {
  const [decks, setDecks] = useState<DeckType>(defaultDeck)
  const [selected, setSelected] = useState<number>(null)
  const [isStarted, setIsStarted] = useState<boolean>(false)

  const start = () => {
    setIsStarted(true)
  }

  const onClick = (index: number) => {
    setSelected(index)
  }

  return (
    isStarted ? (
      <MainPage/>
    ) : (
      <StartPage/>
    )
  )
}

export default App
