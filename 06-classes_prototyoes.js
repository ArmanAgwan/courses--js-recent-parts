// const user1 = {
//     name: "Will",
//     score: 3,
//     increment: function() { user1.score++; }
//    };
//    user1.increment(); //user1.score -> 4
  
   
   // factory functions //

//    const user2 = {}; //create an empty object
//    //assign properties to that object
//    user2.name = "Tim";
//    user2.score = 6;
//    user2.increment = function() {
//     user2.score++;
//    };  

   // prototype chain //

//    const user3 = Object.create(null);
// user3.name = "Eva";
// user3.score = 9;
// user3.increment = function() {
//  user3.score++;
// };


// has own property //

// function userCreator(name, score) {
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function() {
//     newUser.score++;
//     };
//     return newUser;
//    };
//    const user1 = userCreator("Will", 3);
//    const user2 = userCreator("Tim", 5);
//    user1.increment()