// All redux js cases defined here...!

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

const INIT_STATE = {
    playerName: "",
    rounds: 0,
    player1Score: 0,
    player2Score: 0
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case RESET_GAME:
            return {
                ...state,
                playerName: "",
                rounds: 0,
                player1Score: 0,
                player2Score: 0
            }

        case TOTAL_ROUNDS:
            let totalRoundsClone = state.rounds;
            totalRoundsClone--;
            return {
                ...state,
                rounds: totalRoundsClone
            }

        case SCORE_OF_PLAYER_2:
            let player2ScoreClone = state.player2Score;
            player2ScoreClone = player2ScoreClone + 1;
            return {
                ...state,
                player2Score: player2ScoreClone
            }

        case SCORE_OF_PLAYER_1:
            let player1ScoreClone = state.player1Score;
            player1ScoreClone++;
            return {
                ...state,
                player1Score: player1ScoreClone
            }

        case GAME_ROUNDS:
            return {
                ...state,
                rounds: action.payload
            }

        case PLAYER_NAME:
            return {
                ...state,
                playerName: action.payload
            }

        default:
            return state;
    }
}