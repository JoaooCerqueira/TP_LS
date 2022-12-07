import React from "react";
import { useState } from "react";
import "./board.css";
import Cell from "../cell/cell.component";
import Word from "../word/word.component";

export const currentState = [
  "",
  "selected",
  "found",
];

export default function Board(props){
    const {gameStarted,board,selectedLevel,select,handleClick,cells,words,handleMove,handleRelease} = props;  

    const gameClass =
    selectedLevel === "1"
      ? "basic"
      : selectedLevel === "2"
      ? "medium"
      : "advenced";
    
    const hide =  selectedLevel === "0";

    return(
      <div className="flex-container">
        <div style={{display: hide ? 'none' : 'grid' }} className={gameClass}>
          {board.map((cell,index) => (
          <Cell key={cell.key} letter={cell.letter} selected={cell.selected} cells={cells} index={index} handleClick={handleClick} handleMove={handleMove} handleRelease={handleRelease} color={cell.color}/>
          ))}
       </div>
       <div style={{display: hide ? 'none' : 'flow-root' }} className={"words"}>
        {
        words.map((palavra,index) => (
          <Word words={words} word={palavra.word} index={index} color={palavra.color} />
          ))}
       </div>
      </div>
   
    );
}