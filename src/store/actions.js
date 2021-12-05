export const ActionType = {
    SET_OPENED_CARDS: 'SET_OPENED_CARDS',
    ADD_CLOSED_CARDS: 'ADD_CLOSED_CARDS',
    RESET_CLOSED_CARDS: 'RESET_CLOSED_CARDS',
    SET_SCORE: 'SET_SCORE',
    INC_SCORE: 'INC_SCORE',
    SET_CARDS: 'SET_CARDS'
};

export const ActionCreator = {
    setOpenedCards: (cards) => ({
        type: ActionType.SET_OPENED_CARDS,
        payload: cards
    }),
    addClosedCards: (type) => ({
        type: ActionType.ADD_CLOSED_CARDS,
        payload: type
    }),
    resetClosedCards: () => ({
        type: ActionType.RESET_CLOSED_CARDS
    }),
    setScore: (score) => ({
        type: ActionType.SET_SCORE,
        payload: score
    }),
    incScore: () => ({
        type: ActionType.INC_SCORE
    }),
    resetCards: () => ({
        type: ActionType.SET_CARDS
    })
}