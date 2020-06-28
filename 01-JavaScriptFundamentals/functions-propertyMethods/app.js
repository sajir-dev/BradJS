function greet(firstName = 'John', lastName= "Doe") {
    //console.log('Hello'  );
    return 'Hello..'+firstName + ' ' + lastName ; 
}

//console.log (greet('Steve', 'Smith'));

const square = function(x = 1) {
    return x*x;
};

//console.log(square());


//IIFE - Immediate Invokable Function Expressions
// (function(name){
//     console.log('Hello..'+name);
// })('Brad');

//Propoerty Methods
const todo = {
    add: function () {
        console.log('Add todo')
    },
    edit: function(){
        console.log('Edit todo')
    }
}

todo.delete = function (){
    console.log('Delete todo')
}

todo.add();
todo.edit();
todo.delete();




