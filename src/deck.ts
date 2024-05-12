import { updateByIndex } from "./array"

// TODO rename this functio
function updateDeck(deck: Deck, selected: Selected): Deck {
  const { cards } = deck;
  switch (selected.type) {
  case "card":
    {
      const { action, card } = selected
      switch (action.type) {
      case "add":
        return {...deck, cards: [...cards, card]}
      case "edit":
        return {...deck, cards: updateByIndex(cards, action.index, (_e) => card)}
      }
    }
  case "edit_deck":
    {
      const { name } = selected
      return {...deck, name: name}
    }
  }
  
}

export { updateDeck }
