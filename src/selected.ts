import { newCard } from "./card"

function switchDeck(selected: Selected, deckIndex: number): Selected {
  return {
    index: deckIndex,
    card: newCard(),
    action: {
      type: "add",
    }
  }
}

function resetForm(selected: Selected): Selected {
  return (selected === null ? selected : {
    ...selected,
    card: newCard(),
    action: {
      type: "add",
    }
  })
}

export { switchDeck, resetForm }
