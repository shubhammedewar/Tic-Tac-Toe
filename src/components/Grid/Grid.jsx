import { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../../helpers/checkWinner";
import './Grid.css'


function Grid({numberOfCards}){
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn,setTurn] = useState(true);  // true => o ,false => x
    const [winner,setWinner] = useState(null);

    function play(index){
        if(turn == true){
            board[index] = 'o';
        }else{
            board[index] = 'x';
        }
        const win = isWinner(board, turn ? 'o':'x');
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""))
    }

    return(
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className="turn-highlight">Winner is {winner}</h1>
                        {/* <button className="reset" onClick={reset}>Reset Game</button> */}
                    </>
                ) 
            }
            <h1 className="turn-highlight">Current turn:{(turn) ? 'o' :'x'}  </h1>
            <button className="reset" onClick={reset}>Reset Game</button>
            <div className="grid">
                {board.map((el,index)=>(
                    <Card gameEnd = {winner ? true : false} key={index} onPlay={play} player={el} index = {index} />)
                 )}
            </div>
        </div>
    )
}

export default Grid;