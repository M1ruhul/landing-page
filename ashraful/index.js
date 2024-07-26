function wordCounter(sentance){
    let word = 0;
    for(let i = 0; i < sentance.lenght; i ++){
        if(sentance[i] == " "){
            word ++;
        }
    }
    word ++;
    return word;
}

console.log(wordCounter('Hey, I am Ashraful Islam.'))