const button = document.getElementById("chanmgeButton");
const message = document.getElementById("message");
button.addEventListener("click", function () {
  message.textContent = "You have learned your first JavaScript interaction!";
});
variable;
const name = "Mg Mg";
let age = 20;
console.log(name, age);
// data types
const greeting = "Hello,class";
const numberOfstudents = 20;
const isLessonFinished = false;
let nexttopic;
const selectedtopic = null;
console.log(typeof greeting);
console.log(typeof numberOfstudents);
console.log(typeof isLessonFinished);
console.log(typeof nexttopic);
console.log(typeof selectedtopic);

// operators
// const num1=10;
// const num2=5;
// const sum=num1+num2;
// console.log(sum);

const difference = num1 - num2;
console.log(difference);

const firstName = "Su";
const lastName = "Yu";
const fullName = firstName + lastName;
console.log(fullName);
let score = 10;
score += 5;
score -= 3;
score *= 2;
console.log(score);
// Compression operators
const num1 = 10;
const num2 = 5;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);

//logical operators
const isstudent = true;
const hasCompletedlesson = false;
console.log(isstudent && hasCompletedlesson);
console.log(isstudent || hasCompletedlesson);
console.log(!isstudent);
