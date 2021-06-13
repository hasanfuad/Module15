
const list1 = [20,30,99,40,45,98,20,99]

let newList = [];

for(let i = 0; i < list1.length; i++){
    let element = list1[i];
    let index = newList.indexOf(element);

    if(index == -1){
        newList.push(element);
    }
}

console.log("Unique new list: ",newList);
