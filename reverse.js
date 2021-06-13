function reversedString(str){
    let revered = "";

    for(let i = 0; i < str.length; i++){
        let char = str[i];
        revered = char + revered;
    }
    return revered;
}

const str1 = "very hardworking person. no one can beat me."

console.log(reversedString(str1));