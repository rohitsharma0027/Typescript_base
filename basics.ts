//Primitives arrays, booleans and numbers
//More complex types: arrays and objects
//Function types, parameters


// Primtives
let age:number;
let ageAssisgnmentOtherType : number = 12;

age = 12;
// age = 'Rs' This gives an error as age can have only number value


let username : string;

username = "Rohit Sharma";
// username = 07; error

let isInstructor : boolean;

isInstructor = true;

let hobbies : null;

// hobbies = 12; gives an error
// hobbies = 'rs' gives an error


//More complex arrays and objects

let hobbiesArray : string[];   // hobbiesArray can have array of strings
hobbiesArray = ['sports','cricket']

let person:any; // default type is any, back to standard basic js

person ={
    name:'Rohit',
    age:'24',
    reactDeveloper:true
}

let personDetails : {
    name: string;
    age:number;
}

personDetails = {
    name:'rs',
    age:24
}