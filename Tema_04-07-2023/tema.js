
// 1. Creați o variabilă numită age și atribuiți-i o valoare numerică reprezentând vârsta unei persoane.
//  Utilizați o instrucțiune "if" pentru a verifica dacă persoana este eligibilă pentru a conduce. 
//  Dacă vârsta este mai mare sau egală cu 18, afișați mesajul "Puteți conduce!",
//   altfel afișați mesajul "Nu puteți conduce încă."

const age = 27;

if(age >= 18) {
    console.log('Puteti conduce!');    
} else {
    console.log('Nu puteti conduce inca!');
}

// 2. Creați două variabile, numar1 și numar2, și atribuiți-le valori numerice diferite.
//  Utilizați o instrucțiune "if-else" pentru a verifica care dintre cele două numere este mai mare și 
//  afișați mesajul corespunzător.

const numar1 = 150;
const numar2 = 285;

if(numar1 > numar2) {
    console.log('Numarul mai mare este' + ' ' +  numar1);
    console.log('Numarul mai mic este' + ' ' + numar2);
} else {
    console.log('Numarul mai mare este' + ' ' +  numar2);
    console.log('Numarul mai mic este' + ' ' + numar1);
}

// 3. Creați o variabilă temperatura și atribuiți-i o valoare numerică reprezentând temperatura în grade Celsius.
//  Utilizați o instrucțiune "if-else" pentru a verifica dacă temperatura este mai mare de 30 de grade Celsius.
//   Dacă este, afișați mesajul "Este o zi caldă!", altfel afișați mesajul "Temperatura este moderată."

const temperatura = 37;

if(temperatura > 30) {
    console.log('Este o zi calda!');
} else {
    console.log('Temperatura este moderata');
}

// 4. Creați o variabilă numar și atribuiți-i o valoare numerică.
//  Utilizați o instrucțiune "if-else" pentru a verifica dacă numărul este pozitiv, negativ sau zero.
//   Afișați mesajul corespunzător în funcție de rezultat.

const x = 35;

if(x > 0) {
    console.log('Numarul este pozitiv');
} else if(x <0) {
    console.log('Numarul este negativ');
} else {
    console.log('Numarul este egal cu ' + ' ' + 0);
}


// 5. Verificați dacă o variabilă numită variabila este definită și diferită de null. 
// Afișați mesajul "Variabila este definită" dacă este adevărat și "Variabila nu este definită" în caz contrar.

const variabila = 'Dana';


if(typeof variabila !== undefined && typeof variabila !== null) {
    console.log('Variabila este definita!');
} else {
    console.log('Variabila nu este definita!');
}


// 6. Verificați dacă o variabilă numită numar este mai mare decât 0 și mai mică sau egală cu 10. 
// Afișați mesajul "Numărul este cuprins între 0 și 10" dacă este adevărat
//  și "Numărul nu este în intervalul specificat" în caz contrar.

const numar = 8;

if(numar > 0 && numar <= 10) {
    console.log('Numarul este cuprins intre' + ' ' + 0 + ' ' + 'si' + ' ' + 10);
} else {
    console.log('Numarul nu este in intervalul specificat');
}



// 7. Creați o variabilă nota și atribuiți-i o valoare numerică reprezentând o notă obținută la un test. 
// Utilizați o instrucțiune "if-else" pentru a afișa un mesaj corespunzător, 
// în funcție de valoarea notei:
//     * Dacă nota este mai mare sau egală cu 90, afișați mesajul "Excelent!"
//     * Dacă nota este între 80 și 89, afișați mesajul "Foarte bine!"
//     * Dacă nota este între 70 și 79, afișați mesajul "Bine."
//     * Dacă nota este între 60 și 69, afișați mesajul "Satisfăcător."
//     * Dacă nota este mai mică de 60, afișați mesajul "Nu ați trecut."



const nota = 0;

if(nota >=3 && nota <= 100) {
    if(nota >= 90) {
        console.log('Excelent!');
    } else if(nota >= 80 && nota <= 89) {
        console.log('Foarte bine!')
    } else if(nota >=70 && nota <= 79) {
        console.log('Bine.')
    } else if(nota >=60 && nota <= 69) {
        console.log('Satisfacator.')
    }else if(nota < 60) {
        console.log('Nu ati trecut!!')
    }
} else {
    console.log('Punctajul nu este valid');
}