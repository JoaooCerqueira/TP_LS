import React from "react";
import "./word.css";

function Word(props) {
    const {words,word,index,color} = props;
    const used = words[index].used ? "traço" : "";
  return (
    <div>
      <span style={{color: color}} className={used}>{word}</span>
    </div>
  );
}

export default Word;
