function capitalize(word) {
    const firstLetterCapitalized = word[0].toUpperCase();
    const restOfTheString = word.slice(1);
    return firstLetterCapitalized + restOfTheString;
  }
//This function will take the first later of an array and slice it 
// make it uppercase 
// and then + to an array

function lastElement(arr) {
    if (arr.length === 0) {
      return null;
    } else {
      return arr[arr.length - 1];
    }
  }
//The function should return the last element of the array(without removing the element).  
// If the array is empty, the function should return null.

function sumArray(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total;
  }
//a function called sumArray which accepts a single argument: an array of numbers.  
// It should return the sum of all the numbers in the array.

function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
      return null;
    } else {
      return days[num - 1];
    }
  }
//a function called returnDay. 
//this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.) 
//If the number is less than 1 or greater than 7, the function should return null. 
//In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

[3,5,7,8,9,11,43,5345,545].reduce((accumulator, currentValue) =>
{
return accumulator + currentValue;
});

//reducer function will take the first two values from the array and add them
//then it'll take the return value and add it to the next value

