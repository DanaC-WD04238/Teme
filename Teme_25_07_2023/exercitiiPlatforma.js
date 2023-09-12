// Do it Yourself 1

// A. Write a Declaration function that accepts 3 numbers. The number return the max number.
// function maxBetween3Numbers(n1, n2, n3) {}
// B. Add a button with the caption find max.
// a. Add a paragraphs with id="max”.
// b. Write a script that receives 3 numbers from the prompt.
// c. The script will display on id="max” the max number (you must use the function from part A).
// d. Call the functions by pressing a button.


function maxBetween3Numbers(n1, n2, n3) {
    return Math.max(n1, n2, n3);
  }

  function findMax() {
    const num1 = parseFloat(prompt("Introduceți primul număr:"));
    const num2 = parseFloat(prompt("Introduceți al doilea număr:"));
    const num3 = parseFloat(prompt("Introduceți al treilea număr:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      document.getElementById('max').innerText = 'Introduceți numere valide';
    } else {
      const maxNumber = maxBetween3Numbers(num1, num2, num3);
      document.getElementById('max').innerText = "Numărul maxim este: " + maxNumber;
    }
  }


//   Do it Yourself 2

//   A. Write an expression function that accepts 3 numbers. The number return the max number.
//   function maxBetween3Numbers(n1, n2, n3) {}
//   B. Add a button with the caption find max.
//   a. Add a paragraphs with id="max”
//   b. Write a script that receives 3 numbers from the prompt.
//   c. The script will display on id = "max” the max number (you must use the function from part A).
//   d. Call the functions by pressing a button.
  
const maxBetween3Numbers1 = function(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

const findMax1 = function() {
    const num1 = parseFloat(prompt("Introduceți primul număr:"));
    const num2 = parseFloat(prompt("Introduceți al doilea număr:"));
    const num3 = parseFloat(prompt("Introduceți al treilea număr:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      document.getElementById('max1').innerText = 'Introduceți numere valide';
    } else {
      const maxNumber1 = maxBetween3Numbers(num1, num2, num3);
      document.getElementById('max1').innerText = "Numărul maxim este: " + maxNumber1;
    }
  }


//   Do it Yourself 3

//   A. Write an arrow function that accepts 3 numbers. The number return the max number.
// function maxBetween3Numbers(n1, n2, n3) {}
// B. Add a button with the caption find max.
// a. Add a paragraphs with id="max”
// b. Write a script that receives 3 numbers from the prompt.
// c. The script will display on id = "max” the max number (you must use the function from part A).
// d. Call the functions by pressing a button.

const maxBetween3Numbers2 = (n1, n2, n3) => Math.max(n1, n2, n3);

const findMax2 = function() {
    const num1 = parseFloat(prompt("Introduceți primul număr:"));
    const num2 = parseFloat(prompt("Introduceți al doilea număr:"));
    const num3 = parseFloat(prompt("Introduceți al treilea număr:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      document.getElementById('max2').innerText = 'Introduceți numere valide';
    } else {
      const maxNumber2 = maxBetween3Numbers(num1, num2, num3);
      document.getElementById('max2').innerText = "Numărul maxim este: " + maxNumber2;
    }
}


// Do it Yourself 4

// A. Write a declaration function that accepts array and return the maximum
// number.
// B. Call the function from A using arr = [1, 6, 2, 9] and alert the max number.


function findMaxNumber(arr) {
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}
const arr = [1, 6, 2, 9];
const maxNumber = findMaxNumber(arr);

alert(maxNumber);

// Do it Yourself 5

// A. Write an expression function that accepts array and displays in alert the
// maximum number.
// B. Call the function from A using arr = [1, 6, 2, 9] and alert the max number.


const findMaxNumber1 = (arr1) => {
  const max = Math.max(...arr1);
  alert(max);
};

const arr1 = [1, 6, 2, 9];
findMaxNumber1(arr1);


// Do it Yourself 6

// A. Write an arrow function that accepts array and displays in alert the maximum
// number.
// B. Call the function from A using arr = [1, 6, 2, 9] and alert the max number.

const findMaxNumber2 = (arr2) => {
  const max = Math.max(...arr2);
  alert(max);
};
const arr2 = [1, 6, 2, 9];
findMaxNumber2(arr2);



// Do it Yourself 7

// A. Write a declaration function that accepts array and number. The function
// return true if the number exist on the array.
// B. Call the function from A using arr = [1, 6, 2, 9] and num = 6, and alert if num
// exists in the array.


function checkNumberExists(arr3, numA) {
  return arr3.includes(numA);
}

const arr3 = [1, 6, 2, 9];
const numA = 6;
const numberExists = checkNumberExists(arr3, numA);


if (numberExists) {
  alert(`Numarul exista in array.`);
} else {
  alert(`Numarul nu exista in array.`);
}



// Do it Yourself 8

// A. Write an expression function that accepts array and number. The function
// return true if the number exist on the array.
// B. Call the function from A using arr = [1, 6, 2, 9] and num = 6, and alert if num
// exists in the array.



const checkNumberExists1 = (arr4, numA1) => arr4.includes(numA1);


const arr4 = [1, 6, 2, 9];
const numA1 = 6;
const numberExists1 = checkNumberExists1(arr4, numA1);


if (numberExists1) {
  alert(`Numarul se gaseste in array.`);
} else {
  alert(`Numarul nu se gaseste in array.`);
}



// Do it Yourself 9

// A. Write an arrow function that accepts array and number. The function return
// true if the number exist on the array.
// B. Call the function from A using arr = [1, 6, 2, 9] and num = 6 and alert if num
// exists in the array.

const checkNumberExists2 = (arr5, numA2) => arr5.includes(numA2);

const arr5 = [1, 6, 2, 9];
const numA2 = 6;
const numberExists2 = checkNumberExists(arr5, numA2);


if (numberExists2) {
  alert(`Numarul se afla in arr.`);
} else {
  alert(`Numarul nu se afla in arr.`);
}


// Do it Yourself 10

// A. Write a declaration function that accepts 3 numbers as a parameter and
// displays the minimum number in alert .
// B. Call the function from A with n1 = 3, n2 = 5, n3 = 9 and alert the minimum
// number.


function displayMinimumNumber(n1, n2, n3) {
  const min = Math.min(n1, n2, n3);
  alert(`The minimum number is:` + ' ' + min);
}
const n1 = 3;
const n2 = 5;
const n3 = 9;

displayMinimumNumber(n1, n2, n3);
