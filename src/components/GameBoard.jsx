import { useState } from "react";
import Player from "./Player";

const ourPlayers = { X: "Player 1", O: "Player 2" };

const gameboardStatus = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [players, setPlayers] = useState(ourPlayers);
  const [gameBoardTracking, setGameBoardTracking] = useState(gameboardStatus);

  console.log(players);
  function changePlayerNames(symbol, name) {
    setPlayers((prevNames) => {
      prevNames[symbol] = name;
      return {
        ...prevNames,
      };
    });
  }

  // if(isEditing){
  //     setIsEditing(false)

  // }else{
  //     setIsEditing(true)
  // }

  return (
    <div id="game-container">
      <ol id="players">
        <Player symbol="X" name="Player 1" onChangeName={changePlayerNames} />
        <Player symbol="O" name="Player 2" onChangeName={changePlayerNames} />
      </ol>

      <ol id="game-board">
        {gameBoardTracking.map((array,rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol>
                {array.map((symbol,colIndex) => {
                  return (
                    <li key={colIndex}>
                      <button>{symbol}</button>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}

        {/* <li>
          <ol>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
          </ol>
        </li>
        <li>
          <ol>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
          </ol>
        </li>
        <li>
          <ol>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
            <li>
              <button></button>
            </li>
          </ol>
        </li> */}
      </ol>
    </div>
  );
}
