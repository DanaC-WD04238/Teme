function afiseazaCuIntarziere() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const h1 = document.querySelector('h1');
            h1.style.display = 'block';           
            resolve();
        }, 2000); // Așteptăm 2 secunde înainte de a afișa h1
    });
}

function afiseazaVarsta() {
    afiseazaCuIntarziere().then(() => {
        const varsta = 45; 

        setTimeout(() => {
            const inputVarsta = prompt("Ghiceste vârsta mea: ");

            if (inputVarsta === String(varsta)) {
                const h2 = document.createElement('h2');
                h2.textContent = `Varsta mea este ${varsta} de ani.`;
                document.body.appendChild(h2);
            }    
            
        }, 2000); // Așteptăm 2 secunde înainte de a afișa promptul pentru vârstă
    });
}

afiseazaVarsta();



// Un h1 inițial este prezent în HTML, dar este ascuns 
// Am introdus (display: none) în CSS pentru a împiedica afișarea imediată a numelui.

// Am utilizat o promisiune pentru a aștepta afișarea h1 după o întârziere de 2 secunde, 
// utilizând setTimeout.

// După afișarea h1, se apelează funcția afiseazaVarsta(),
//  care afișează un prompt pentru ghicirea vârstei.

// Dacă utilizatorul ghicește vârsta corect, se afișează un h2 cu vârsta reală.


//  Aici așteaptăm 2 secunde înainte de a afișa h1 și apoi încă 
//  2 secunde înainte de a afișa promptul pentru ghicirea vârstei.






