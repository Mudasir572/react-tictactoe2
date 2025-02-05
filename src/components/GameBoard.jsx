import { useState } from "react";
import Player from "./Player";
import GameOver from "./GameOver";
import { WINNING_COMBINATIONS } from "../Winning-Combination";

const ourPlayers = { X: "Player 1", O: "Player 2" };

const gameboardStatus = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [players, setPlayers] = useState(ourPlayers);
  const [gameBoardTracking, setGameBoardTracking] = useState(gameboardStatus);

  //this is to change players turns
  const [turns, setTurns] = useState("X");
  
  let draw = false;

  // it is to calculate number of turns
  let [turnsDone,setTurnsDone] = useState(0);


  function deriveWinner() {
    let winner;

    for (const winnerCombination of WINNING_COMBINATIONS) {
      let firstBoxSymbol =
        gameBoardTracking[winnerCombination[0].row][
          winnerCombination[0].column
        ];
      let secondBoxSymbol =
        gameBoardTracking[winnerCombination[1].row][
          winnerCombination[1].column
        ];
      let thirdBoxSymbol =
        gameBoardTracking[winnerCombination[2].row][
          winnerCombination[2].column
        ];

      if (
        firstBoxSymbol &&
        firstBoxSymbol == secondBoxSymbol &&
        firstBoxSymbol == thirdBoxSymbol
      ) {
        winner = players[firstBoxSymbol];
      }
    }
    return winner;
   
  }

  console.log(turns);
  console.log(gameBoardTracking);

  console.log(players);
  function changePlayerNames(symbol, name) {
    setPlayers((prevNames) => {
      prevNames[symbol] = name;
      return {
        ...prevNames,
      };
    });
  }

  function restart(){
    setGameBoardTracking(
      [
        [null,null,null],
        [null,null,null],
        [null,null,null]
      ]
    ),
    setTurns('X');
    setTurnsDone(0)
    
  }

  function handleButtonClick(rowIndex, colIndex) {
    setTurnsDone((prevtur)=>{
          return prevtur + 1;
    })
    setGameBoardTracking((prevGameBoardTracking) => {
      prevGameBoardTracking[rowIndex][colIndex] = turns;
      return [...prevGameBoardTracking];
    });

    if (turns == "X") {
      setTurns("O");
    } else {
      setTurns("X");
    }
    
    //  console.log(deriveWinner());
  }
  
  
 let winner = deriveWinner();
 console.log(turnsDone)

 if(turnsDone == 9 && !winner){
   draw = true;
 }

  // if(isEditing){
  //     setIsEditing(false)

  // }else{
  //     setIsEditing(true)
  // }

  return (
    <>
    
    
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player
          active={turns == "X"}
          symbol="X"
          name="Player 1"
          onChangeName={changePlayerNames}
        />
        <Player
          active={turns == "O"}
          symbol="O"
          name="Player 2"
          onChangeName={changePlayerNames}
        />
      </ol>
      {(winner || draw) && <GameOver winner={winner} reset={restart} />}
      <ol id="game-board">
        {gameBoardTracking.map((array, rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol>
                {array.map((symbol, colIndex) => {
                  return (
                    <li key={colIndex}>
                      <button
                        onClick={() => handleButtonClick(rowIndex, colIndex)}
                        disabled={symbol !== null}
                      >
                        {symbol}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}


      </ol>
    </div>
    </>
  );
}
