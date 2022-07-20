        /* FUNCTIONS */



// Passing Values to Functions with Arguments
// Parameters are variables that act as placeholders for the values that are to
// be input to a function when it is called.
// When a function is defined, it is typically defined along with one or more parameters.
// The actual values that are input (or "passed") into a function when
// it is called are known as arguments.

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

// Return a Value from a Function with Return
// We can pass values into a function with arguments.
// You can use a return statement to send a value back out of a function.


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

// Global vs. Local Scope in Functions
// It is possible to have both local and global variables with the same name.
// When you do this, the local variable takes precedence over the global variable.
// In this example:
// The function myFun will return the string Head because the local version of the variable is present.

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

    //Stand in Line  wtf ???? 
//Stand in Line
//In Computer Science a queue is an abstract Data Structure where items are kept in order.
//New items can be added at the back of the queue and old items are taken off from the front of the queue.
//Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
//Add the number to the end of the array, then remove the first element of the array.
//The nextInLine function should then return the element that was removed.


function nextInLine(arr, item) {
    
    arr.push(item);
    return arr.shift(); 
    
  }
  
  
  const testArr = [1, 2, 3, 4, 5];
  
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));



//   if statement
//Use Conditional Logic with If Statements
// if statements are used to make decisions in code.
//  The keyword if tells JavaScript to execute the code in the curly braces under certain conditions,
//   defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.
//    When the condition evaluates to true, the program executes the statement inside the curly braces.
//     When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.*/

//      Booleans
// may only be one of two values: true or false.
//  They are basically little on-off switches, where true is on and false is off.
//   These two states are mutually exclusive.


function trueOrFalse(wasThatTrue) {
  
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  } 

  console.log(trueOrFalse(true));
  console.log(trueOrFalse(false));

//  equality operator 
//Comparison with the Equality Operator

//There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

//The most basic operator is the equality operator ==.
// The equality operator compares two values and returns true if they're equivalent or false if they are not.
//  Note that equality is different from assignment (=), which assigns the value on the right of the operator to
//   a variable on the left.

//If myVal is equal to 10, the equality operator returns true,
// so the code in the curly braces will execute, and the function will return Equal.
//  Otherwise, the function will return Not Equal. In order for JavaScript to compare two different data types
//   (for example, numbers and strings), it must convert one type to another. This is known as Type Coercion.

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

// Comparison with the Inequality Operator
// The inequality operator (!=) is the opposite of the equality operator.
// It means not equal and returns false where equality would return true and vice versa.
//  Like the equality operator, the inequality operator will convert data types of values while comparing.

// Comparison with the Strict Inequality Operator
// The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types.

  function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }

  console.log(testStrictNotEqual(10));
  
// Comparison with the Greater Than Operator
//  The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right,
//   it returns true. Otherwise, it returns false.

//  Like the equality operator, the greater than operator will convert data types of values while comparing.


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

//--------------------------------------

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

// Comparison with the Less Than Operator
//  The less than operator (<) compares the values of two numbers.
//   If the number to the left is less than the number to the right,
//    it returns true. Otherwise, it returns false. Like the equality operator,
//     the less than operator converts data types while comparing.

  function testLessThan(val) {
    if (val < 25) { 
      return "Under 25";
    }

    if (val < 55) { 
      return "Under 55";
    }

    return "55 or Over";
  }

  console.log(testLessThan(10));
 
// Comparison with the Less Than Or Equal To Operator
//  The less than or equal to operator (<=) compares the values of two numbers.
//   If the number to the left is less than or equal to the number to the right, it returns true.
//    If the number on the left is greater than the number on the right, it returns false.

  function testLessOrEqual(val) {
    if (val <= 12) { 
      return "Smaller Than or Equal to 12";
    }

    if (val <= 24) { 
      return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
  }

console.log(testLessOrEqual(10));

// The same logic can be written as:

  function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) {

        return "Yes";  
    }
    return "No";
  }

console.log(testLogicalAnd(10));

// omparisons with the Logical Or Operator
// The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

  function testLogicalOr(val) {
  
    if (val < 10 || val > 20) {
      return "Outside";
    }

    return "Inside";
  }

  console.log(testLogicalOr(15));

    /*Introduing Else Statements*/

// Introducing Else Statements
// When a condition for an if statement is true,
// the block of code following it is executed. What about when that condition is false? 
//  Normally nothing would happen. With an else statement,an alternate block of code can be executed.


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


        // Introducing Else If Statements  //
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements

  function test(num){

    if (num > 10){
      return "greater than 10";
    } else if (num == 10){
      return "equal to 10";
    } else if (num < 10){
      return "smaller than 10";
    } else{
      return "not in the range";
    }

    }
    console.log(test(10));

// Logical Order in If Else Statements
//  Order is important in if, else if statements.
//   The function is executed from top to bottom so you will want to be careful of what statement comes first.

  function testSize(num){
    if (num < 5){
        return "tiny";
    } else if (num < 10){
        return "small";
    } else if (num < 15){
        return "medium";
    } else if (num < 20){
        return "large"
    } else if (num >= 20){
        return "huge"
    } else{
        return "change me"
    }
    }
      console.log(testSize(5))

  // -------------------------------------------

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