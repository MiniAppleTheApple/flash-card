import { atom } from "recoil"

const decksState = atom({
  key: "decks",
  default: [] as Deck[],
})

export { decksState }

