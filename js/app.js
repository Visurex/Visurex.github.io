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

const someAdjective = "on freecodecam fucked up";
let myStrcode = "Learning to code is ";

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


/*Stand in Line */