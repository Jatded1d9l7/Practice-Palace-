// Write a JavaScript function that reverse a number.

// Example x = 32243;
// Expected Output : 34223

// var num1 = 32245

// const reverse = (num) => {
//     num = num + "";
//     return num.split("").reverse().join("");
// }

// console.log(reverse(num1))

// Write a program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100

// const program = (n1, n2) => 
// n1 === 100 ||
// n2 === 100 ||
// (n1 + n2) === 100

// console.log(program(10,100))
// console.log(program(100,10))

// write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// const shifter = (string) => 
// string.split("")
// .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
// .join("");

// console.log(shifter("Jared Thomas"))

// Write a JavaScript program to get the current Date 

// const todaysDate = (date = new Date()) => {
//     const days = date.getDate() + 1;
//     const months = date.getMonth() +1;
//     const years = date.getFullYear();
//     return `${days}/${months}/${years}`;
// }

// console.log(todaysDate())

//In this example, I created a method inside the object called getData. It falls in line with the key value pairs.

// var restaurant = {
//     name: "Le Bistro",
//     location: "Downtown",
//     getData: function() {
//     return `${this.name} is a restaurant located ${this.location}`
//     }
// }
// console.log(restaurant.getData())

// Create an object of super heros and their powers.
// filter out only heros with strength as their power. 


// var heros = [
// {name: "Batman", powers: "none"},
// {name: "Superman", powers: "powerful"},
// {name: "Hulk",    powers: "strength"},
// {name: "He-Man",  powers: "strength"}
// ]
// //iterating through the object
// var superStrength = heros.filter(value => value.powers === "strength")

// console.log(superStrength)

var person = {
    firstName: "Harvey",
    lastName: "Dent",
    homePlanet: "Earth",
    getData: function() {
        return `${this.firstName} ${this.lastName} is from ${this.homePlanet}.`
    }
    }

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.homePlanet)
console.log(person.getData())

// 1.0 Don't forget that when you add a function to an object you must approach it as a key/value with the value being the function. You do not have to include the hash rocket here. Q: Why do I not need a hash rocket here?

// var product = {
//     name: "chair",
//     price: 14.99,
//     describeProduct: function () {     //1.0
//         return `A ${this.name} costs ${this.price}`
//     }
// }
// console.log(product.describeProduct())

// this example contains an object that lists an array of ingredients.

// var lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"],
//     lunchObject: function() {
//         return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients[0]}, ${this.ingredients[1]}, and ${this.ingredients[2]}`
//     }
//   }
  
// //   console.log(lunch.ingredients)
// // console.log(lunch.ingredients[2])
// console.log(lunch.lunchObject())

// continue practice at number 4 in JavaScript Objects on the syllabus