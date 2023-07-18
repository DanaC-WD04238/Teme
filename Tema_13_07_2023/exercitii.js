
// Incercati sa nu folositi metode speciale al arrays (filter, map, reduce etc....care ar usura munca). Folositi doar for loop si array push, pop, shift, unshift..ce am invatat data trecuta. 

// 1. Definiti un array care sa contina o lista de judete, 
// un alt array o lista de cifre reprezentand numarul populatiei judetelor. 
// Faceti o iterare in care sa se afiseze denumirea judetului cu populatia asociata.

const numeJudete = ['Braila', 'Galati', 'Constanta', 'Iasi', 'Sibiu', 'Timisoara'];
const numarPopulatie = [340840, 300211, 656000, 794752, 388325, 305955];
console.log(numeJudete[0], numarPopulatie[0]);

const mixJudetPopulatie = [];

for (let i = 0; i < numeJudete.length; i++) {
    mixJudetPopulatie.push(numeJudete[i], numarPopulatie [i]);
  
    console.log(mixJudetPopulatie);
  }

//   2. Scrie o functie care primeste un array de numere si returnează suma tuturor numerelor din array, 
//   calculeaza media lor aritmetica cat si media lor geometrica.

const numereArray = [3, 5, 9, 11, 28, 30];
let sum = 0;
let prod = 1;
let mediaArit = 0;
let mediaGeo = 0;
for (let i = 0; i < numereArray.length; i++) {
    sum += numereArray[i];   
    prod *= numereArray[i];
    mediaArit = sum / numereArray.length;
    mediaGeo = Math.sqrt(prod);

}
console.log(sum, mediaArit, mediaGeo);

// 3.: Scrie o functie care gaseste si returneaza valoarea maxima dintr-un array de numere,
//  dar si valoarea minima



const numberList = [11, 25, 98, 100, 345, 1000];
let max = numberList[0];
let min = numberList[0];

for (let i = 1; i < numberList.length; i++) {
    if (numberList[i] > max) {
        max = numberList[i];
    }
    if (numberList[i] < min) {
        min = numberList[i];
    }  
}
console.log(max, min);




// 4. Scrie o functie care primeste un array de numere si 
// returneaza un array ce contine mai multe array-uri
//  grupate in functie de (numere pare, numere impare, numere divizibile cu 5) 
//  numarul divizibil cu 5 are prioritate in fata celor numere pare si numere impare.

const grupList = [2, 4, 7, 10, 22, 35, 71, 80]

function calculeazaLista(grupList) {
    const numerePare = [];
    const numereImpare = [];
    const numereDivizibile = [];
  
    for (let i = 0; i < grupList.length; i++) {

      const num = grupList[i];
  
      if (num % 5 === 0) {
        numereDivizibile.push(num);
      } else if (num % 2 === 0) {
        numerePare.push(num);
      } else {
        numereImpare.push(num);
      }
    }  
    return [[numereDivizibile], [numerePare], [numereImpare]];
  }
  
  const final = calculeazaLista(grupList);
  console.log(final);

// 5. Scrie o functie care primeste un array si 
// returneaza un nou array care contine doar valorile distincte din array-ul original

    const numList = [5, 15, 'Blue', 100, 'rosie', 'Blue', 5, 'a', 200, 'b', 'a', 'rosie', 100];

    function arataValalori(numList) {
    const distinctList = [];
  
        for (let i = 0; i < numList.length; i++) {
            const currentList = numList[i];
  
        let distinctive = true;
        for (let j = 0; j < distinctList.length; j++) {
            if (currentList === distinctList[j]) {
                distinctive = false;
                    break;
            }
        }  
        if (distinctive) {
            distinctList.push(currentList);
            }
        }  
         return distinctList;
    } 
  
    const result = arataValalori(numList);
    console.log(result);

// 6. Scrie o functie care primeste un array de numere si un interval specificat 
// (valoare minima si valoare maxima) si returneaza un nou array care 
// contine doar valorile din intervalul specificat.
const intervalArray = [0, 2, 3, 39, 45, 105, 400, 1007, 10050, 100000]
const minima = 2;
const maxima = 5;

function CalculeazaInterval(intervalArray, minima, maxima) {
    const valoareInterval = [];
    
    for (let i = 0; i < intervalArray.length; i++) {
      const valoareCurenta = intervalArray[i];
  
      if (valoareCurenta <= minima) {
        valoareInterval.push(valoareCurenta);
      }
      if(valoareCurenta >= maxima) {
        valoareInterval.push(valoareCurenta)
      }
    }
  
    return [valoareInterval];
  }
  
  const sfarsitInterval = CalculeazaInterval(intervalArray, minima, maxima);
  console.log(sfarsitInterval);

