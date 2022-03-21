// const amIFat = true; //boolean - true or false
// let something; // undefined
// console.log(amIFat, something);


// const week = ["mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(week); // get item from array

// week.push("sun");

// console.log(week);

// object
// const player = {
//     name: "wonseok",
//     points: 10,
//     fat: false,
// };

// console.log(player);

// player.lastName = "potato";

// // console.log(player);
// console.log(player);

// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is " + nameOfPerson + " and I am " + age);
// }

// sayHello("won", 10);
// sayHello("dong", 23);
// sayHello("min", 21);

// function plus(a, b){
//     console.log(a + b);
// }

// function divide(a, b){
//     console.log(a / b);
// }

// divide(1, 2);

// const player = {
//     name: "won",
//     sayHello: function(othername){
//         console.log("Hello " + othername + " nice to meet you!");
//     },
// };

// console.log(player.name);
// player.sayHello("lynn");

// const calculator = {
//     plus: function(a, b){
//         console.log(a+b);
//     },
//     minus: function(a, b){
//         console.log(a-b);
//     },
//     divide: function(a, b){
//         console.log(a/b);
//     },
//     double: function(a, b){
//         console.log(a**b);
//     },
// };

// calculator.plus(1,2);
// calculator.minus(1,2);
// calculator.divide(1,2);
// calculator.double(10,2);

// const age = 25;

// function calculatekrAge(usAge){
//     return usAge + 2;
// }

// const krAge = calculatekrAge(age);

// console.log(krAge);

// const age = parseInt( prompt("How old are you?") );

// if(isNaN(age) || age < 0){
//     // condition == true
//     console.log("Please write a real positive number");
// } else if( age < 18 ){
//     console.log("you are too young");
// } else if( age >= 18 && age <= 50 ){
//     console.log("you can drink good");
// } else if( age > 50 && age <= 80 ) {
//     console.log("you might be careful");
// } else {
//     console.log("you can't drink");
// }

// const title = document.getElementById("title");

// title.innerText = "Got you!";

// const h1 = document.querySelector(".hello h1")

// function handler(){
//    h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handler);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   event.preventDefault();
   const username = loginInput.value;
   loginForm.classList.add("HIDDEN_CLASS");
   localStorage.setItem(USERNAME_KEY, username);
   paintGreeting(username);
}

function paintGreeting(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASS);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
   // show form
   loginForm.classList.remove(HIDDEN_CLASS);
   loginForm.addEventListener("submit", onLoginSubmit);
} else {
   // hiden form
   paintGreeting(saveUsername);
}