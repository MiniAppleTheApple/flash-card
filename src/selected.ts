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

function editDeckSelectedResetForm(selected: EditDeckSelected): EditDeckSelected {
  return {
    ...selected,
    type: "edit_deck",
    name: ""
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

function resetForm(selected: Selected): Selected {
  switch (selected.type) {
  case "card":
    return cardSelectedResetForm(selected)
  case "edit_deck":
    return editDeckSelectedResetForm(selected)  
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
