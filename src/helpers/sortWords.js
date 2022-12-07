function checkWord(words,palavra) {
    for (let i = 0; i < words.length; i++) {
        if(words[i].word === palavra){
            return false;
        }
    }
    return true;
}

const sortWords = (size,PALAVRAS) => {
    let words = [],i = 0;

    while(i != size){
        let palavra = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
        if(checkWord(words,palavra)){
            let value = "#" + Math.floor(Math.random()*16777215).toString(16);
            words.push({word:palavra,used:false,color:value});
            i++;
        }
    }
    return words;
};

export default sortWords;
  