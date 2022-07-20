        /* FUNCTIONS */


/* 
   Passing Values to Functions with Arguments
   Parameters are variables that act as placeholders for the values that are to
    be input to a function when it is called.
    When a function is defined, it is typically defined along with one or more parameters.
   The actual values that are input (or "passed") into a function when
   it is called are known as arguments.
*/
    function functionName() {
      console.log("Hello World");
    }

    functionName()
    functionName()

// plusThree takes an argument for num and returns a value equal to num + 3

    function plusThree(num) {
      return num + 3;
     }
    const ansswer = plusThree(5);
    console.log(ansswer)

// -----------------------------------

  function functionWithArgs(a,b){

    console.log(a + b)
  }

  functionWithArgs(10,5)
  /*
     Return a Value from a Function with Return
     We can pass values into a function with arguments.
     You can use a return statement to send a value back out of a function.
  */

  function timesFive(num){

    return num * 5;
  }
  
  const answer = timesFive(5);

  console.log(answer);
  console.log(timesFive(10));

  //---------------------------------------

  function myLocalScope() {
   
   const myVar = 5;  
    console.log('inside myLocalScope', myVar);
  }

  myLocalScope();

  //--------------------------------------
  /* Here is a function myTest with a local variable called loc.

  The myTest() function call will display the string foo in the console.
  The console.log(loc) line (outside of the myTest function) will throw an error,
  as loc is not defined outside of the function. */

  function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  
  myTest();
  console.log(loc);

  //----------------------------------------------

  const outerWear = "T-Shirt";

  function myOutfit() {

    var outerWear = "sweater";

    return outerWear;
  }

    myOutfit();
    console.log(myOutfit())
    console.log(outerWear)

//---------------------------------

    let sum = 0;

    function addThree() {
      sum = sum + 3;
    }


    function addFive(){
      sum = sum + 5;
      return sum;
    }

    addThree();
    addFive();

/*        Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:


The function myFun will return the string Head because the local version of the variable is present.*/

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

console.log(myFun())

//------------------------------------

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}


processed = processArg(7);

console.log(processed)
/*
Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement,
 when you call it, the function processes the inner code but the returned value is undefined.

Example


addSum is a function without a return statement.
 The function will change the global sum variable but the returned value of the function is undefined.*/
 
let summ = 0;

function addSum(num) {
  sum = summ+ num;
}

console.log(addSum(3));


/*Stand in Line  wtf ???? 


Stand in Line
In Computer Science a queue is an abstract Data Structure where items are kept in order.
New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.


*/ 

function nextInLine(arr, item) {
    
    arr.push(item);
    return arr.shift(); 
    
  }
  
  
  const testArr = [1, 2, 3, 4, 5];
  
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));



  /*        if statement
Use Conditional Logic with If Statements
if statements are used to make decisions in code.
 The keyword if tells JavaScript to execute the code in the curly braces under certain conditions,
  defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.
   When the condition evaluates to true, the program executes the statement inside the curly braces.
    When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.*/

/*        Booleans
 may only be one of two values: true or false.
  They are basically little on-off switches, where true is on and false is off.
   These two states are mutually exclusive.
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

The most basic operator is the equality operator ==.
 The equality operator compares two values and returns true if they're equivalent or false if they are not.
  Note that equality is different from assignment (=), which assigns the value on the right of the operator to
   a variable on the left.


If myVal is equal to 10, the equality operator returns true,
 so the code in the curly braces will execute, and the function will return Equal.
  Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types
   (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion.
*/


function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(12));

//---------------------------------------

function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10));

//-----------------------------------------

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));


// In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===).

// If the values being compared are not of the same type, the equality operator will perform a type conversion,
// and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is,
//  without converting one type to the other.
//   Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
//    typeof 3
//     typeof '3'
//       typeof 3 returns the string number, and typeof '3' returns the string string.


 function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  };
