import "./GameCell.css"
export default function GameCell({func,idx,state}) {
    const turnSet = (state) => {
        if (state === 1){
            return "X"
        }
        else if (state === 2){
            return "O"
        }
        else {
            return ""
        }
    }
    let nextTurn = turnSet(state);
    return (
        <button className="GameCell" onClick={()=>func(idx)}>{nextTurn}</button>
    );
}