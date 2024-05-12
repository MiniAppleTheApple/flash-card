import { newCard } from "./card"

function cardSelectedSwitchDeck(index: number): CardSelected {
  return {
    index,
    type: "card",
    card: newCard(),
    action: {
      type: "add",
    }
  }
}

function cardSelectedResetForm(selected: CardSelected): CardSelected {
  return {
    ...selected,
    card: newCard(),
    action: {
      type: "add",
    }
  }
}

export { cardSelectedSwitchDeck, cardSelectedResetForm }
