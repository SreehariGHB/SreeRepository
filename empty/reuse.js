
module.exports ={

    printf: function(arrObjects){
                    for (let i = 0; i < arrObjects.length; i++) {
                        const element = arrObjects[i];
                        console.log(element);   

} 
},
getCount: function(arr){
    console.log(arr.length);
    },

 removeItem: function(arr, index){
    return arr.splice(index,1);
 },
 
 addItem: function(arr){
    return arr.push("Pineaple")

 }
}

// Module.exports = {
//     printf: function(arrObjects){

//             for (let i = 0; i < arrObjects.length; i++) {
//                 const element = arrObjects[i];
//                 console.log(element)
// }
// },

// getCount: function(arr){
//     console.log(arr.length)
// },

// removeItem: function(arr, index){
//     return arr.splice(index,1);
// }
// }