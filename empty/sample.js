console.log("Hello this is my first jscode");

// var x = 10;
// console.log(x);
// console.log(typeof(x));

var aFruits = ["apple","banana","mango"];
console.log(aFruits);
//counting 
// console.log("My array has  :" + aFruits.length + "  items");
// console.log("First item :" + aFruits[0]);
// console.log("Middle item :" + aFruits[1])
// console.log("Last item :" + aFruits[2]);
console.log("adding item :" + aFruits.push("Pineaple"));
// console.log(aFruits);
console.log(aFruits.splice(1,0,"Lichi"));
// console.log("Added item :" + aFruits[1]);
// console.log("My array has  :" + aFruits.length + "  items");
for (let i = 0; i < aFruits.length; i++) {
    const element = aFruits[i];
    console.log("Item " + i + " = " + element);
    
}

var employee = [{
    "empID" : 1000,
    "empName" : "Sreehari",
    "empSal" : 5000,
    "currency" : "USD"
},
    {
    "empID" : 2000,
    "empName" : "Ramesh",
    "empSal" : 5000,
    "currency" : "USD"
}

]
console.log(employee);
// console.log(employee[1].empName);sss

for (let i= 0; i < employee.length; i++) {
    const empDetails = employee[i];
    
    console.log(i + " Employee Name:" + empDetails.empName);
}