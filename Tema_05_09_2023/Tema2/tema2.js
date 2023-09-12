let timpRamas = 0;
let intervalID;

const timpElement = document.getElementById('timp');
const secundeInput = document.getElementById('secunde');
const startButton = document.getElementById('start');

function afiseazaTimp() {
    const minute = Math.floor(timpRamas / 60);
    const secunde = timpRamas % 60;
    const minuteFormatate = minute < 10 ? `0${minute}` : minute;
    const secundeFormatate = secunde < 10 ? `0${secunde}` : secunde;
    timpElement.textContent = `${minuteFormatate}:${secundeFormatate}`;
}

function startCronometru() {
    clearInterval(intervalID); // Oprim cronometrul anterior 

    const secundeAdaugate = parseInt(secundeInput.value, 10);
    timpRamas += secundeAdaugate;

    afiseazaTimp();

    intervalID = setInterval(function () {
        if (timpRamas > 0) {
            timpRamas--;
            afiseazaTimp();
        } else {
            clearInterval(intervalID);
            alert('Cronometru expirat!');
        }
    }, 1000);
}

startButton.addEventListener('click', startCronometru);

// Am creat un document HTML cu un element h1 pentru a afișa titlul cronometrului, 
// un span cu un id numit "timp" pentru a afișa timpul rămas, 
// un câmp de intrare de tip număr cu id "secunde" pentru a adăuga secunde 
// și un buton cu id "start" pentru a porni cronometrul.

// Am definit trei variabile globale:

// timpRamas este variabila în care vom ține evidența timpului rămas în secunde.
// intervalID este utilizat pentru a ține referința către intervalul 
// de actualizare a cronometrului creat cu setInterval.
// timpElement este o referință către elementul HTML în care vom afișa timpul rămas.
// Funcția afiseazaTimp() este responsabilă pentru afișarea timpului curent 
// în formatul "MM:SS" în elementul HTML cu id "timp". 
// Aceasta calculează minutele și secundele din timpRamas și le formatează pentru afișare.

// Funcția startCronometru() este apelată atunci când utilizatorul apasă butonul 
// "Start Cronometru". Aceasta oprește un cronometru existent (dacă există) cu clearInterval, 
// adaugă secundele specificate în câmpul de intrare la timpRamas, 
// afișează timpul rămas și pornește un nou cronometru cu setInterval.
//  Acest nou cronometru rulează o funcție anonimă la fiecare secundă care scade timpRamas cu 1 
//  și actualizează afișarea cronometrului. Dacă timpRamas ajunge la zero,
//   se oprește cronometrul și se afișează un mesaj de alertă.

// Am adăugat un eveniment click la butonul "Start Cronometru" pentru a apela funcția 
// startCronometru atunci când butonul este apăsat.






