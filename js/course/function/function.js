/*

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
        /* FUNCTIONS */


/* 
   Passing Values to Functions with Arguments
   Parameters are variables that act as placeholders for the values that are to
    be input to a function when it is called.
    When a function is defined, it is typically defined along with one or more parameters.
   The actual values that are input (or "passed") into a function when
   it is called are known as arguments.
   Then we can call testFun like this: testFun("Hello", "World");.
    We have passed two string arguments, Hello and World.
    Inside the function, param1 will equal the string Hello and param2 
    will equal the string World.
  Note that you could call testFun again with different arguments and the
   parameters would take on the value of the new arguments.
*/
    function functionName() {
      console.log("Hello World");
    }

    functionName()
    functionName()

//plusThree takes an argument for num and returns a value equal to num + 3

    function plusThree(num) {
      return num + 3;
     }
    const ansswer = plusThree(5);
    console.log(ansswer)

//-----------------------------------

  function functionWithArgs(a,b){

    console.log(a + b)
  }
  /*
    Return a Value from a Function with Return
    We can pass values into a function with arguments.
    You can use a return statement to send a value back out of a function.
  */
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