// const userEmail = "a@mit.ai"

// if(userEmail) {
//     console.log("got user email");
// } else {
//     console.log("don't have user email");
// }

// Notes: 

// falsy values

// false, 0, -0, BigInt 0n, "",null , undefined,nan

// truthy values 

// "0" 'false', " ", [], {}, function() {}



// if(userEmail.length === 0) {
//     console.log("array is empty");
// }


const emptyObj = {} 

if(Object.keys(emptyObj).length===0){
    console.log("log is empty");
}

// nullish coalesing operator (??) : null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less then 80"):console.log("more than 80");
