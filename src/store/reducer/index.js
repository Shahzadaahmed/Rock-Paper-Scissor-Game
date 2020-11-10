// Index.js file in reducer folder...!

import { combineReducers } from "redux";
import playerName from "./case";
import rounds from "./case";
import player1Score from "./case";
import player2Score from "./case";

export default combineReducers({
    playerName: playerName,
    rounds: rounds,
    player1Score: player1Score,
    player2Score: player2Score
});