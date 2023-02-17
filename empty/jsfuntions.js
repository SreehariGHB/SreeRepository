
var test = function(a,b){
    return a + b;
}

console.log(test(10,20));

///..... New function syntax

test1 = (a,b) => {
    return a + b;
}
console.log(test1(10,20));

var myReuse = require("./reuse");

/// reusing funcitons

var arr = ["apple","mango"];
const arr2 = ["potato","cabbage","onion"];

myReuse.printf(arr);
myReuse.getCount(arr);
myReuse.removeItem(arr2,1);

myReuse.addItem(arr2);
myReuse.printf(arr);
myReuse.printf(arr2);



// ///... Basics of functions -- named functions

// var arr = ["apple","mango"];
// var arr2 = ["potato","cabbage","onion"];

// var printf = function(arrObjects){

//     for (let i = 0; i < arrObjects.length; i++) {
//         const element = arrObjects[i];
//         console.log(element)
        
//     }
// }

// printf(arr);
// printf(arr2);



