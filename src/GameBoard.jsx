import { useState } from "react";
import GameCell from "./GameCell";
import "./GameBoard.css"
import Reset from "./Reset"

export default function GameBoard(){
    let [states, setStates] = useState(new Array(9).fill(0));
    let [nextTurn, setNextTurn] = useState(0);
    let winner = null;
    const check = (idx) =>{
        if (states[idx] === 0) {
            setStates(prevState => {
                return prevState.map((value,i)=>{
                    if (idx === i){
                        // state 0 - none, 1 - X, 2 - O
                        if (nextTurn % 2 === 0) value = 1;
                        else if (nextTurn % 2 === 1) value = 2;
                    }
                    return value;
                })
            })
            setNextTurn((prevTurn)=> {return prevTurn+=1;})
        }
    };
    const isWinner = () => {
        const winLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for (let i = 0; i < winLines.length; i++){
            const [a,b,c] = winLines[i];
            if (states[a] === states[c] && states[b] === states[c] && states[a] !== 0){
                return states[a];
            }
        }
        return null;
    }
    const reset = () =>{
        winner = null;
        nextTurn = 0;
        setStates(()=>{
            return new Array(9).fill(0)
        })
    }
    winner = isWinner();
    if (winner){
        return (<><h1>{winner === 2 ? winner = "Cats" : winner = "Dogs"} Won!!!</h1><Reset reset={reset}/></>); //players name
    }
    else {
        return (
            <>
                <div className="GameBoard">
                    {states.map((value,i)=>{
                        return (<GameCell key={i} idx={i} func={() => check(i)} state={value}/>);
                    })}
                </div>
                <Reset reset={reset}/>
            </>
        );                 
    }
}