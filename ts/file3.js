"use strict";
exports.__esModule = true;
var file1_1 = require("./file1");
var file2_1 = require("./file2");
console.log(file1_1.course);
file1_1.myAges.push(35);
console.log(file1_1.myAges);
console.log("Student Id: " + file1_1.student.id + " and Student Name: " + file1_1.student.myName);
console.log(file1_1.getMessage('chiranjeevi how are you'));
var calc = new file2_1.Calculator(); //constructor
console.log(calc.addOperation(2, 3)); //calling methdos
