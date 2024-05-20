import { newCard } from "./card"

function switchDeck(index: number): Selected {
  return {
    index,
    type: "card",
    card: newCard(),
    action: {
      type: "add",
    }
  }
}

function resetForm(selected: Selected): Selected {
  switch (selected.type) {
  case "card":
    return {
      ...selected,
      card: newCard(),
      action: {
        type: "add",
      }
    }
  case "edit_deck":
    return {
      ...selected,
      type: "edit_deck",
      name: ""
    }
  }
}

function newEditDeckSelected(index: number): Selected {
  return {
    index,
    type: "edit_deck",
    name: "",
  }
}

export { switchDeck, resetForm, newEditDeckSelected }
