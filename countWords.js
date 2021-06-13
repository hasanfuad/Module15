const speech = "I am  very   good person. very hardworking person. no one can beat me."

let count = 0;

for(let i = 0; i < speech.length; i++){
    let charCount = speech[i];

    if(charCount == " " && speech[i-1] != " "){
        count++;
    }
}

count++;

console.log(count);