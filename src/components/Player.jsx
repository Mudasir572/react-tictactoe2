import { useState } from "react";


export default function Player({symbol,name,onChangeName}){
    const [playerName,setPlayerName] = useState(name)
    const [isEditing,setIsEditing] = useState(false); 
    
    function editPlayer(){
        setIsEditing((prevState)=>{
             if(prevState){
                return false;
             }else{
                return true;
             }
        })
       if(isEditing){
        onChangeName(symbol,playerName)
       }
        
    }

      function  handleChange(event){
        setPlayerName(event.target.value)
      }

    return(
        <li className="active">
        <span className="player">
            {isEditing ? <input required value={playerName} onChange={handleChange}  /> :  <span className="player-name">{playerName}</span>}
         
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editPlayer}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    )
}