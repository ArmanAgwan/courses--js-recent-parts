// function ask(question){
//     setTimeout(function waitASec(){
//     console.log(question);
// },100);
// }

// ask("what is clouser?");
// what is clouser


//2  Object(implicit binding)

// var workshop = {
//     teacher : "Kayle",
//     ask(question) {
//         console.log(this.teacher,question);
//     },  
// };

// workshop.ask("What is implicit blinding?");


//3  explicit blinding

// function ask(question){
//     console.log(this.teacher,question);
// }

// var workshop1 = {
//     teacher: "Kyle",
// };

// var workshop2 = {
//     teacher: "Suzy",
// };

// ask.call(workshop1,"Can I explicitly set context?");
// ask.call(workshop2,"Can I explicitly set context?");
 

//4 constructor calls

// function ask(question){
//     console.log(this.teacher,question);
// }

// var newEmptyObject = new ask("What is a 'new' doing here?")


//5- arrow functions

// var workshop = {
//     teacher: "Kayle",
//     ask(question) {
//         setTimeout(() => {
//             console.log(this.teacher,question);
//         },100)
//     },
// };

// workshop.ask("Is this lexical'this'?");


                            // TYPE SCRIPT//

//1- VARIABLES

// const RANDOM_WAIT_TIME = 
// Math.round(Math.random() *500) + 500

// let startTime = new Date ()
// let endTime 


// setTimeout(() => {
//     endTime = 0
//     endTime = new Date()
// }, RANDOM_WAIT_TIME)


//2- OPTIONAL PROPERTIES

// function printCar(car: {
//     make: string | number
//     model: string
//     year: number
//     chargeVoltage?: number
//     color?: string
// }) {
//     //implementation removed for simplicity
// }

// printCar({
//     make: "Tesla",
//     model: "Model 3",
//     year: 2020,
//     chargeVoltage: 220,
//     color: "Red",
// })


//4- UNION TYPES

// function maybeGetUserInfo():
// | ["error", Error]
// | ["success", { name: string; email: string}] {
// if (Math.random() > 0.5) {
//     return [
//         "success",
//         { name: "Mike North", email:"mike@example.com"},
//     ]
// } else {
//     return [
//         "error",
//         new Error("The coin landed on TAILS :("),
//     ]
//   }   
// }
// ///---cut---
// const outcome = maybeGetUserInfo()
// const [first, second] = outcome
// first
// //*?
// second
// //*?

//5- STRING TEMPLATES

// var name = "Kyle Simpson";
// var email = "getify@gmail.com";
// var title = "Teacher";

// var msg = "Welcome to this class! Your"+
//     title + "is" + name + ", contact: " +
//     email + ".";

//6-TAGGED TEMPLATES

// function formatCurrency(strings,...values) {
//     var str = "";
//     for (let i = 0; i< strings.length; i++) {
//         if (i > 0) {
//             if (typeof values[i-1] == "number") {
//                 str += '$${values[i-1].toFixed(2)}';
//             }
//             else{
//                 str += values[i-1];
//             }
//         }
//         str += strings[i]
//     }
//     return str;
// }

// 7- object destruc

// function data() {
//     return {a: 1, b: 2, c: 3};
// }

// var temp = data();
// var first = temp.a;
// var second = temp.b;
// var third = temp.c;

// function data() {
//     return{ a: 1, b: 2 , c: 3};
// }

// var {
//     a: second,
//     b: first,
//     c: third
// } = data();

//8- nested des

// function data() {
//     return {
//         a: 1,
//     };
// }

// var temp = data() || {};
// var a = temp.a;
// var b = temp.b || {};
// var c = b.c;
// var d = b.d;


// function data() {
//     return {
//         a: 1,
//         b: {
//             c: 3,
//             d: 4
//         }
//     };
// }

// var {
//     a,
//     b: {
//         c,
//         d
//     } = {}
// } = data() || {};

//   FURTHER DES ( NAMED ARGUMENT)
   
function lookupRecord(store = "person-records",id = -1) {
    //..
}

function lookupRecord({
    store = "person-records",
    id = -1
})  {
    //..
}

lookupRecord( {id: 42});
