
// variables//

// declaring a variable //

let me = 'Ann';
let age = 19;
let birthday = 'July 26, 2005';

alert(me);
alert(age);
alert(birthday);

// naming variables //
// you can use characters as variable name
// but: number should not go first and no hyphens
// any language like chinese characters as variable is allowed but not recommended
// reserved words cannot be a variable name like: let, class, return, function
// we can declare variable directly with its name without-- 'use strict' in our scripts--

// if constant ang variable use: const, instead of: let :: the variable will never change

// var is an old-school way of declaring a variable, mostly now it is not used

//example 1:

let admin, your_name;

your_name = 'John';
admin = your_name;
alert(admin);


// function //
// functions are the main building blocks of the program //

// creating a function we should use a: function declaration //
// function showMessage(){
//     alert('Hello, Ann!');
// }

// showMessage();

// a variable inside a function cannot be used outside the function //
//  global variables are variables that can be used everywhere in the code: hence, it outside the functions //

// Parameters //


let from_whom = "Ann";

function showMessage(from_whom, text){
    from_whom = '*' + from_whom + '*';
    
    alert(from_whom + ": " +text);
}


showMessage(from_whom, "Annyeong!");

// arrays //

// object //

// DOM manipulation exercise //
// DOCUMENT OBJECT MODEL //

document.title = "Part A";
document.body.style.backgroundColor = "orange";

console.dir(document);

const app =  document.getElementById('app');
    // selecting the div element with 'app' as an ID

const header = document.createElement('h1');
    // creating a new element H1

const text = 'Develop. Preview. Ship'; //text to be inserted into H1
const headerContent = document.createTextNode(text); //creating a new text node for the new h1 element

header.appendChild(headerContent); //appending the text into the h1 element

app.appendChild(header); //adding H1 to the header or to the div

