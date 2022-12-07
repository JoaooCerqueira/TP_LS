const vertical = (board,pos) => {
    let phrase = "";
    for(let i = pos[0]; i <= pos[1] ;i += 20){
        phrase += board[i + 20].letter ;
    }
  
    if(phrase === "aaa"){
      for(let i = pos[0]; i <= pos[1] ;i += 20){
        cells[i] = "found";
    }
    }
    setCells([...cells]);
}

export default vertical;
