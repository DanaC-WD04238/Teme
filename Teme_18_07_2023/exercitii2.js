
// 1. Scrieti o functie cu un parametru textString care sa o printeze pe consola daca este de tip string


const printShowString = function(textString) {
   
    if(typeof textString === 'string' && textString !== 'string') {
        return true;
    }else {
        return false;
    }
};
const textString = printShowString('Andreea') ;
console.log(textString);

//2. Scrieti o functie care sa returneze un numar random de la 1-100 getRandomNumber() -> 40


  const getRandomNumber = function(number) {
    return Math.floor(Math.random() * 100) +1;
};

const number = getRandomNumber() ;
console.log(number);

//3. Scrieti o functie care primeste un parametru numarMax, 
// si pe baza acelui numar sa returneze un array cu toate numerele naturale pana la acel numar
//  (ex getNumbersList(3) -> [1,2,3])

const getNumbersList = function(numarMax) {
    let num = [];
    for(let i = 0; i <= numarMax; i++){
        num.push(i);
    }
    return num;
};
const numarMax = getNumbersList(20);
console.log(numarMax);


//4. Scrieti o functie care verifica daca varsta unei persoane este mai mare de 18 ani. 
// ex: isAboveAgeLimit(29) -> true

const isAboveAgeLimit = function(age) {   
    if(age >= 18) {
        return true;
    }else {
        return false;
    }
};
const age = isAboveAgeLimit(25);
console.log(age);

// 5. Scrieti o functie care primeste un array de strings ca 
// si argumente si returneaza un array cu toate stringurile scrise cu litere mici
//  getLowerCaseList(['Html', 'Javascript', 'Java']) -> ['html', 'javascript', 'java']

const upperCaseLetter = ['Html', 'Javascript', 'Java', 'Css', 'Git'];
const getLowerCaseList = function(upperCaseLetter) {
    let litereMici = [];
    for(i = 0; i < upperCaseLetter.length; i++) {
        litereMici.push(upperCaseLetter[i].toLowerCase());
      
    }
    return litereMici;
};
const lowerCaseLetter = getLowerCaseList(upperCaseLetter);
console.log(lowerCaseLetter);

// 6. Scrietei o functie care returneaza o functie care returneaza o alta functie.
//  Fiecare functie sa aiba si un console.log1,2, si 3. 
//  Sa dati call la toate functiile astfel incat fiecare console.log din fiecare functie sa apara.

function getMultipleFunction() {
    const name = 'Andreea';
    console.log(name);
    return function() {
        const age = 15;
        console.log(age);
        return function() {
            const hobby = 'desen';
            console.log(hobby);
        }
    }
}

getMultipleFunction()()(); 

// 7. Scrieti o functie care sa introduca un element de html in pagina, 
// si de fiecare data cand este apelata functia sa fie introdusa inca una. 
// (un paragraf, sau un div)

const container = document.getElementById('container');
function insertElements() {
  container.innerHTML += '<div><p>Acesta este primul meu paragraph!</p></div>';
    
  }  
  
  insertElements();
  insertElements();
  insertElements();



//   8. Scrieti o functie care sa primeasca 2 argumente (un array de numere,  valoarea la puterea) 
//   si sa returneze un array cu fiecare numar la puterea  raisePowerList([1,2,3], 2) -> [1,4,9];



function getRaisePowerList(numberList, power) {
    const raisePowerList = [];
  
    for (let i = 0; i < numberList.length; i++) {
      let numereLaPutere = Math.pow(numberList[i], power);
      raisePowerList.push(numereLaPutere);
    }
  
    return raisePowerList;
  }
  
  const numberList = [2, 5, 9, 11, 22, 25];
  const power = 2;
  const numereLaPuteres = getRaisePowerList(numberList, power);
  console.log(numereLaPuteres); 

//   9. Scrieti o functie care sa primeasca un numar nedefinit de argumente, 
//   iar din toate argumentele primite in interiorul functiei sa se creeze un array si sa il returneze 
//   (hint: folositi-va de arguments, (folositi sintaxa function aici)
//     getArgumentsList(1,5,6,7,8,9) -> [1,5,6,7,8,9]



  function getArgumentsList() {
    let argumentsList = [];
    
    for (var i = 0; i < arguments.length; i++) {
      argumentsList.push(arguments[i]);
    }
    
    return argumentsList;
  }
  
  console.log(getArgumentsList(1, 5, 6, 7, 8, 9));

//   10. Incercati sa faceti o functie recursiva (care se apeleaza pe ea insusi)
//    care sa returneze rezultatul unui numar factorial getFactorial(3) -> 6.
//     Daca nu iasa recursiv, puteti face cu un loop.



function getFactorial(n) {
    let factorial = 1;
  
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  console.log(getFactorial(3));

//   11. Scrieti o functie care primeste ca argument o lista si returneaza o lista filtrata, 
//   in care raman doar numerele distincte puse in ordine crescatoare 
//   (fara sa folositi array.sort). filterNumbersList([1,5,3,3null, 'hello']) -> [1,3,5];


function filterNumbersList(list) {
  const distinctNumbers = [];
  for (let i = 0; i < list.length; i++) {    
    if (typeof currentElement === 'number' && !isNaN(currentElement)) {
      distinctNumbers.push(currentElement);     
    }
  }
  for( let i = 0; i < list.length - 1; i++) {
    if(distinctNumbers[i] > distinctNumbers[list.length - 1]) {
      distinctNumbers[i] = distinctNumbers[list.length - 1];
    }
    return distinctNumbers;
  }
}
const mixedList = [40, 20, 2, 'Braila', 'pisica', 80, 1, 'pisica', 3, 67];
const result = filterNumbersList(mixedList);
console.log(result);