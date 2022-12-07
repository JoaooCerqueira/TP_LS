import React from "react";
import { useState } from "react";
import "./cell.css";

const handleHover = () => {
    console.log("mouse over");
}

export default function Cell(props){
    let {letter,cells,selected,index,handleClick,handleMove,handleRelease,color} = props;

    const gameClass = cells[index] === "selected" ? "click" : cells[index] === "found" ? "found" : "tile";

    return(<div style={{background: color}} onMouseDown={() => handleClick(index)} onMouseEnter={() => handleMove(index)} onMouseUp={() => handleRelease()}className={gameClass}>{letter}</div>);
}