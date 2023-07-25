

// 1. Scrieti o functie care sa primeasca 2 argumente getMapedArray(arr, fn) 
//     si sa returneze un arr modificat in functie de valoarea fn pasata. Vedeti urmatoarele scenarii:

// 	-	fn (functia) sa specifice daca numarul este divizibil cu 10 (un array returnat de true sau false)
// 	-	fn care sa returneze marimea string-ului ex: ['abc', 'hello'] -> [3, 4] 
// 	-	fn care sa returneze varianta de numar al array-ului [1,3 '2', true] -> [1,3,2,1]

const arr = ['abc', 'hello', 'html', 10, 25, 30, 45, 50, 'casa', 'pisicuta', 'catelus'];
const getMapedArray = function(arr, fn) {
    const newArr = [];
    for (let el of arr) {
        newArr.push(fn(el))
      }
      console.log(newArr);
      return newArr;
}

const divide10List = getMapedArray(['abc', 'hello', 'html', 10, 25, 30, 45, 50, 'casa', 'pisicuta', 'catelus'] , function(val) {
    if (val % 10 === 0) {
        return 'true';
      } else {
        return 'false';
      }
});


const arr1 = ['abc', 'hello', 'html', 'casa', 'pisicuta', 'catelus'];
const marimeString = getMapedArray(['abc', 'hello', 'html', 'casa', 'pisicuta', 'catelus'], function(val) {
    return val.length;
       
});

const arr2 = [1, '5', 22, true, '78', false, 100, '1000', '29000', true];
const mixedArray = getMapedArray([1, '5', 22, true, '78', false, 100, '1000', '29000', true], function(val) {
    return Number(val);
});
  

  


// 2. Scrieti o functie getFilteredArray(arr, fn) care sa filtreze o functie 
//     si sa returneze doar valorile ce trec de conditia true (functia sa returneze un array
//     nou cu valorile filtrate)
        
//         -	fn o functie filtru care sa returneze doar numere
//         -	fn o functie care sa returneze doar string-uri
//         -	fn o functie care sa returneze numerele pare
//         -	fn o functie care sa returneze numerele mai mari ca 10 si mai mici ca 20, si pare

const list = ['pisicuta', 'catelus', 1, 4, 'html', 12, 'javascript', true, 15, 16, 18, 'pepene', 'rosii', 20, 26, 200, false];
const getFilteredArray = function(arr, fn) {
    const filteredList = [];
    for (let el of arr) {
      if (fn(el)) {
        filteredList.push(el);
      }
    }
    return filteredList;
  }
 const numList = getFilteredArray(['pisicuta', 'catelus', 1, 4, 'html', 12, 'javascript', true, 15, 16, 18, 'pepene', 'rosii', 20, 26, 200, false], (val) => {
    return typeof val === 'number';
  });
  console.log(numList);

 const striList = getFilteredArray(['pisicuta', 'catelus', 1, 4, 'html', 12, 'javascript', true, 15, 16, 18, 'pepene', 'rosii', 20, 26, 200, false], (val) => {
    return typeof val === 'string';
  });
  console.log(striList);
  const parList = getFilteredArray(['pisicuta', 'catelus', 1, 4, 'html', 12, 'javascript', true, 15, 16, 18, 'pepene', 'rosii', 20, 26, 200, false], (val) => {
    return typeof val === 'number' && val % 2 === 0;
  });
  console.log(parList);
  const mixList = getFilteredArray(['pisicuta', 'catelus', 1, 4, 'html', 12, 'javascript', true, 15, 16, 18, 'pepene', 'rosii', 20, 26, 200, false], (val) => {
    return typeof val === 'number' && val >= 10 && val <= 20 && val % 2 === 0;
  });
  console.log(mixList);




// 3. Scrieti o functie reduceList(arr, fn) care sa returneze o singura valoare
//     (reprezentand cumulul valorilor anterioare in functie de fn pasat)

// 	-	Scrieti fn si reduceList astfel incat sa se returneze o valoare = suma tuturor valorilor din array 
//         (folosindu-va de callback fn)
// 	-	Scrieti fn si reduceList astfel incat sa se returneze o valoare = inmultirea tuturor 
//         valorilor din array (folosindu-va de callback fn
	

const arrListUnu = [ 1, 2, 3, 7, 5, 10, 25];



const reduceList = function(arr, fn) {
    return arr.reduce(fn);
}

const sumList = reduceList(arrListUnu, (accumulator, currentValue) => accumulator + currentValue);
console.log(sumList);
const produsList = reduceList(arrListUnu, (accumulator, currentValue) => accumulator * currentValue);
console.log(produsList);