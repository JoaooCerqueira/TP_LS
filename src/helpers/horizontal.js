const horizontal = (cells,board,pos,words) => {
    let phrase = "";
    for(let i = pos[0]; i <= pos[1] ;i++){
        phrase += board[i].letter;    
    }

    for (let i = 0; i < words.length; i++) {
        if(words[i].word === phrase){
          console.log("word found");
          for(let i = pos[0]; i <= pos[1] ;i++){
            cells[i] = "found";
          }
          words[i].used = true;
          return true;
        }  
    }
    return false;
 }

 export default horizontal;