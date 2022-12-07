import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import "./assets/styles/App.css";
import {handleReset} from "./components/board/board.component"

import {
  ControlPanel,
  Footer,
  Header,
  GamePanel,
  GameOverModal,
  Board
} from "./components";

import { TIMEOUTGAME,PALAVRAS } from "./constants";
import { logic, sortArray, sortWords } from "./helpers";
import useModal from './components/edit-words-modal/use-modal';
import EditWordsModal from './components/edit-words-modal/edit-words-modal';  

let timerId = undefined;

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [selected,setSelected] = useState(false);
  const [board, setBoard] = useState([]);
  const [cells,setCells] = useState(Array(board.length).fill(""));
  const [words,setWords] = useState([]);
  const [timer, setTimer] = useState(TIMEOUTGAME);
  const [points,setPoints] = useState(0);

  const {isShowing, toggle} = useModal(); 
  
  const [pal, setPal] = useState(PALAVRAS);

  const clear = () => {
    handleReset();
    for (let i = 0; i < words.length; i++) 
      words[i].used = false;
      for (let i = 0; i < board.length; i++) 
        board[i].color = "";
    setCells([...words]);
    setPoints(0);
  }

  const handleSelection = () => {
    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
      clear();
    } else {
      console.log("Inicia Jogo");
      setGameStarted(true);
    }
  };

  const handleWordsChange = (pals) =>{
    setPal(pals);

  };


  const handleGameStart = () => {
    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
      clear();
    } else {
      console.log("Inicia Jogo");
      setGameStarted(true);
    }
  };

  const handleClick = (index) => {
    if(gameStarted){
      setSelected(true);
      cells[index] = "selected";
    }
  };

  const handleReset = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i] = "";
    }
    setCells([...cells]);
  }

  const handleMove = (index) => {
    if (gameStarted) {
      if(selected){
        cells[index] = "selected";
      }
    }
  };

  const handleRelease = () => {
    if (gameStarted) {
      setSelected(false);
      let totalPoints = points;
      if(!logic(cells,board,words)){
        totalPoints -= 5;
        setPoints(points - 5);
      } else {
        totalPoints += 10;
        setPoints(points + 10);
      }

      setCells([...cells]);
      for (let i = 0; i < board.length; i++) {
        if(cells[i] === "selected"){
          cells[i] = "";
        }
      }
      let count = 0;
      for (let i = 0; i < words.length; i++) {
          if(words[i].used == true){
            count++;
          } 
      }
      if(count === words.length || totalPoints < 0){
        handleSelection();
      }
      setCells([...cells]);
    }
  };

  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);

    let amount;
    let size;
    let t;
    switch (value) {
      // Level: Beginner
      case '1':  
      amount = 3;
      size = 15;
      t = 50;
        break;
      // Level: Intermediate
      case '2':
        amount = 9;
        size = 20;
        t = 80;
        break;
      // Level: Advanced
      case '3':
        amount = 11;
        size = 25;
        t = 90;
        break;
      default:
        amount = 0;
        size = 0;
        break;
    }
    let words = sortWords(amount,PALAVRAS);
    setWords(words);
    setBoard(sortArray(size,words));
    setTimer(t);
  };

  useEffect(() => {
    if (gameStarted) {
    let nextTimer;
    timerId = setInterval(() => {
      setTimer((previousState) => {
      nextTimer = previousState - 1;
      return nextTimer;
    });
      if (nextTimer === 0) {
      setGameStarted(false);
      clear();
      }
    }, 1000);
    } else if (timer !== TIMEOUTGAME) {
      setTimer(TIMEOUTGAME);
    }
     return () => {
      if (timerId) {
      clearInterval(timerId);
      }
    };
    }, [gameStarted]);

  return (
    <div id="container">
      <Header />
      <main className="main-content">
      <ControlPanel
          gameStarted={gameStarted}
          onGameStart={handleGameStart}
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
          timer={timer}
          open={toggle}
          points={points}
      />
      <Board gameStarted={gameStarted} board={board} selectedLevel={selectedLevel}  handleClick={handleClick} cells={cells} words={words} handleMove={handleMove} handleRelease={handleRelease}/>
      <EditWordsModal 
          changeWords={handleWordsChange}
          words={words}
          isShowing={isShowing}
          hide={toggle}
          palavras={pal}
          />
          </main>
      <Footer />
    </div>
  );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida 
// export default function App() {

 /**/