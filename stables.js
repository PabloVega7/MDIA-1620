// Variables
let horses = [];
let visitorMessage = "Welcome to my stable! Enjoy your visit.";
let latePaymentFee = 50; // in CAD
let availableStalls = 10; // medium stable?

// Constructor 
function Horse(name, nickname, favoriteTreat, age, monthlyRent, location, unique1, unique2) {
    this.name = name;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.location = location; // true when inside; false when outside
    this.unique1 = unique1;
    this.unique2 = unique2;
    this.isHungry = true; // always hungry just like its owner!

    // Method to introduce the horse
    this.introduce = function () {
        return `My name is ${this.name}, I love ${this.favoriteTreat}, and I am ${this.age} years old!`;
    };

    // Second unique method
    this.favoriteActivity = function () {
        return `${this.name}'s favorite activity is ${this.unique1}.`;
    };
}

// Adding 3 horses using constructor
horses.push(new Horse("Whiskey", "Jack", "Carrots", 5, 200, true, "Running in daisy fields", "Super jumper"));
horses.push(new Horse("Bourbon", "Smokey", "Apples", 7, 180, true, "Swimming", "Therapy horse"));
horses.push(new Horse("Scotch", "Mac", "Sugar cubes", 6, 220, true, "Trail rides", "Stamina king"));

// Adding another horse w object literal
let newHorse = new Horse("Gin", "Hendrick", "Oats", 4, 150, true, "Racing", "Family favorite");
horses.push(newHorse);

// Stable roster:
//     {
//         name: "Whiskey",
//         nickname: "Jack",
//         favoriteTreat: "Carrots",
//         age: 5,
//         monthlyRent: 200,
//         location: true, // true = inside, false = outside
//         unique1: "Running in daisy fields",
//         unique2: "Super jumper",
//         isHungry: true
//     },
//     {
//         name: "Bourbon",
//         nickname: "Smokey",
//         favoriteTreat: "Apples",
//         age: 7,
//         monthlyRent: 180,
//         location: true, // true = inside, false = outside
//         unique1: "Swimming",
//         unique2: "Therapy horse",
//         isHungry: true
//     },
//     {
//         name: "Scotch",
//         nickname: "Mac",
//         favoriteTreat: "Sugar cubes",
//         age: 6,
//         monthlyRent: 220,
//         location: true, // true = inside, false = outside
//         unique1: "Trail rides",
//         unique2: "Stamina king",
//         isHungry: true
//     },
//     {
//         name: "Gin",
//         nickname: "Hendrick",
//         favoriteTreat: "Oats",
//         age: 4,
//         monthlyRent: 150,
//         location: true, // true = inside, false = outside
//         unique1: "Racing",
//         unique2: "Family favorite",
//         isHungry: true
//     }


// Growing business
availableStalls -= horses.length; // reassigning # of stalls

if (availableStalls < 2) {
    console.log("We need to build more stalls!");
} else {
    console.log(`We have ${availableStalls} stalls available!`);
} 

function calculateLatePaymentFee(horse) {
    return horse.monthlyRent + latePaymentFee;
} 

function checkTreatPreference(treat) {
    for (let horse of horses) {
        if (horse.favoriteTreat === treat) {
            console.log(`${horse.name} loves ${treat}!`);
            break;
        } else {
            console.log(`${horse.name} doesn't like ${treat}.`);
        }
    }
}

function getNickname(horseName) {
    for (let horse of horses) {
        if (horse.name === horseName) {
            return horse.nickname;
        }
    }
    return "Horse not found.";
} // return, not log

// Day to day operations
function checkHorseActivity(horseName) {
    for (let horse of horses) {
        if (horse.name === horseName) {
            if (horse.unique1 === "Racing") {
                console.log(`${horse.name} is currently racing!`);
            } else {
                console.log(`${horse.name} is doing ${horse.unique1}.`);
            }
        }
    }
} // Function referencing a unique horse property

function moveHorsesOutside() {
    for (let horse of horses) {
        horse.location = false;
        console.log(`${horse.name} has been moved outside to enjoy the sun.`);
    }
} 

function toggleLocation(horse) {
    horse.location = !horse.location;
    let location = horse.location ? "inside" : "outside";
    console.log(`${horse.name} has been moved ${location}.`);
}

function feedHorses() {
    for (let horse of horses) {
        if (!horse.location) {
            toggleLocation(horse);
        }
        horse.isHungry = false;
        console.log(`${horse.name} has been fed their favorite treat: ${horse.favoriteTreat}.`);
    }
}

function moveHorsesInsideIfDark() {
    for (let horse of horses) {
        if (!horse.location) {
            toggleLocation(horse);
            console.log(`${horse.name} has been brought inside for the night.`);
        }
    }
} // Bedtime!

