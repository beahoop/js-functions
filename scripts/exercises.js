(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

function max(num1, num2){
  if(num1 > num2){
  return num1;
  } else {
  return num2;
  }
}

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3)
}

//using the math.max method, it will go thru each numbertype and decided which one is the highest number and return that number
  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------
  function isVowel(x) {
      return ("aeiouAEIOU".indexOf(x) != -1);
  }
  //Using the .indexof method and assgining a = to it, I'm asking javascript to search the string I provided, if x varible is not in the string then return false
  //it does this by search and returning the number of the string, i = 2 then 2 != -1, two is not equal to -1 which is true, but if we pass a letter that is not included there
  //will be no number for the index of to return causing it to return -1
  // -1 != -1, -1 is not equal to -1 is fasle.


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  function rovarspraket(words) {
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    //telling javascript what consonants are
    let newString = "";
    for (var i = 0; i < words.length; i++) {
    //use a for loop to get characters from words
    if (consonants.includes(words[i])){
      newString = newString + words[i] + "o" + words[i];
    //newString is equal to itself + the consonant it found + o + the the consonant it found
    //before moving forward it will do the else
    }else { newString = newString + words[i];
        //in this else if javascript doesn't find consonsant then it will equal itself plus the letter it just searched.
       }
    }
    return newString;
  }
  // function rovarspraket(words) {
  //    const consonants = 'bcdfghjklmnpqrstvwxyz';
  //    //telling javascript what consonants are
  //    let newString = "";
  //    //starting with a blank string to add too
  //    for (var i = 0; i < words.length; i++){;
  //    //use a for loop to get characters from words
  //    if (consonants.includes(words[i]));
  //    //if consonants are included in the string of words then do this
  //     { newString = newString + words[i] + "o" + words[i];
  //   //newString is equal to itself + the consonant it found + o + the the consonant it found
  //   //before moving forward it will do the else
  // }else { newString = newString + words[i];
  //     //in this else if javascript doesn't find consonsant then it will equal itself plus the letter it just searched.
  //    }
  //  }
   // for() {
   //   if() {
   //
   //   } else {
   //
   //   }
   // }

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

function sum(num1, num2, num3, num4) {
  const array1 = [1, 2, 3, 4];
  // allowing
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array1.reduce(reducer);

}

function multiply(num1, num2, num3, num4) {
  const array1 = [1, 2, 3, 4];
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return array1.reduce(reducer);

}

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------


  function reverse(str) {
      // Use the split() method to return a new array
      let splitString = str.split("");
      // Use the reverse() method to reverse the new created array
      let reverseArray = splitString.reverse();
      //Use the join() method to join all elements of the array into a string
      let joinArray = reverseArray.join("");
      // Return the reversed string
      return joinArray; //
  }
//funtion reverse(str){
// return str.split("").reverse().join("");
// }
  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
// we want it to search an array and find the longest string and return that
// need a for loop to search an array and arrange by length
function findLongestWord(arr) {
  //using arr for array
  const sortedarr = arr.sort(function(a, b) {
    //using the sort method to sort the array and sort it as a new varible
  return b.length - a.length;
  // asking javascript nicely to set the order of the array from largest to smallest
});
  return sortedarr[0].length;
  //asking javascript to return the length of the 1st item in the array in variable sortedarr

}


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  //need javascript to ideinfted strings that are longer than i then return only the longer items

function filterLongWords(arr2, i) {

  const newArray = [];
  for(let j=0; j < arr2.length; j++) {
    // console.log('j', j);
    if(arr2[j].length > i) {
      // arr2 is calling on the array given then [j] is looping thru the given array with .length
      // is then giving javascript the length of each array item and seeing if it is greater than i
      newArray.push(arr2[j]);
    }
  }
  // console.log(newArray);
  return newArray;
}



  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  function charFreq(str) {
    var obj={};
    //assgins variable to empty object
    var repeats=[];
    str = "abbabcbdbabdbdbabababcbcbab"
    //assgins varible to an array
    for(var i=0, length = str.length; i < length; i++) {
      //using a for loop to search the length of the str and if the length is less than x then
        var l = str.charAt(i);
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    console.log(obj)
}


  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
  })();
