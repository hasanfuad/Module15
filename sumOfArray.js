function sumOfArr(score){
    let total = 0;

    for(i=0; i<score.length; i++){
        total += score[i];
    }
    return total;
}

const scoreList = [93,87,90,94,68,80];

const res = sumOfArr(scoreList);

console.log("Sum of all num: ",res);