function myExternalFunction(){
    document.getElementById("demo8").innerHTML = "Parrafo externo hecho con amor y JacaScript..";
}

function stateFunction(){
    document.getElementById("test1").innerHTML = "Hello Dolly!";
    
    document.getElementById("test2").innerHTML = "How are you?";
}

//********************************************
//JavaScript Variables



function onload(){
    
    var car = "Fiat";
    document.getElementById("tempvar").innerHTML = car;
    
    var carrito = {type: "Fiat", model:"50", color: "white"};
    document.getElementById("tempobj").innerHTML = "The car type is " + carrito.type;
    
    var person = {firsName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
    document.getElementById("tempobj2").innerHTML = person.firsName + " is " + person.age + " years old.";
    
    var person3 = {
        firsName: "Johnito",
        lastName: "Doeito",
        age: 500,
        eyeColor: "blueito"
    };
    document.getElementById("tempobj3").innerHTML = person3.firsName + " is " + person3.age + " years old.";
    
    var person4 = {
        firsName: "Johnito",
        lastName: "Doeito",
        id      : 5566,
        eyeColor: "blueito",
        fullName: function(){
            return this.firsName + " " + this.lastName;
        }
    };
    document.getElementById("tempobj4").innerHTML = person4.fullName();
    
}

