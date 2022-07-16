/* 

different data type: 
undefined, null, boolean, string, symbol, bigint, number, and object.

3 veriable type: first declare a veriable with var then assigne a veriable

var             variable

let 

const     constant
-------
 corpus html nawak

 -----------

 So unlike var, when you use let, a variable with the same name can only be declared once.
 const has all the awesome features that let has, with the added bonus that variables declared using 
 const are read-only. They are a constant value, which means that once a variable is assigned with 
 const, it cannot be reassigned:

 -----------------

 Number is a data type in JavaScript which represents numeric data.

Now let's try to add two numbers using JavaScript.

JavaScript uses the + - * / symbol as an addition/ substraction / multiplyed / divison operator when placed between two numbers.

---------------------------
add +1
i++;        double + for +1 incrementing by 1 also minus -
i=i+1;

We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.

ex 5.2 
----
Finding a Remainder in JavaScript    look up!! video
The remainder operator % gives the remainder of the division of two numbers.
-------------

to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator. also -= also *= also /=

---------------------------------
Escaping Literal Quotes in Strings
When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
--------------------------------------------------------
Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.
We learned this in the previous challenge.

Code	Output
\'	single quote
\"	double quote
\\	backslash                   ESCAPING CARACTERS ?????? concatenation = a series of interconnected things: 
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

-------------------------------


Find the Length of a String
You can find the length of a String value by writing .length after the string variable or string literal.

console.log("Alan Peter".length);
The value 10 would be displayed in the console. Note that the space character between "Alan" and "Peter" is also counted.

For example, if we created a variable const firstName = "Ada", we could find out how long the string Ada is by using the firstName.length property.


let lastNameLength = 0;
const lastName = "Lovelace";


lastNameLength = lastName.length;

---------------
Use Bracket Notation to Find the First Character in a String
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word Charles is C. So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].

Example:

const firstName = "Charles";
const firstLetter = firstName[0];
firstLetter would have a value of the string C.

---------------------
In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:
let myStr = "Bob";
myStr[0] = "J";
-------------------------------

Use Bracket Notation to Find the Nth Character in a String
You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at 0, so the first character is actually the zeroth character.

Example:

const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
-----------------------

Use Bracket Notation to Find the Last Character in a String
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
lastLetter would have a value of the string a.

---------------------
Word Blanks
You are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence - It was really ____, and we ____ ourselves ____. This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";

---------------------------------




*/





/*  strings & variables */

var a;
var b;
var a  = 22;
var c;
console.log(a)

b=a;
console.log(b)
console.log(a)


console.log(a,b)

var name = "Visurex";

console.log(name)
console.log(a,b,name)

c= a+b;

console.log(c)

c= a+b*2;

console.log(c)

c= a*2+b*2;

console.log(c , name)

var name = "Virus-Mx";

console.log(name)
let uniqueVar = "unique"
const READABLEONLY = "untouchable";
const myVar = 5 + 10;
var quotient = 4.4 / 2.0;


console.log(READABLEONLY, uniqueVar, myVar, quotient);

var remainder = 11%3;

console.log(remainder)

let myVar1 = 1;
myVar1 += 5;

let myVar2 = 1;
myVar2 -= 5;
let myVar3 = 1;
myVar3 *= 5;
let myVar4 = 1;
myVar4 /= 5;

console.log(myVar1,myVar2,myVar3,myVar4)

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

console.log(myStr)

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';

console.log(doubleQuoteStr, singleQuoteStr)

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';

console.log(goodStr)
const nawakStr =  "FirstLine\n\t\\SecondLine\nThirdLine";

console.log(nawakStr)

const nawakStr2 = "\tI nawak \nsecond nawak line\n\tthird nawak line\\"

console.log(nawakStr2)

const ourStr = "I come first. " + "I come second.";

console.log(ourStr)

let myString = "This is the first sentence. ";
myString += "This is the second sentence.";

console.log(myString)

const myName = "Visurex";
const myStrName = "My name is " + myName + ", and I am well";

console.log(myStrName)

const someAdjective = "Learning to code on freecodecam ";
let myStrcode = " is fucked up";

myStrcode += someAdjective;

console.log(myStrcode)

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

console.log(lastNameLength);

let  firstLetterOfLastName 
const lastNameletter = "lovelace"

firstLetterOfLastName = lastNameletter[1]

console.log(firstLetterOfLastName)

let myStrr = "Bob";
myStrr = "Job";

console.log(myStrr)

const lastNamee = "Lovelace";

const lastLetterOfLastName = lastNamee[lastNamee.length - 1];

console.log(lastLetterOfLastName)
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";


const wordBlanks = "blabla " + myNoun + " blabla " + myAdjective + " blalla " + myVerb + " blabla " + myAdverb + " .";
console.log(wordBlanks)




/*  arrays */

/* Store Multiple Values in one Variable using JavaScript Arrays
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

const sandwich = ["peanut butter", "jelly", "bread"];

const myArray = ["jelly", 8];
---------------------------------
Nest one Array within Another Array
You can also nest arrays within other arrays, like below:

const teams = [["Bulls", 23], ["White Sox", 45]];
This is also called a multi-dimensional array.
------------------
We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.


Example

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
The console.log(array[0]) prints 50, and data has the value 60.
-----------------
Modify Array Data With Indexes
Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

Example

const ourArray = [50, 40, 30];
ourArray[0] = 15;
ourArray now has the value [15, 40, 30].

Note: There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly,
 this may confuse other programmers reading your code.

------------------
Access Multi-Dimensional Arrays With Indexes
One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

Example

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];
arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.


--------------
Manipulate Arrays With push()
An easy way to append data to the end of an array is via the push() function.

.push() takes one or more parameters and "pushes" them onto the end of the array.

Examples:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
-------------------------------------


Manipulate Arrays With pop()
Another way to change the data in an array is with the .pop() function.

.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
The first console.log will display the value 6, and the second will display the value [1, 4].
---------------------

Manipulate Arrays With shift()
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

Example:

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

-------------------------------------
Manipulate Arrays With unshift()
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

Example:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].
 
------------------------

*/

const myArray = ["jelly", 8, "what", 'tis is'];

console.log(myArray);

const teams = [["Bulls", 23], ["White Sox", 45]];

console.log(teams);

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];

const myArrayy = [50, 60, 70];  /*  index 0 , index 1, index 2*/
var myData = myArrayy[2];    

console.log(myData);

const ourArray = [50, 40, 30];
ourArray[0] = 15;

console.log(ourArray);

const myArrayyy = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myDataa = myArrayyy[2][1];

  console.log(myDataa);

  const myArrayyyy = [["John", 23], ["cat", 2]];
myArrayyyy.push(["dog", 3])

console.log(myArrayyyy);

const myArrayyyyy = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArrayyyyy.pop();

console.log(removedFromMyArray);

const myArrayyyyyy = [["John", 23], ["dog", 3]];
const removedFromMyArrayy = myArrayyyyyy.shift();

console.log(removedFromMyArrayy)

const ourArrray = ["Stimpson", "J", "cat"];
ourArrray.shift();
console.log(ourArrray)
ourArrray.unshift("Happy");
console.log(ourArrray)

/* FUNCTIONS */

/*
Write Reusable JavaScript with Functions
In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName() {
  console.log("Hello World");
}
You can call or invoke this function by using its name followed by parentheses, like this: functionName(); 
Each time the function is called it will print out the message Hello World on the dev console. 
All of the code between the curly braces will be executed every time the function is called.
-------------------------------

Passing Values to Functions with Arguments
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called.
 When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when
  it is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Then we can call testFun like this: testFun("Hello", "World");. We have passed two string arguments,
 Hello and World. Inside the function, param1 will equal the string Hello and param2 will equal the string World.
  Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

  -------------------
Return a Value from a Function with Return
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3

--------------------
JavaScript Algorithms and Data Structures
Basic JavaScript
Global Scope and Functions
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.


let myGlobal = 10;
function fun1() {

oopsGlobal = 5;
}



function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
-------------------------------------------------------
Local Scope and Functions
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
The myTest() function call will display the string foo in the console.
 The console.log(loc) line (outside of the myTest function) will throw an error,
 as loc is not defined outside of the function.
---------------------------------------------------

Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
The function myFun will return the string Head because the local version of the variable is present.

---------------------------------
Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

-------------------------------

Assignment with a Returned Value
If you'll recall from our discussion about Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:

ourSum = sum(5, 12);
will call the sum function, which returns a value of 17 and assigns it to the ourSum variable.

--------------------------
*/

function reusableFunction(){
    console.log("Hi World");
  }
  
  reusableFunction();

  function functionWithArgs(a,b){

    console.log(a + b)
  }
  
  functionWithArgs(10,5)

  function timesFive(num){

    return num * 5;
  }
  
  const answer = timesFive(5);

  console.log(answer);
  console.log(timesFive(10));

  function myLocalScope() {
   
   const myVar = 5;  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  const outerWear = "T-Shirt";

function myOutfit() {

  var outerWear = "sweater";

  return outerWear;
}

myOutfit();
console.log(myOutfit())
console.log(outerWear)


let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
  return sum;
}

addThree();
addFive();

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}


processed = processArg(7);

console.log(processed)


/*Stand in Line  wtf ???? 


Stand in Line
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.


*/ 

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift(); 
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* boolean 
Understanding Boolean Values
Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.

Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

-----------------------------

if statement
Use Conditional Logic with If Statements
if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true) returns the string It was true, and test(false) returns the string It was false.

When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns It was true. When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns It was false.




*/

function trueOrFalse(wasThatTrue) {
  
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  } 

  console.log(trueOrFalse(true));
  console.log(trueOrFalse(false));

/*  equality operator 
Comparison with the Equality Operator

There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return Equal. Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true


*/
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(12));

/*
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

*/

function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10));

/*
Practice comparing different values
In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.

Examples

3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

typeof 3
typeof '3'
typeof 3 returns the string number, and typeof '3' returns the string string.


*/

function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));


/* 
Comparison with the Inequality Operator
The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

*/

function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));

/* 
Comparison with the Strict Inequality Operator
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

Examples

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

*/


function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));
/* 
Comparison with the Greater Than Operator
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false


*/

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));

/* 

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
*/
function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(25));

/*
Comparison with the Less Than Operator
The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.

Examples

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

*/
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(10));

/* 
Comparison with the Less Than Or Equal To Operator
The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types.

Examples

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false

*/

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(10));

/* 
will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

*/

function testLogicalAnd(val) {
  

  if (val <= 50 && val >= 25) {
    
      return "Yes";
    
  }

  
  return "No";
}

console.log(testLogicalAnd(10));

/* 
Comparisons with the Logical Or Operator
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.

The pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

console.log(testLogicalOr(15));

/*Introduing Else Statements*/
/*
Introducing Else Statements
When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
 */

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

console.log(testElse(4));

/*
Introducing Else If Statements
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

*/

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {

  return "Between 5 and 10";
  }
}
console.log(testElseIf(7));

/* 
Logical Order in If Else Statements
Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
And the second just switches the order of the statements:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
While these two functions look nearly identical if we pass a number to both we get different outputs.

foo(0)
bar(0)
foo(0) will return the string Less than one, and bar(0) will return the string Less than two.
*/

  function testSize(num) {
  
    if ( num < 5){
      return "Tiny";
    } else if (num < 10){
      return "Small"
    } else if (num < 15){
      return "Medium"
    } else if (num < 20){
      return "Large"
    } else if ( num >= 20){
      return "Huge"
    }else{

    return "Change Me";
    }

  }

  console.log(testSize(25));

  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  
  if (strokes == 1){
    return names[0];
  } else if (strokes <= par -2){
    return names[1];
  } else if (strokes == par -1){
    return names[2];
  } else if (strokes == par){
    return names[3];
  } else if (strokes == par +1){
    return names[4];
  } else if (strokes == par +2){
    return names[5];
  } else if (strokes  >= +3){
    return names[6];
  } else
    return "Change Me";
  
}

console.log(golfScore(4, 1));

/* 
Selecting from Many Options with Switch Statements
If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is an example of a switch statement:

switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

*/

function caseInSwitch(val) {
  let answer = "";
  
      
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;

  }
  
  return answer;
  }

console.log(caseInSwitch(1));

/* 
Adding a Default Option in Switch Statements
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
*/

function switchOfStuff(val) {
  let answer = "";
  

  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  
  return answer;
}

console.log(switchOfStuff(1));

/* 
Multiple Identical Options in Switch Statements
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Cases for 1, 2, and 3 will all produce the same result.
*/

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val){

    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;

  }


  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));

/* 
Replacing If Else Chains with Switch
If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
*/

function chainToSwitch(val) {
  let answer = "";
 
  switch (val){
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  
  return answer;
}

console.log(chainToSwitch(7));

/* 
Returning Boolean Values from Functions
You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}


*/

function isLess(a, b) {
    return a < b;
    }

console.log(isLess(10, 15));

/*Return Early Pattern for Functions
When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

*/
function abTest(a, b) {
  
  if (a < 0 || b < 0){
    return undefined
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));
/* 
Counting Cards
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
*/

var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return count + " " + holdbet;

}



console.log(cc(8))


/*
Build JavaScript Objects
You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.



*/

  const myDog = {

    "name": "dog",
    "legs": 4,
    "tails": 1,
    friends:["a","b"]
  };

  /* 
  Accessing Object Properties with Dot Notation
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using dot notation (.) to read an object's property:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val would have a value of the string val1, and prop2val would have a value of the string val2.
  */

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};


const hatValue = testObj.hat;      
const shirtValue = testObj.shirt; 

console.log(testObj.hat)
console.log(testObj.shirt) 

/*
Accessing Object Properties with Bracket Notation
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the string Spock, and myObj["NoSpace"] would be the string USS Enterprise.

Note that property names with spaces in them must be in quotes (single or double).


*/
const ttestObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};


const entreeValue = ttestObj["an entree"];   
const drinkValue = ttestObj["the drink"];    
  console.log(ttestObj["an entree"])
  console.log(ttestObj["the drink"])

  /* 
  
  Accessing Object Properties with Variables
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
The string Doberman would be displayed in the console.

Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
someProp would have a value of the string propName, and the string John would be displayed in the console.

Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.
  
  
  
  */

  const tttestObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  
  const playerNumber = 16;  
  const player = tttestObj[playerNumber];  

  console.log(player)

  /* 
  Updating Object Properties
After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

For example, let's look at ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Since he's a particularly happy dog, let's change his name to the string Happy Camper. Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.
  
  */

const myyDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};



myyDog.name = "Happy Coder";
myyDog["name"] = "Happy Coder !";

 console.log(myyDog)

 /* 
 
 Add New Properties to a JavaScript Object
You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:

ourDog.bark = "bow-wow";
or

ourDog["bark"] = "bow-wow";
Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
 
 */

const myDogg = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDogg["bark"] = "woof";

console.log(myDogg)

/*
Delete Properties from a JavaScript Object
We can also delete properties from objects like this:

delete ourDog.bark;
Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
After the last line shown above, ourDog looks like:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}


*/

const myDogggg = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDogggg.tails;

console.log(myDogggg)

/* 

Using Objects for Lookups
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

const thirdLetter = alpha[2];
const lastLetter = alpha[24];

const value = 2;
const valueLookup = alpha[value];
thirdLetter is the string Y, lastLetter is the string C, and valueLookup is the string Y.

*/

function phoneticLookup(val) {
  let result = "";

   const lookup = { 
    "alpha": "Adams",
     
    "bravo":"Boston",
  
    "charlie":"Chicago",
    
    "delta":"Denver",
   
      "echo":"Easy",
     
    "foxtrot":"Frank",
  }
      result = lookup[val];
  return result;
}

console.log(phoneticLookup("charlie"));

/*

Testing Objects for Properties
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

Example

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
The first hasOwnProperty returns true, while the second returns false.
??????????????????????
*/


function checkObjj(obj, checkProp) {
  
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }

}

console.log(checkObjj.obj)

/* 
Manipulating Complex Objects
Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

Here's an example of a complex data structure:

const ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested formats array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of artist and a value of Daft Punk.

Note: You will need to place a comma after every object in the array, unless it is the last object in the array.

*/

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },{
      "new album": "fds",
      "artist": "dfsqf",
      "title": "dfqsf",
      "release_year": 2002,
      "formats": ["sqdf","tyf"]
            }
];

console.log(myMusic)

/*
Accessing Nested Objects
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.
*/

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

/*
Accessing Nested Arrays
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.

*/

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

console.log(secondTree)

/* loops */

/* Iterate with JavaScript While Loops
You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.

Let's try getting a while loop to work by pushing values to an array. 

*/





const ourrrArray = [];
var i = 5;

while (i > -1) {
  ourrrArray.push(i);
  i= i -1;
}
console.log(ourrrArray)

/* 
Iterate with JavaScript For Loops
You can run the same code multiple times by using a loop.

The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.

For loops are declared with three optional expressions separated by semicolons:

for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
ourArray will now have the value [0, 1, 2, 3, 4].

*/

const myAAAArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++){
  myAAAArray.push(i)

}

console.log(myAAAArray)

/* 
Iterate Odd Numbers With a For Loop
For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
ourArray will now contain [0, 2, 4, 6, 8]. Let's change our initialization so we can count by odd numbers.

*/
const myArqray = [];


// Only change code below this line
  for (let i = 1; i < 11; i +=2){
    myArqray.push(i);
  }
  console.log(myArqray)

  /* Count Backwards With a For Loop
A for loop can also count backwards, so long as we can define the right conditions.

In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.

We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.

const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
ourArray will now contain [10, 8, 6, 4, 2]. Let's change our initialization and final expression so we can count backwards by twos to create an array of descending odd numbers.
*/

const myAArray = [];


for (let i = 9; i > 0; i -= 2){

  myAArray.push(i);
}

console.log(myAAAArray)

/*

Iterate Through an Array with a For Loop
A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. This code will output each element of the array arr to the console:

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false.
*/


const myArr = [2, 3, 4, 5, 6];

var total= 0;

for (var i = 0; i < myArr.length; i++){
     total = total + myArr[i];
}

console.log(total)

/* 
Nesting For Loops
If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.


*/

function multiplyAll(arr) {
  var product = 1;
  
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);

/* 

Replace Loops using Recursion
Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

  function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

*/



/* nawak de chez nawak */
/*
function sum(arr, n) {

  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  }

console.log(arr)
*/

/* Generate Random Fractions with JavaScript
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

*/

/* 
enerate Random Fractions with JavaScript
Random numbers are useful for creating random behavior.

JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

Note: Like Storing Values with the Assignment Operator, all function calls will be resolved before the return executes, so we can return the value of the Math.random() function.

*/

function randomFraction() {

  // Only change code below this line
 
  return Math.random();
  console.log(randomFraction())

}

console.log(randomFraction())
console.log(Math.random())