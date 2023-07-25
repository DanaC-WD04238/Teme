// Exercitii Array Methods.

// 1. Returnati un array nou cu fiecare element modificat din array-ul existent astfel incat
//  ['a','b','c','d','e'] -> [97,98,99,100,101] (echivalenta in ASCII al cifrelor -> numere)
// (folositi array.map)

const array = ['a','b','c','d','e', 'f', 'g', 'w', 'y', 'z', 'q'];

const newArray = array.map(function(elem) {
    return elem.codePointAt(0);
})
console.log(newArray);




// 2. Realizati o filtrare al array-ului [[], [1,23], [],[],[1,3]] -> astfel incat sa ramana doar valorile 
// [[1,23], [1,3]] (folositi array.filter)

const arr = [[], [1,23], [],[],[1,3]];

const filterArr = arr.filter((element) => {
    return element.length >0;
});
console.log(filterArr);




// 3. Returnati o propozitie string dintr-un array de string-uri ['A', 'fost', 'o', 'zi', 'frumoasa'] 
// folosindu-va de array.reduce

const stringArr = ['Una', 'dintre', 'minunatele', 'creaturi', 'de', 'pe', 'pamant:', 'Pisica', 'Caracal', '!'];
const sumStringArr = stringArr.reduce((curr, prev) => {
    return curr + ' ' +  prev;
});
console.log(sumStringArr);



// 4. Scrieti o functie care primeste un arr ca si parametru si o variabila de marimea taierii
//  incepand de la 0 trimArr(arr, maxCut), ex:	trimArr([1,2,3,4,5], 2) -> [3,4,5] (folositi array.slice)

const arr1 = [1, 2, 3, 4, 5, 10, 25, 39, 45, 100];
const sliceArr = 5;
const trimArr = function(arr1, sliceArr) {
    return arr1.slice(sliceArr);
}
const final = trimArr([1, 2, 3, 4, 5, 10, 25, 39, 45, 100], 5);
console.log(final);



// 5. Scrieti o functie care primeste 2 arrays ca si param concatArr(arr1, arr2) si 
// returneaza un array concatenat. ex: concatArr([1,2,3], ['a','b','c']) ->([1,2,3,'a','b','c']) 
// cautati voi ce puteti folosi (un array method).

const arrList1 = [1, 2, 3, 4, 5, 10, 25, 39, 45, 100];
const arrList2 = ['a', 'b', 'c', 'd', 'f', 'w', 'q'];
const concatArr = function(arrList1, arrList2) {
    return arrList1.concat(arrList2);
}
const rezultat = concatArr(arrList1, arrList2);
console.log(rezultat);



// Exercitiu obiect.

// 1. Faceti un obiect de tip masina, care sa aiba 
// proprietatile: marca: string, 
// anulFabricatiei: number, 
// culoare: string,
//  vitezaMax: number, 
//  si urmatoarele metode: getDetails() -> sa returneze un string cu toate detaliile masinii,
//   getYearsOfExistance ( anul curent - anulFabricatiei)

 


   
const masina = {
    marca: 'Toyota',
    anulFabricatiei: 2018,
    culoare: 'albastru',
    vitezaMax: 220,
    getDetails: function () {
      return `Marca: ${this.marca}, Anul fabricatiei: ${this.anulFabricatiei}, Culoare: ${this.culoare}, Viteza maxima: ${this.vitezaMax} km/h`;
    },
    getYearsOfExistance: function () {
      const anulCurent = new Date().getFullYear();
      return anulCurent - this.anulFabricatiei;
    }
  };
  
 
  console.log(masina.getDetails());
  console.log(masina.getYearsOfExistance());




// 2. Faceti 4 astfel de obiecte masini si stocati-le intr-o lista  masiniLista si iterati
//  toate obiectele si faceti console.log la marca. (4 marci in consola)

const car1 = {
    marca: 'Volvo',
    anFabricatie: 2022,
    culoare: 'gri',
    vitezaMax: 280
    
}
const car2 = {
    marca: 'Ford',
    anFabricatie: 2015,
    culoare: 'alb',
    vitezaMax: 230
}
const car3 = {
    marca: 'Aston Martin',
    anFabricatie: 2019,
    culoare: 'negru',
    vitezaMax: 360
}
const car4 = {
    marca: 'Jaguar',
    anFabricatie: 2016,
    culoare: 'rosu',
    vitezaMax: 320
}

const masiniLista = [car1, car2, car3, car4];
console.log("Marca fiecărei mașini din masiniLista:");
masiniLista.forEach(car => {
    console.log(car.marca);
  });

 
  
// 3. Faceti o iteratie astfel incat sa adaugati o proprietate noua la toate obiectele, 
// taraDeProvenienta: 'string'.
const propTara = 'taraDeProvebienta';
car1.taraDeProvinienta = 'Suedia';
car2.taraDeProvinienta = 'Romania';
car3.taraDeProvinienta = 'Germania';
car4.taraDeProvinienta = 'Italia';

  console.log("Proprietatea 'taraDeProvenienta' pentru fiecare mașină:");
masiniLista.forEach(car => {
    console.log(car.taraDeProvinienta);
});



// 4. Faceti o filtrare din care sa rezulte o lista noua 
// care sa va dea doar obiectele al caror proprietate getYearsOfExistance > 10.



const getYearsOfExistance = function () {
const anulCurent = new Date().getFullYear();
    return anulCurent - this.anFabricatie;
  };
  
const masiniFiltrate = masiniLista.filter(car => getYearsOfExistance.call(car) > 3);
console.log("Mașinile cu vechimea mai mare de 3 ani:");
  console.log(masiniFiltrate);