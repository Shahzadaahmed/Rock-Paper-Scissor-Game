// All dispatch functions defined here...!

import {
    PLAYER_NAME,
    GAME_ROUNDS,
    SCORE_OF_PLAYER_1,
    SCORE_OF_PLAYER_2,
    TOTAL_ROUNDS,
    RESET_GAME
}
    from
    "../constant/action-type";

// Dispatch function for player name...!
export function getPlayerName(playerName) {
    return dispatch => {
        dispatch({
            type: PLAYER_NAME,
            payload: playerName
        });
    }
}

// Dispatch function for total rounds...!
export function getTotalRounds(rounds) {
    return dispatch => {
        dispatch({
            type: GAME_ROUNDS,
            payload: rounds
        });
    }
}

// Dispatch function for handle player 1 score...!
export function handlePlayer1Score() {
    return dispatch => {
        dispatch({
            type: SCORE_OF_PLAYER_1
        });
    }
}

// Dispatch function for handle player 2 score...!
export function handlePlayer2Score() {
    return dispatch => {
        dispatch({
            type: SCORE_OF_PLAYER_2
        });
    }
}

// Dispatch function for handle total rounds...!
export function handleTotalRounds() {
    return dispatch => {
        dispatch({
            type: TOTAL_ROUNDS
        });
    }
}

// Dispatch function to reset the game...!
export function resetGame() {
    return dispatch => {
        dispatch({
            type: RESET_GAME
        });
    }
}