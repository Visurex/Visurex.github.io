// Selecting from Many Options with Switch Statements
//  If you have many options to choose from, use a switch statement.
//   A switch statement tests a value and can have many case statements which define various possible values.
//    Statements are executed from the first matched case value until a break is encountered.
//     case values are tested with strict equality (===). The break tells JavaScript to stop executing statements.
//      If the break is omitted, the next statement will be executed.

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

// Adding a Default Option in Switch Statements
// In a switch statement you may not be able to specify all possible values as case statements.
// Instead, you can add the default statement which will be executed if no matching case 
// statements are found. Think of it like the final else statement in an if/else chain.
// A default statement should be the last case.

function myFunc(val) {
    let answer = "";
   
   switch(val){
       case 1:
       answer = "1";
       break;
   
       case 2:
       answer = "2";
       break;
     
       default:
       answer = "whatever";
       break;
   
     }
     return answer;
   }
   
   console.log(myFunc(2));

   //------------------------------------

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

// Multiple Identical Options in Switch Statements
//  If the break statement is omitted from a switch statement's case,
//  the following case statement(s) are executed until a break is encountered.
//   If you have multiple inputs with the same output,
//    you can represent them in a switch statement like this:
//     Cases for 1, 2, and 3 will all produce the same result.

function myFunc(val){

    switch(val){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            result = "1, 2, 3, 4 or 5";
        break
        case 6:
            result ="6";
    }
    return result;
}

console.log(myFunc(3));
//----------------------------------

function sequentialSizes(val) {
    let answer = "";
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
    return answer;
  }  
  console.log(sequentialSizes(1));


// Replacing If Else Chains with Switch
//  If you have many options to choose from,
//   a switch statement can be easier to write than many chained if/else if statements.

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

  // Counting Cards
// In the casino game Blackjack, a player can determine whether
//  they have an advantage on the next hand over the house by keeping 
//  track of the relative number of high and low cards remaining in the deck.
//   This is called Card Counting.
// 
// Having more high cards remaining in the deck favors the player.
//  Each card is assigned a value according to the table below. When the count is positive
//  , the player should bet high. When the count is zero or negative, the player should bet low.
// 
// Count Change	Cards
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'K', 'A'
 

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

  
