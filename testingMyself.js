
//Swapping

let a = 5;
let b = 7;

a = a+b;
b = a-b;
a = a-b;

// console.log("a: "+a+"; b: "+b)




// sum of array

const marks = [20,90,88,94,75,50];

let total = 0;

for(let i = 0; i< marks.length; i++){
  let temp = marks[i]
  total = total + temp;
}

// console.log(total);


const words = "I'm a software engineering student";
let reversed = "";

for(let i = 0; i <= words.length; i++){
    let char = words[i];
    reversed = char + reversed;
}

console.log(words);
console.log(reversed);

// Remove duplicates

const list = [3,9,10,3,9,33,92,10,27,22];

let uniqueList = [];

for(let i = 0; i < list.length; i++){
    let element = list[i];
    let index = uniqueList.indexOf(element);

    if(index == -1){
        uniqueList.push(element)
    }
}

console.log(list);
console.log(uniqueList);

// random num (dice) 


for(let i = 1; i <= 10; i++){

    const value = Math.random()*6;
    const roundNum = Math.round(value);
    
    
    // console.log(roundNum);
}
    // FIND MAX VALUE 

    const num1 = 200;
    const num2 = 400;
    const num3 = 500;

    const res = Math.max(num1,num2,num3);

    console.log(res);

    const business = 300000;
    const minister = 40000;
    const socib = 5000;

    if (business > minister) {
        if(business > socib){
            console.log("Business is bigger");
        }
        else{
            console.log("Socib is bigger");
        }
        
    } else {
        if(minister > socib){
            console.log("Minister is bigger");
        }

        else{
            console.log("Socib is bigger");
        }
    }

    // FIND LARGEST ELEMENT IN ARRAY 

    const score = [99,39,100,200,94,45,55];

    let max = score[0];

    for(let i = 0; i < score.length; i++){
        let element = score[i];

        if(element > max){
            max = element;
        }
    }

    console.log(max);

    // Count words 

    const speech = "I am fuad. Student   of software   engineering. This year i have completed my graduation.";
    
    let count = 0;

    for(let i = 0; i < speech.length; i++){
        let countedWord = speech[i];

        if(countedWord == " " &&  speech[i-1] != " "){
            count++;
        }

    }
    count++;

    console.log(count);









