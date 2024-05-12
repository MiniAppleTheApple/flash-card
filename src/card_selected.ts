import { newCard } from "./card"

function cardSelectedResetForm(selected: CardSelected): CardSelected {
  return {
    ...selected,
    card: newCard(),
    action: {
      type: "add",
    }
  }
}

export { cardSelectedResetForm }
