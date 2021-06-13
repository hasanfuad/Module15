
const score = [800, 200, 294,2030, 80, 292, 540];

let max = score[0];

for(let i = 0; i < score.length; i++){
    let element = score[i];

    if(element > max){
        max = element;
    }
}

console.log("Highest num is: ",max);