import { useState } from "react"
import MainPage from "./MainPage"
import StartPage from "./StartPage"

interface Props {}

const App : React.FC<Props> = () => {
  const [page, setPage] = useState<"start" | "main">("main")

  switch (page) {
  case "start":
    return <StartPage setPage={setPage}/>
  case "main":
    return <MainPage setPage={setPage}/>
  default:
    return <div>Which page is this?</div>
  }
}

export default App
