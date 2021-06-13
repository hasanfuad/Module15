const minister = 800;
const business = 480;
const socib = 450;


if(business > minister){
    if(business > socib){
        console.log("Business is bigger");
    }
    else{
        console.log("Socib is bigger");
    }
}

else{
    if(minister > socib){
        console.log("Minister is bigger");
    }
    else{
        console.log("Socib is bigger");
    }
}

const res = Math.max(minister,business,socib)

console.log(res);