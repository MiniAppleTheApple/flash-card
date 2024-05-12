import { cardSelectedSwitchDeck, cardSelectedResetForm } from "./card_selected";

function switchDeck(index: number) {
  return cardSelectedSwitchDeck(index)
}

function editDeckSelectedResetForm(selected: EditDeckSelected): EditDeckSelected {
  return {
    ...selected,
    type: "edit_deck",
    name: ""
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
