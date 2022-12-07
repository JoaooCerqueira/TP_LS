import { Cell } from "../components";

function placeHorizontal(matrix,word,size){
  let pos;
  while(1){
    pos = Math.floor(Math.random() * (size * size));
    let p = pos % size;
    let aux = size- p;
    if (aux >= size){
      let keep = false;
      for (let i = pos; i < pos + word.length; i++){
        if(matrix[i].placed == true){
          keep = true;
        }
      }
      if(keep == false){
        break;
      }
    }
  }

  for (let i = pos,j= 0; i < pos + word.length; i++,j++) {
      let k = matrix[i].key;
      matrix[i] = {key:k,letter:word[j],color:"",placed:true};
  }
}

function verticalHasSpace(pos,size,wordLenght){
    let amount = 0;
    for(let i = pos; i < size * size; i+= size){
        amount++;
    }
    return amount >= wordLenght;
}

function placeVertical(matrix,word,size){
  let pos;

  while(1){
    pos = Math.floor(Math.random() * (size * size));
    if(verticalHasSpace(pos,size,word.length)){
      let keep = false;
      for (let i = pos,j = 0;; i += size,j++){
        if(matrix[i].placed == true){
          keep = true;
        }
        if(j == word.length - 1){
          break;
        }
      }
      if(keep == false){
        break;
      }
    }  
  }

  for (let i = pos,j = 0;; i += size,j++) {
    let k = matrix[i].key;
    matrix[i] = {key:k,letter:word[j],color:"",placed:true};
    if(j == word.length - 1){
      break;
    }
  }
}

const sortArray = (size,words) => {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    letters = letters.toUpperCase();
    let matrix = [];
    letters = letters.split("");
    for(let i = 0; i < size; i++){
        for (let j = 0; j < size; j++) {
          matrix.push({key:`${i},${j}`,letter:letters[Math.floor(Math.random() * letters.length)],color:"",placed:false});
        }
    }

    let value = false;
    for(let i = 0; i < words.length; i++){
      if(value){
        placeHorizontal(matrix,words[i].word,size);
        value = false;
      } else {
        placeVertical(matrix,words[i].word,size);
        value = true;
      }
    }

    return matrix;
};

export default sortArray;
  