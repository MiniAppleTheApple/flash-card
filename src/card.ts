import { generateID } from "./utils"

const newCard = (): Card => ({
  text: "",
  answer: "",
  id: generateID(),
})

function isCardEmpty({text, answer}: Card): boolean {
  return text === "" && answer === ""
}

export { newCard, isCardEmpty }
