import { newCard } from "./card"

function switchDeck(index: number): Selected {
  return {
    index,
    card: newCard(),
    action: {
      type: "add",
    }
  }
}

function resetForm(selected: Selected): Selected {
  return {
    ...selected,
    card: newCard(),
    action: {
      type: "add",
    }
  }
}

export { switchDeck, resetForm }
