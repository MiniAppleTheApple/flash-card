import { updateByIndex } from "./array"

// TODO rename this functio
function updateDeck(deck: Deck, {action, card}: Selected): Deck {
  const { cards } = deck;
  switch (action.type) {
  case "add":
    return {...deck, cards: [...cards, card]}
  case "edit":
    return {...deck, cards: updateByIndex(cards, action.index, (_e) => card)}
  }
}

export { updateDeck }
