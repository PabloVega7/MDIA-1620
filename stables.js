
let horseName = "Whiskey";
let horseNickName = "Jack";
let horseAge = 5;
let isHorseInStable = true;
let horseIntroduction = " is the name of my horse and his nickname is ";

//console.log(horseName)
//console.log(horseAge)
//console.log(isHorseInStable)
console.log(horseName + horseIntroduction + horseNickName);

const STABLE_MONTHLY_FEE = 100;
let stableSavings = (STABLE_MONTHLY_FEE*0.1)*3;

let rentIntroduction = "It costs $" + (STABLE_MONTHLY_FEE*0.9)*3 + " loonies to board " + horseName + " for 3 months and saving $" + stableSavings + " with a 10% discount!";
//let rentIntroduction = `It costs ${STABLE_MONTHLY_FEE} loonies to board ${horseName} `;
console.log(rentIntroduction);

//let stableIntroduction = "welcome to " + horseName + "'s stable";
//let stableIntroduction = `Welcome to "${horseName}"'s stable`
//console.log(stableIntroduction);

// LESSON-5 Code
let isHorseInside = false; 
if(isHorseInside) {
    console.log(horseName + " is inside!");
} else {
    console.log(horseName + " is outside!");
}

//LESSON-6 
let horseName2 = "Bourbon";
let horseNickName2 = "Smokey";
let horseAge2 = 4;
let isHorseInside2 = true;

let horseName3 = "Scotch";
let horseNickName3 = "Mac";
let horseAge3 = 6;
let isHorseInside3 = true;

console.log(`${horseName2} is the name of my second horse, his nickname is ${horseNickName2}, and ${horseName3} is the name of my third horse, his nickname is ${horseNickName3}.`);

if (isHorseInside2) {
    console.log(`${horseName2} is inside!`);
} else {
    console.log(`${horseName2} is outside!`);
}

if (isHorseInside3) {
    console.log(`${horseName3} is inside!`);
} else {
    console.log(`${horseName3} is outside!`);
}



