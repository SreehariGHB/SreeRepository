var events = require('events');

var sree = new events.EventEmitter();

sree.on('speak',() => {
    console.log("how are you folks!");

});

sree.emit('speak');

var utils = require('util');

var person = function(name){
    this.name = name;   
};

var testPer = function(addition){
    this.addition = addition;
}

utils.inherits(person,events.EventEmitter);
utils.inherits(testPer,person);

var abc = new person("Abc");
var def = new person("def");
var ghi = new person("ghi");

var people = [abc,def,ghi,];

people.forEach(element => {

    element.on('talk',(msg) => {
        console.log(element.name + "  says " + msg);

    })
})

abc.emit('talk', " hey dudes!");
def.emit('talk'," hey gals...!!!");
ghi.emit('talk',"Hey This is new object ...!!");


/// New tried example.


var myNum = new testPer('myNum');

myNum.on('number', (numb) =>{
    console.log(typeof(numb));
} )

myNum.emit('number','Testing');







