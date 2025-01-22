import ticTacImg from "/game-logo.png";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <>
      <header>
        <img src={ticTacImg} alt="logo image" />

        <h1>Tic Tac Toe</h1>
      </header>
      <GameBoard />
      
    </>
  );
}

export default App;
