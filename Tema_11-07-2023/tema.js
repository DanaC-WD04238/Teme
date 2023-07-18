
// 1. Scrieți un program care sa afișeze în consola, toate numerele divizibile cu 5 pana la 100. (For loop)

function handleClick() {
    for (let i = 0; i <= 100; i++) {
    
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}

// 2. Faceți o funcție căruia sa puteți sa ii pasați o variabila 
// (parametru a funcției, numarMaxim) astfel încăt sa puteți afișa toate numerele 
// divizibile cu 5 pana la numărul pe care îl adăugăm ca și argument. 
// (O îmbunătățire a primului. exercitiu)  (For loop)

let numarMaxim = "200";
function afisareNumere() {
    for(let i = 1; i <= numarMaxim; i++) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }  
}

//3.  Creati un program care sa calculeze factoialul unui număr  = 13  (For loop)

function factorialNumar() {
   
    let numar = 13;
    let fact = 1;
    for (i = numar; i >= 1; i--) {
       fact = fact * i;
        console.log(fact);
    }    
}

// 4. Creeati o functie care sa primeasca input un numar ca si variabila,
//  iar rezultatul sa fie factorialul acelui numar. (Strans legata de ex.3)  (For loop)


function getFactorial(num) {
    let totalValue = 1;
  
      if (num < 0) {
      return "Error.";
    } else if (num === 0) {
      return 1;
    } else {
      for (let i = 1; i <= num; i++) {
        totalValue *= i;
      }
      return totalValue;
    }
  }
  
  let number = 6;
  let result = getFactorial(number);
  console.log(`Factorial of ${number} is: ${result}`);

//   5. Creati un program care sa va ia o valoare input (prompt), 
// de tip string, adica un cuvant. Daca cuvantul este o variabila = ex: 'Bingo',
//  si utlizatorul introduce corect cuvantul in prompt, 
//  programul sa se opreasca si sa se afiseze in consola 'Ai nimerit'. 
//  Daca cuvantul nu este cel corect va apara un nou prompt cu mesajul ('Nu ai nimerit, mai incearca'). 
//  Daca nu nimeresti in 10 incercari, sa se incheie programul si sa se afiseze in consola 'Macar ai incercat' 
//  (while, do while)
// bonus

let cuvantPotrivit = "Bingo";
let incercari = 0;
let maxIncercari = 10;
let reusitCuvantPotrivit = false;

do {
  let userInput = prompt("Introdu cuvant:");
  incercari++;

  if (userInput === cuvantPotrivit) {
    console.log("Ai nimerit!");
    reusitCuvantPotrivit = true;
    break;
  } else {
    console.log("Nu ai nimerit, mai incearca.");
  }
} while (incercari < maxIncercari);

if (!reusitCuvantPotrivit) {
  console.log("Macar ai incercat!");
}

//6. Faceti o matrice (loop in loop) care sa creeze un text de forma  
//  (poate fi si patrat, dar sa fie gol pe dinauntru). 
//  Nu luati in considerare spatiul vertical, in pagina ar trebui sa fie destul de unite.   
//    10 x 10 ( interiorul sa fie gol), doar marginea sa apara
// *********.   
// *	    *		 
// *	    *
// *********

const lungime = 10;

for (let i = 0; i < lungime; i++) {
  let rand = "";
  if (i === 0 || i === lungime - 1) {
    
    rand = "*".repeat(lungime);
  } else {
    
    rand = "*" + " ".repeat(lungime - 2) + "*";
  }
  console.log(rand);
}

// 6.a bonus bonus, Sa faceti o functie care primeasca si o variabila de n x n (n = nr lungime) ex fn(20). 
//  sa fie matricea 20 x 20. 

function matrice(n) {
    let rand1 = "";
    
    for (let i = 0; i < n; i++) {
      if (i === 0 || i === n - 1) {
        rand1 += "*".repeat(n) + "\n";
      } else {
        rand1 += "*" + " ".repeat(n - 2) + "*\n";
      }
    }
  
    return rand1;
  }
  
  const rand1 = matrice(20);
  console.log(rand1);