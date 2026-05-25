// ===============================
// Lecture 4 - THIS KEYWORD + SCOPE IN JAVASCRIPT
// ===============================

// =======================================
// 1. GLOBAL SCOPE
// =======================================

var globalVar = "I am Global Variable";

function globalScopeExample() {
    console.log("Global Variable Access:", globalVar);
}

globalScopeExample();

console.log("-----------------------------------");


// =======================================
// 2. FUNCTION SCOPE
// =======================================

function functionScopeExample() {

    var message = "Inside Function";

    console.log(message);

}

functionScopeExample();

// console.log(message); // ERROR
// because function scoped variable

console.log("-----------------------------------");


// =======================================
// 3. BLOCK SCOPE
// let and const are block scoped
// =======================================

{
    let blockVar = "Block Scope Variable";
    const blockConst = "Block Scope Const";

    console.log(blockVar);
    console.log(blockConst);
}

// console.log(blockVar); // ERROR

console.log("-----------------------------------");


// =======================================
// 4. var vs let
// =======================================

function varVsLet() {

    if (true) {

        var a = 10;
        let b = 20;

    }

    console.log("var value:", a);

    // console.log(b); // ERROR

}

varVsLet();

console.log("-----------------------------------");


// =======================================
// 5. THIS KEYWORD IN GLOBAL OBJECT
// =======================================

console.log("Global this:", this);

console.log("-----------------------------------");


// =======================================
// 6. THIS INSIDE NORMAL FUNCTION
// =======================================

function normalFunction() {

    console.log("Normal Function this:", this);

}

normalFunction();

console.log("-----------------------------------");


// =======================================
// 7. THIS INSIDE OBJECT METHOD
// =======================================

const student = {

    name: "Rupesh",
    age: 24,

    intro: function () {

        console.log("Student Name:", this.name);
        console.log("Student Age:", this.age);

    }

};

student.intro();

console.log("-----------------------------------");


// =======================================
// 8. THIS INSIDE ARROW FUNCTION
// Arrow function does not have its own this
// =======================================

const obj = {

    name: "JavaScript",

    arrowFunction: () => {

        console.log("Arrow Function this:", this);

    }

};

obj.arrowFunction();

console.log("-----------------------------------");


// =======================================
// 9. NESTED OBJECT + THIS
// =======================================

const user = {

    name: "Aman",

    details: {

        city: "Delhi",

        showDetails: function () {

            console.log(this.city);

        }

    }

};

user.details.showDetails();

console.log("-----------------------------------");


// =======================================
// 10. THIS INSIDE CONSTRUCTOR FUNCTION
// =======================================

function Person(name, age) {

    this.name = name;
    this.age = age;

}

const p1 = new Person("Rahul", 22);

console.log(p1);

console.log("-----------------------------------");


// =======================================
// 11. HOISTING WITH var
// =======================================

console.log(x);

var x = 100;

// Output:
// undefined

console.log("-----------------------------------");


// =======================================
// 12. TEMPORAL DEAD ZONE (let / const)
// =======================================

// console.log(y); // ERROR

let y = 50;

console.log(y);

console.log("-----------------------------------");


// =======================================
// 13. LEXICAL SCOPE
// =======================================

function outer() {

    let outerVariable = "I am Outer Variable";

    function inner() {

        console.log(outerVariable);

    }

    inner();

}

outer();

console.log("-----------------------------------");


// =======================================
// 14. SCOPE CHAIN
// =======================================

let country = "India";

function stateFunction() {

    let state = "Uttar Pradesh";

    function cityFunction() {

        let city = "Moradabad";

        console.log(country);
        console.log(state);
        console.log(city);

    }

    cityFunction();

}

stateFunction();

console.log("-----------------------------------");


// =======================================
// 15. STRICT MODE
// =======================================

"use strict";

function strictModeExample() {

    console.log(this);

}

strictModeExample();

console.log("-----------------------------------");


// =======================================
// 16. PRACTICE QUESTION
// =======================================

const car = {

    brand: "BMW",

    showBrand: function () {

        console.log(this.brand);

    }

};

car.showBrand();

console.log("-----------------------------------");


// =======================================
// 17. INTERVIEW QUESTION
// =======================================

const employee = {

    name: "Rohit",

    getName: function () {

        console.log(this.name);

    }

};

const anotherFunction = employee.getName;

anotherFunction();

// Output:
// undefined (in strict mode)

console.log("-----------------------------------");


// =======================================
// END OF LECTURE 4
// =======================================