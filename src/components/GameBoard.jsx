import { useState } from "react"

const ourPlayers = {X: "Player 1",O: "Player 2"}

export default function GameBoard(){
const [players,setPlayers] = useState(ourPlayers);
const [isEditing,setIsEditing] = useState(null); 


 function editPlayer(player){
    setIsEditing((prevState)=>{
         if(player === prevState){
            return false;
         }else{
            return true;
         }
    })
    // if(isEditing){
    //     setIsEditing(false)

    // }else{
    //     setIsEditing(true)
    // }
 }


    return(
<div id="game-container">
        <ol id="players">
          <li className="active">
            <span className="player">
                {isEditing ? <input required value={players.X} /> :  <span className="player-name">{players.X}</span>}
             
              <span className="player-symbol">X</span>
            </span>
            <button onClick={()=>editPlayer(X)}>Edit</button>
          </li>
          <li className="active">
            <span className="player">
            {isEditing ? <input required value={players.O} /> :  <span className="player-name">{players.O}</span>}
              <span className="player-symbol">O</span>
            </span>
            <button onClick={()=>editPlayer(O)}>Edit</button>
          </li>
        </ol>

        <ol id="game-board">
          <li>
            <ol>
              <li><button></button></li>
              <li><button></button></li>
              <li><button></button></li>
           
            </ol>
          </li>
          <li>
            <ol>
              <li><button></button></li>
              <li><button></button></li>
              <li><button></button></li>
           
            </ol>
          </li>
          <li>
            <ol>
              <li><button></button></li>
              <li><button></button></li>
              <li><button></button></li>
           
            </ol>
          </li>
          
         
        </ol>
      </div>
    )
}



