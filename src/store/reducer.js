import { ActionType } from './actions';
import { uniqueCardsArray } from '../const';

const InitialSate = {
    allCards: [...uniqueCardsArray, ...uniqueCardsArray].sort(() => (Math.random() > .5) ? 1 : -1),
    openCards: [],
    closedCards: [],
    score: 0
}

export const reducer = (state = InitialSate, action) => {
    switch (action.type) {
        case ActionType.SET_OPENED_CARDS: {
            return { ...state, openCards: action.payload };
        }
        case ActionType.ADD_CLOSED_CARDS: {
            return { ...state, closedCards: [...state.closedCards, action.payload] }
        }
        case ActionType.RESET_CLOSED_CARDS: {
            return { ...state, closedCards: [] }
        }
        case ActionType.SET_SCORE: {
            return { ...state, score: action.payload }
        }
        case ActionType.INC_SCORE: {
            return { ...state, score: state.score + 1 }
        }
        case ActionType.SET_CARDS: {
            return { ...state, allCards: [...uniqueCardsArray, ...uniqueCardsArray].sort(() => (Math.random() > .5) ? 1 : -1) }
        }
        default:{
            return state;
        }
    }
    
}


