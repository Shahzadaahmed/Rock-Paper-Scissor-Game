// Rock Paper Scissor Game using React JS + Redux JS...!
// Init_Game component...!

import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPlayerName, getTotalRounds } from "../store/action/dispatch-functions";
import swal from 'sweetalert';

const Init_Game = () => {

    // Handeling states here...!
    const [player, setPlayer] = useState('');
    const [totalRounds, setTotalRounds] = useState('');

    const history = useHistory();

    // Handeling redux states here...!
    let dispatch = useDispatch();

    useEffect(() => {
        swal("Game Instructions!", "* The game is between You and Computer.\n* You need to select any choice to score before the time's Up!\n* If you did not select any option and time's Up, Then you will lose the game.\n* If you lose the game or You need to play again, Then you need to reset the game!");
    }, []);

    // Function to play game...!
    const playGame = () => {
        if (player != 0 && totalRounds >= 3 && totalRounds <= 10) {
            dispatch(getPlayerName(player));
            dispatch(getTotalRounds(totalRounds));
            setPlayer('');
            setTotalRounds('');
            history.push("/game");
        }

        else {
            swal({
                title: "Something went wrong!",
                text: "You need to fill all fields!\nNumber of rounds should not be less than 3 or greater than 10.",
                icon: "error",
                button: "Try Again!",
            });
            setPlayer('');
            setTotalRounds('');
        }
    }

    return (
        // Main Container
        <div className="container" id="init-game-container">

            {/* Header */}
            <h1 className="header"> Rock Paper Scissor Game </h1>

            {/* Form Fields */}
            <div className="input-group mb-3" id="Input-container">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3"> Player Name: </span>
                </div>
                <input
                    type="text"
                    autoFocus
                    className="form-control"
                    placeholder="Player Name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"
                    value={player}
                    onChange={(event) => { setPlayer(event.target.value) }}
                />
            </div>

            <div className="input-group mb-3" id="Input-container">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3"> Number of Rounds: </span>
                </div>
                <input
                    type="number"
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"
                    value={totalRounds}
                    onChange={(event) => { setTotalRounds(event.target.value) }}
                />
            </div>

            {/* Play game button */}
            <button className="btn btn-primary" id="btn" onClick={playGame}> Play Game </button>
        </div>

    );
}

export default Init_Game;