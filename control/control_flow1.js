// if

// const isUserloggedIn = true

// if (2 != 3){
//     console.log("executed");
// }

// const temperature = 41

// if(temperature === 41) {
//     console.log("less then 50");
// } else{
//     console.log("temperature is greater then 50");
// }

// console.log("executed");



// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


// const balance = 1000

// // if(balance > 500) console.log("test") , console.log("test2");

// if(balance < 500) {
//       console.log("less then 500");
      
// } else if(balance < 750) {
//     console.log("less then 750");
// } else if(balance < 900) {
//     console.log("less than 750");
// }else{
//     console.log("less than 1200");
// }



const userLoggedIn = true

const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if(userLoggedIn && debitCard && 2==2){
    console.log("allow to purchase");
}

if(loggedInFromGoogle  || loggedInFromEmail) {
    console.log("user logged in");
}
