// Rock Paper Scissor Game using React JS + Redux JS...!
// Rock_Paper_Scissor_Game Component...!

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handlePlayer1Score, handlePlayer2Score, handleTotalRounds, resetGame } from "../store/action/dispatch-functions";
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';

// Declaring global variable for handle timer...!
let timeInterval;

const Rock_Paper_Scissor_Game = () => {

    const history = useHistory();

    // Handeling redux here...!
    const getStates = useSelector(({ playerName }) => { return playerName });
    const { playerName, rounds, player1Score, player2Score } = getStates;
    const dispatch = useDispatch();

    // Handeling states here...!
    const [timer, setTimer] = useState(10);
    const [hasGameSterted, setHasGameSterted] = useState(false);
    const [result, setResult] = useState(undefined);
    const [gameWinner, setGameWinner] = useState();

    // Function to update timer...!
    const updateTimer = () => {
        let timerClone = timer;

        timeInterval = setInterval(() => {
            if (timerClone > 0) {
                timerClone--;
                setTimer(timerClone);
            }

            else {
                clearInterval(timeInterval);
                // console.log("Time Up!!!");
                setHasGameSterted(true);
                swal({
                    title: "TIME OVER! 😠",
                    text: "You lost the game! Now You need to reset the game, Otherwise you cannot play any more!!!",
                    icon: "warning",
                    button: "Ok",
                });
            }
        }, 1000);
    }

    // This hook will run only 1 time after component rendered...!
    useEffect(() => {
        let selectionHeader = document.getElementById("selection-header");
        let totalRoundsArea = document.getElementById("total-rounds");
        // console.log(rounds);

        if (rounds === 1) {
            totalRoundsArea.innerHTML = "Final Round";
        }

        if (rounds > 0) {
            updateTimer();
        }

        else if (rounds <= 0) {
            clearInterval(timeInterval);
            setHasGameSterted(true);
            setResult('Game Over!!!');
            matchWon();
            selectionHeader.style.display = "none";
        }
    }, [rounds]);

    /***** This function will work on user click *****/
    // Function to competition between player and CPU...!
    const startGame = (event) => {
        clearInterval(timeInterval);

        // Condition if game started...!
        if (!hasGameSterted) {
            let userSelection = event.target.id;
            let randomNumberForCPU = Math.floor(Math.random() * 3) + 1;
            let cpuSelection;

            // Condition for CPU Selections...!
            if (randomNumberForCPU === 1) {
                cpuSelection = "Rock";
            }

            else if (randomNumberForCPU === 2) {
                cpuSelection = "Paper";
            }

            else if (randomNumberForCPU === 3) {
                cpuSelection = "Scissor";
            }

            // CONDITIONS FOR MATCH. Start...!
            // Step # 01 : Conditions if game draw...!
            if (
                (userSelection === "Rock" && cpuSelection === "Rock") ||
                (userSelection === "Paper" && cpuSelection === "Paper") ||
                (userSelection === "Scissor" && cpuSelection === "Scissor")
            ) {
                swal({
                    title: "Game Draw! 😕",
                    text: `Computer Chose ${cpuSelection}`,
                    icon: "warning",
                    button: "Go to Next Turn!",
                });
            }

            // Step # 02 : Conditions if user won the game and CPU lost the game...!
            else if (
                (userSelection === "Rock" && cpuSelection === "Scissor") ||
                (userSelection === "Paper" && cpuSelection === "Rock") ||
                (userSelection === "Scissor" && cpuSelection === "Paper")
            ) {
                swal({
                    title: `${userSelection} Smash ${cpuSelection}! You Win! 🥰`,
                    text: `Computer Chose ${cpuSelection}`,
                    icon: "success",
                    button: "Go to Next Turn!",
                });
                dispatch(handlePlayer1Score());
            }

            // Step # 03 : Conditions if computer won the match and user lost the match...!
            else if (
                (cpuSelection === "Rock" && userSelection === "Scissor") ||
                (cpuSelection === "Paper" && userSelection === "Rock") ||
                (cpuSelection === "Scissor" && userSelection === "Paper")
            ) {
                swal({
                    title: `${cpuSelection} Beat ${userSelection}! You Lost! 😭`,
                    text: `Computer Chose ${cpuSelection}`,
                    icon: "error",
                    button: "Go to Next Turn!",
                });
                dispatch(handlePlayer2Score());
            }

            setHasGameSterted(true);
            resetTimer();
            // console.log(userSelection, cpuSelection);
        }
    }
    /***** END *****/

    // Function to re-set timer...!
    const resetTimer = () => {
        dispatch(handleTotalRounds());
        setTimer(10);
        setHasGameSterted(false);
    }

    // Function to check the winner of the game...!
    const matchWon = () => {
        let playerScore = player1Score;
        let computerScore = player2Score;

        if (playerScore > computerScore) {
            setGameWinner(`${playerName} Won the Game ♛`);
        }

        else if (computerScore > playerScore) {
            setGameWinner("Computer Won the Game ♛");
        }

        else if (playerScore === computerScore) {
            setGameWinner("Game Drawn!!!");
        }
    }

    // Function to re-start the game...!
    const restartGame = () => {
        dispatch(resetGame());
        console.clear();
        history.push('/');
    }

    return (
        // Main Container
        <div className="container" id="game-container">

            {/* Header */}
            <h1 className="game-header"> Rock Paper Scissor Game </h1>

            {/* Timer Header */}
            <h1 className="show-timer"> {`Time Left: ${timer}`} </h1>

            {/* Players container */}
            <div className="players-container">
                <div className="player1"> {`${playerName}: ${player1Score}`} </div>
                <div className="rounds" id="total-rounds"> {`Rounds # ${rounds}`} </div>
                <div className="player2"> {`Computer: ${player2Score}`} </div>
            </div>

            {/* Winner Container */}
            <h3 className="winner"> {gameWinner} </h3>

            {/* Game Over Area */}
            <h3 className="game-over"> {result} </h3>

            {/* Selection Header */}
            <h3 className="user-selection" id="selection-header"> Make Your Selection </h3>

            <hr />

            {/* Choices Option */}
            <div id="choices">
                <i id="Rock" className="fas fa-hand-rock fa-10x" title="Rock" onClick={startGame}></i>
                <i id="Paper" className="fas fa-hand-paper fa-10x" title="Paper" onClick={startGame}></i>
                <i id="Scissor" className="fas fa-hand-scissors fa-10x" title="Scissor" onClick={startGame}></i>
            </div>

            <hr />

            {/* Reset Button */}
            <div className="btn-container">
                <button className="btn btn-primary" id="btn" onClick={restartGame}> Reset Game </button>
            </div>
        </div>
    );
}

export default Rock_Paper_Scissor_Game;

// Game completed successfully...!