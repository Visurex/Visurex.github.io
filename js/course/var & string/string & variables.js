/*
/* var */    /* can be reused , can be modified, var keyword can NOT have block scope */
/* let */   /* must be Declared before use, cannot be Redeclared.have Block Scope   */
/* const */  /* must be assigned, cannot be Redeclared,cannot be Reassigned;have Block Scope 
*/

/* data type: 

undefined, null, boolean, string, symbol, bigint, number, and object.
 Number = numeric data. 64-bit Floating Point
*/

/* Operator	Description                                                
+	Addition                                                    
-	Subtraction                     
*	Multiplication                      
**	Exponentiation (ES2016)                     
/	Division                        
%	Modulus (Division Remainder)                        
++	Increment                       
--	Decrement                       
0.002 floating point numbers or floats.*/

/* Operator	Example	Same As
=	    x = y	    x = y
+=	    x += y	    x = x + y
-=	    x -= y	    x = x - y
*=	    x *= y	    x = x * y
/=	    x /= y	    x = x / y
%=	    x %= y	    x = x % y
**=	    x **= y	    x = x ** y
*/

let x = 0.2 + 0.1;
let u = (0.2 * 10 + 0.1 * 10) / 10;
  
let a = "a" ;
let b = 5;
let c = true;
let d = false;

a = "a" + " " + "e";

console.log(a)
console.log(b)
console.log(c)
console.log(d,c,b,a)
let myVar1 = 1;
myVar1 += 5;

let myVar2 = 1;
myVar2 -= 5;
let myVar3 = 1;
myVar3 *= 5;
let myVar4 = 1;
myVar4 /= 5;

console.log(myVar1,myVar2,myVar3,myVar4)
/* 
        ESCAPING CARACTERS      concatenation = a series of interconnected things

\'	single quote
\"	double quote
\\	backslash                  
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed */

// in JavaScript, String values are immutable, which means that they cannot be altered once created

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';

console.log(doubleQuoteStr, singleQuoteStr)

var e 
e = "i need a \"saw\" to cut three's"

console.log(e)

var e = " need to space \n\tit out \n\t\there   and \n\t\there "
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';

console.log(e)
console.log(e.length)
console.log(goodStr)

var e = " hey this 'is' it  "
console.log(e)
// You can find the length of a String value by writing .length after the string variable or string literal.
var e = "i need a number"
console.log(e.length)

var e = "i need a number" + " i need a second number"
console.log(e.length)

// the space character between caracters is also counted 

var v = "Visurex"
console.log (v.length)
console.log("Visurex".length,e)

// Use Bracket Notation to Find the First Character in a String 
console.log(v[5])

v = "Visurex" + " " + "Virus-Mx";

console.log(v)
// Use Bracket Notation to Find the Nth Character in a String
console.log(v.charAt(500)) 
console.log(v.charAt(15))

// you can get the value of the last letter of the string by using
var firstNamee ="ada"

console.log(firstNamee[firstNamee.length - 1])

firstNamee = firstNamee[firstNamee.length - 1]

console.log(firstNamee)

// fill empty spaces with variables

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "blabla " + myNoun + " blabla " + myAdjective + " blalla " + myVerb + " blabla " + myAdverb + " .";
console.log(wordBlanks)

const hey = "hey";
const how = "how";
const namee= "name";


const myWord = hey + " my\n" + namee + " is " + v;

console.log(myWord)

let myString = "This is the first sentence. ";
myString += "This is the second sentence.";
let myString22 = "This is the third sentence.";
console.log(myString,myString22)

const someAdjective = "Learning to code on freecodecam ";
let myStrcode = " is fucked up";

myStrcode += someAdjective;

console.log(myStrcode)
// for counting string

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

console.log(lastNameLength);

// for finding a caracter of string
let  firstLetterOfLastName 
const lastNameletter = "lovelace"

firstLetterOfLastName = lastNameletter[1]

console.log(firstLetterOfLastName)



