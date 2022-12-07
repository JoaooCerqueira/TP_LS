const horizontal = (cells,board,words) => {
    let phrase = "";
    for(let i = 0; i < board.length ;i++){
        if(cells[i] == "selected"){
          phrase += board[i].letter;    
        }
    }

    for (let i = 0; i < words.length; i++) {
        if(!words[i].used && words[i].word === phrase){
          console.log("word found");
          for(let j = 0; j < board.length;j++){
            if(cells[j] == "selected"){
                cells[j] = "found";   
                board[j].color = words[i].color;
            }
          }
          words[i].used = true;

          return true;
        }  
    }
    return false;
 }

 export default horizontal;