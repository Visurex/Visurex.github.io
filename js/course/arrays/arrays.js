
/*          Array's         */

const arraay = ["hey",["how",["third",["fourth",["fifth"],"fourth2"],"third2"],"yaw"],"your","doing"];

console.log(arraay[1][1][1][1][0]);

const arraayy = ["hey",8,["how",["third",["fourth",["fifth","fifth"],"fourth2"],"third2"],"yaw"],"your","doing"];

console.log(arraayy[2][1][1][1][1]);

//---------------------------------

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];

//Modify Array Data With Indexes.
//Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

const ourArray = [50, 40, 30];
ourArray[0] = 15;

const arry = ["first",["third"],"second"];

arry[0] = "50";
console.log(arry[0]);
console.log(arry);

arry[0] = "first";

arry[1][0] = "3";

console.log(arry);
arry[0] = "1";
arry[2] = "2";

console.log(arry);

console.log(ourArray);

/*
      Access Multi-Dimensional Arrays With Indexes
One way to think of a multi-dimensional array, is as an array of arrays.
When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array,
and each additional pair of brackets refers to the next level of entries inside. */

const myArrayyy = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  console.log(myArrayyy[3]);
  console.log(myArrayyy[3][0]);
  console.log(myArrayyy[3][0][1]);

//---------------------------------------

//Manipulate Arrays With push().
//An easy way to append data to the end of an array is via the push() function.
//The push() method adds new items to the end of an array.
//The push() method changes the length of the array.
//The push() method returns the new length.

const myArray = [];

  myArray.push("human");
  myArray.push("dog");
  myArray.push("horse","poney","donkey");
  myArray.push(["1","2"]);


console.log(myArray);
console.log(myArray[0],myArray[1],myArray[2]);

//-------------------------
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

console.log(arr1,arr2);
//-----------------------------------
const arrrray = [1,2,3,4,5];

array.push(100000000);
array.push([1,2]);
array.push([3,4]);

console.log(arrrray);


          /*  Manipulate Arrays With pop() */

/*.pop() is used to pop a value off of the end of an array.
 We can store this popped off value by assigning it to a variable. In other words,
  .pop() removes the last element from an array and returns that element.
Any type of entry can be popped off of an array - numbers, strings, even nested arrays.
The pop() method removes (pops) the last element of an array.
The pop() method changes the original array.
The pop() method returns the removed element.
*/

const aarray = [1,2,3];

console.log(aarray);
array.push(4);

console.log(aarray);
aarraypop = aarray.pop();

console.log(aarray);
console.log(aarraypop);

//---------------------------------

const myArrayyyyy = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArrayyyyy.pop();

console.log(removedFromMyArray);

/* Manipulate Arrays With shift()
pop() always removes the last element of an array. What if you want to remove the first?

It works just like .pop(), except it removes the first element instead of the last.
The shift() method removes the first item of an array.
The shift() method changes the original array.
The shift() method returns the shifted element. */

const aatrray = [
  ["hey !"],
  ["my name is "],
  ["andy"]
]
console.log(aatrray);

myShiftArray = aatrray.shift();
console.log(aatrray);
console.log(myShiftArray);

//------------------------------

const myArrayyyyyy = [["John", 23], ["dog", 3]];
const removedFromMyArrayy = myArrayyyyyy.shift();

  console.log(removedFromMyArrayy);




        /*    Manipulate Arrays With unshift() */
/*
Not only can you shift elements off of the beginning of an array,
 you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
.unshift() works exactly like .push(), but instead of adding the element at the end of the array,
 unshift() adds the element at the beginning of the array.

The unshift() method adds new elements to the beginning of an array.
The unshift() method overwrites the original array.
 */


const ourArray = ["Stimpson", "J", "cat"];
console.log(ourArray);

  ourArray.shift();
  console.log(ourArray);

    ourArray.unshift("Happy");
    console.log(ourArray);

//----------------------------------------------

const unShift = ["1","2","3"];
console.log(unShift);
const unShifted = unShift.shift();
console.log(unShift);
unShift.unshift("1");
console.log(unShift)
//------------------------
