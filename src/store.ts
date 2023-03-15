import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type StateStore = {
  data: State,
  setNewCardText: (text: string) => void,
  setNewCardAnswer: (answer: string) => void,
}

const useStateStore = create<StateStore>()(set => ({
  data: {
    type: "normal",
    decks: [],
  },
  setNewCardText: text => set(state => ({data: {...state.data, newCard: {...state.data.newCard, text}}})),
  setNewCardAnswer: answer => set(state => ({data: {...state.data, newCard: {...state.data.newCard, answer}}})),
}))