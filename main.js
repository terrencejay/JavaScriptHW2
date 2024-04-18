

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords() {
    for (let i = 0; i < dog_names.length; i++) {
        let dog_name = dog_names[i];
        if (dog_string.toLowerCase().includes(dog_name.toLowerCase())) {
            console.log(`Matched ${dog_name}`);
        }
    }
}
findWords();

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

/* Given */ arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(arr) {
    for (let index = 0; index<arr.length;index++)
    {
        if(index%2==0)
        {
            arr.splice(index,1,'even index');
        }
    }
    console.log(arr)
}
replaceEvens(arr);
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
        }]
    };

function exercise(person){
    for(let key in person){
        if(Array.isArray(person[key])) {
            console.log(`${key}`);
            person[key].forEach(food => {
                console.log(` - ${food}`);
            });
        }else if (typeof person[key] == 'object'){
            console.log(`${key}:`);
            for (let shakePlace in person[key][0]){
                console.log(`- ${person[key][0][shakePlace]} (${shakePlace})`);
            }
        } else {
            console.log(`${key}: ${person[key]}`)
        }
    }
}
exercise(person3)




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create the Person Prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.printInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

Person.prototype.addAge = function (years) {
    this.age += years;
};

const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);


person1.printInfo();
person2.printInfo();


person1.addAge(3);


person1.printInfo();
person2.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(string) {
    return new Promise((resolve, reject) => {
        
        if (string.length > 10) {
            
            resolve("Big word");
        } else {
            
            reject("Small Number");
        }
    });
}




checkStringLength("Hello, World!")
    .then(result => {

        console.log(result);
    })
    .catch(error => {
        
        console.log(error); 
    });


checkStringLength("Hello!")
    .then(result => {
        
        console.log(result); 
    })
    .catch(error => {
        
        console.log(error); 
    });