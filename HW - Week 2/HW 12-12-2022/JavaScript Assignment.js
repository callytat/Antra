// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output: 34223
function reverseNumber(num) {
  let newNum = num.toString().split("").reverse().join("");
  return Number(newNum);
}

console.log(reverseNumber(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not ?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.
function checkPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    let x = str[i];
    let y = str[j - i];
    if (x != y) {
      return false;
    }
  }
  return true;
}

function isPalindrome(str) {
  let ans = checkPalindrome(str);
  if (ans == true) {
    console.log("The passed string is a palindrome ");
  } else {
    console.log("The passed string NOT a palindrome");
  }
}

isPalindrome("madam");

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d, do, dog, o, og, g
function generateAllCombinations(str) {
  let combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combinations.push(str.slice(i, j));
    }
  }
  return combinations;
}
console.log(generateAllCombinations("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
function orderAlphabetically(str) {
  var arr = str.split("");
  let result = arr.sort().join("");
  return result;
}
console.log(orderAlphabetically("webmaster"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case.
// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox'
function capitalizeEachWord(str) {
  var array1 = str.split(" ");
  var newarray1 = [];
  for (var i = 0; i < array1.length; i++) {
    newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
  }
  return newarray1.join(" ");
}

console.log(capitalizeEachWord("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string.
// Example string: 'Web Development Tutorial'
// Expected Output: 'Development'
function findLongestWord(str) {
  var longestWord = str.split(" ").reduce(function (longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord;
}

console.log(findLongestWord("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5
function countVowels(str) {
  let vowelsList = "aeiouAEIOU";
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelsList.indexOf(str[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

console.log(countVowels("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
// Note: A prime number(or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function checkPrimeNumber(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(checkPrimeNumber(2));
console.log(checkPrimeNumber(12));

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.
function checkDataType(arg) {
  return typeof arg;
}

console.log(checkDataType("this is a string"));
console.log(checkDataType(true));
console.log(checkDataType({}));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function returnIdentityMatrix(n) {
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i === j) {
        console.log(" 1 ");
      } else {
        console.log(" 0 ");
      }
    }
    console.log("----------");
  }
}

console.log(returnIdentityMatrix(4));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively.
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4
function findNumbers(arr) {
  let secondGreatest = function (arr1) {
    return arr1.sort((a, b) => a - b)[1];
  };

  let secondLowest = function (arr2) {
    return arr2.sort((a, b) => b - a)[1];
  };

  return [secondGreatest(arr), secondLowest(arr)];
}

let [x, y] = findNumbers([1, 2, 3, 4, 5]);

console.log(x + "," + y);

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// - 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
//   2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
//   perfect numbers 496 and 8128.
function determineIfPerfectNumber(num) {
  var temp = 0;
  for (var i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }

  if (temp === num && temp !== 0) {
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}

determineIfPerfectNumber(8128);
determineIfPerfectNumber(360);

// 13. Write a JavaScript function to compute the factors of a positive integer.
function computeFactors(num) {
  let factors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) factors.push(i);
  }
  return factors;
}

console.log(computeFactors(30));
console.log(computeFactors(40));
console.log(computeFactors(50));

// 14. Write a JavaScript function to convert an amount to coins.
//     Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
//     Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//     Output: 25, 10, 10, 1
function convertToCoins(amount, coins) {
  let result = [];
  for (let i = 0; i < coins.length; i++) {
    for (let j = 0; j < Math.floor(amount / coins[i]); j++)
      result.push(coins[i]);
    amount %= coins[i];
  }
  return result;
}

console.log(convertToCoins(46, [25, 10, 5, 2, 1]));
console.log(convertToCoins(50, [25, 10, 5, 2, 1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
//     bases. Accept b and n from the user and display the result.
function computeExponent(b, n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = b * result;
  }
  return result;
}

console.log(computeExponent(2, 3));

// 16. Write a JavaScript function to extract unique characters from a string.
//     Example string: "thequickbrownfoxjumpsoverthelazydog"
//     Expected Output: "thequickbrownfxjmpsvlazydg"
function extractUniqueCharacters(str) {
  let unique = "";
  for (let i = 0; i < str.length; i++) {
    if (unique.indexOf(str[i]) === -1) {
      unique += str[i];
    }
  }
  return unique;
}

console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function countCharacters(str) {
  let map = new Map();
  for (let char of str) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }
  return map;
}

console.log(countCharacters("The quick brown fox jumps over the lazy dog"));

// 18. Write a function for searching JavaScript arrays with a binary search.
//     Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
//     the desired value.
function binarySearch(arr, t) {
  var i = 0,
    l = arr.length,
    m;

  while (i < l) {
    m = Math.floor((i + l) / 2);
    if (t <= arr[m]) l = m;
    else i = m + 1;
  }

  if (arr[i] === t) return i;
  else return -1;
}
var testArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(binarySearch(testArray, 6));

// 19. Write a JavaScript function that returns array elements larger than a number.
function largerElements(arr) {
  return arr.filter((el) => el > 9);
}

console.log(largerElements([11, 45, 4, 31, 64, 10]));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
//     Sample character list:
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateRandomId(n) {
  let characterList =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789";
  let id = "";

  for (var i = 0; i < n; i++) {
    let randomNumber = Math.floor(characterList.length * Math.random());
    id += characterList.charAt(randomNumber);
  }
  console.log(id);
}
generateRandomId(1);
generateRandomId(4);
generateRandomId(10);

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
//     combinations in an array.
//     Sample array: [1, 2, 3] and subset length is 2
//     Expected output: [[2, 1], [3, 1], [3, 2]]
function computeSubsetCombinations(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

console.log(computeSubsetCombinations([1, 2, 3]));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
//     will count the number of occurrences of the specified letter within the string.
//     Sample arguments: 'microsoft.com', 'o'
//     Expected output: 3
function countLetterOccurences(str, letter) {
  var letterCount = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letterCount += 1;
    }
  }
  return letterCount;
}

console.log(countLetterOccurences("microsoft.com", "o"));

// 23. Write a JavaScript function to find the first not repeated character.
//     Sample arguments: 'abacddbec'
//     Expected output: 'e'
function findFirstNotRepeatedChar(str) {
  let count = 0;
  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    let index = str.indexOf(str[i], 0);
    while (index != -1) {
      count++;
      index = str.indexOf(str[i], index + 1);
    }
    if (count === 1) str2 += str[i];
    count = 0;
  }
  return str2[0];
}

console.log(findFirstNotRepeatedChar("abacddbec"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
//     Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
//     sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
//     each pair of adjacent items and swapping them if they are in the wrong order".
//     Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
//     Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr;
}

console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

// 25. Write a JavaScript function that accept a list of country names as input and returns the
//     longest country name as output.
//     Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//     Expected output: "United States of America"
function longestCountryName(arr) {
  return arr.reduce((a, b) => (a.length > b.length ? a : b));
}

console.log(
  longestCountryName(["Australia", "Germany", "United States of America"])
);

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
//     characters.
function longestSubstring(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (newStr.indexOf(str[i]) === -1) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(longestSubstring("The quick brown fox jumps over the lazy dog"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
//     Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
//     symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
//     given string that is also a palindrome. For example, the longest palindromic substring of
//     "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
//     example, in the string "abracadabra", there is no palindromic substring with length greater than
//     three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
//     In some applications it may be necessary to return all maximal palindromic substrings (that is, all
//     substrings that are themselves palindromes and cannot be extended to larger palindromic
//     substrings) rather than returning only one substring or returning the maximum length of a
//     palindromic substring.
function longestPalindrome(str) {
  var resultStr = "";

  for (var i = 0; i < str.length; i++) {
    for (var j = i; j < str.length; j++) {
      var tempStr = str.substring(i, j + 1);

      if (
        tempStr.length > 1 &&
        tempStr == tempStr.split("").reverse().join("")
      ) {
        if (tempStr.length > resultStr.length) {
          resultStr = tempStr;
        }
      }
    }
  }
  return resultStr;
}

console.log(longestPalindrome("abracadabra"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
function test(callback) {
  callback();
}

function functionHello() {
  console.log("Hello");
}

test(functionHello);

// 29. Write a JavaScript function to get the function name.
function getFunctionName(f) {
  return f.name;
}
console.log(getFunctionName.name);
