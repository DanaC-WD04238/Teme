
const nume = document.querySelector('#nume');
const prenume = document.querySelector('#prenume');
const age = document.querySelector('#varsta');
const btnSub = document.querySelector('#submitBtn');
const btnClear = document.querySelector('#clearBtn');
const peopleContainer = document.querySelector('#people');

btnSub.addEventListener('click', afiseazaDate);
btnClear.addEventListener('click', golesteCampuri);

function afiseazaDate(event) {
    event.preventDefault();
    if ( nume.value === '' || prenume.value === '' || age.value === '') {
        alert('Toate campurile trebuie completate')
    }else {
        console.log('Nume:', nume.value);
        console.log('Prenume:', prenume.value);
        console.log('Varsta:', age.value);

        const persoana = {
            nume: nume.value,
            prenume: prenume.value,
            varsta: age.value
        };
        adaugaPersoana(persoana);
    }

}

function golesteCampuri(event) {
    nume.value = '';
    prenume.value = '';
    age.value = '';
}

function adaugaPersoana(persoana) {
    const personDiv = document.createElement('div');
    personDiv.classList.add('person');

    const nameHeader = document.createElement('h1');
    nameHeader.textContent = `${persoana.nume} ${persoana.prenume}`;

    const ageHeader = document.createElement('h2');
    ageHeader.textContent = `Varsta: ${persoana.varsta}`;

    personDiv.appendChild(nameHeader);
    personDiv.appendChild(ageHeader);

    peopleContainer.appendChild(personDiv);
}
const initialPeople = [
    { nume: 'Popescu', prenume: 'Ion', varsta: 25 },
    { nume: 'Ionescu', prenume: 'Maria', varsta: 30 },
    { nume: 'Dinulescu', prenume: 'Carmen', varsta: 40},
    { nume: 'Cotiga', prenume: 'Daniela', varsta: 45},
    { nume: 'Cocolino', prenume: 'Pufos', varsta: 24},
    { nume: 'Vasilescu', prenume: 'Ioana', varsta: 38},
    { nume: 'Iliescu', prenume: 'Stefan', varsta: 27},
    { nume: 'Anton', prenume: 'Sorin', varsta: 30},
    { nume: 'Coman', prenume: 'Andi', varsta: 35},
    { nume: 'Dinulescu', prenume: 'Maria', varsta: 48},
  ];

  initialPeople.forEach(persoana => {
    adaugaPersoana(persoana);
  });

  const animalList = document.querySelector('#animalList');
  const saveBtn = document.querySelector('#saveBtn');

  const animale = [
    {specie: 'leu', nume: 'Simba', ani: 3},
    {specie: 'elefant', nume: 'Dumbo', ani: 10},
    {specie: 'rata', nume: 'Donald', ani: 2},
    {specie: 'veverita', nume: 'Scrat', ani: 4},
    {specie: 'caprioara', nume: 'Bamby', ani: 1},
    {specie: 'caine', nume: 'Bolt', ani: 5},
    {specie: 'urs', nume: 'Baloo', ani: 8},
    {specie: 'vulpe', nume: 'Robin Hood', ani: 16}
  ];
  function displayAnimale() {
    animalList.innerHTML = '';
    animale.forEach(animal =>{
        const li = document.createElement('li');
        li.innerHTML = `
        <strong>Specie:</strong ${animal.specie}<br>
        <storng>Nume:</strong> ${animal.nume}<br>
        <strong>Ani:</strong> ${animal.ani}`;

        animalList.appendChild(li);
    });

  }

  displayAnimale();

  saveBtn.addEventListener('click', () => {
    localStorage.setItem('animalList', JSON.stringify(animale));
    alert('Lista cu animale a fost salvata in Local Storage');
  })