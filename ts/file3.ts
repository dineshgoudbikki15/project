import {course,myAges,student,getMessage} from './file1'
import {Calculator} from './file2'
console.log(course)
myAges.push(35)
console.log(myAges)
console.log(`Student Id: ${student.id} and Student Name: ${student.myName}`)
console.log(getMessage('chiranjeevi how are you'))

let calc = new Calculator();  //constructor
console.log(calc.addOperation(2,3)) //calling methdos
