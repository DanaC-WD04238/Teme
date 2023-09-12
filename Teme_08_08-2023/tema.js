
const nume = document.querySelector('h1');
const imagine = document.querySelector('img');
const descriere = document.querySelector('h2');
const portofoliu = document.querySelector('.portofoliu');
const portofoliuLista = document.querySelectorAll('.lista__portofoliu li');
const cunostinte = document.querySelector('.cunostinte');
const cunostinteLista = document.querySelectorAll('.lista__cunostinte li');

function afiseazaDateInConsola() {
    const textNume = nume.textContent;
    const srcImagine = imagine.src;
    const textDescriere = descriere.textContent;
    const textPortofoliu = portofoliu.textContent;
    const portofoliuListaArr = Array.from(portofoliuLista).map(li => li.textContent);
    const textCunostinte = cunostinte.textContent;
    const cunostinteListaArr = Array.from(cunostinteLista).map(li => li.textContent);
    console.log(textNume, srcImagine, textDescriere, textPortofoliu, portofoliuListaArr, textCunostinte, cunostinteListaArr);
}
afiseazaDateInConsola();

const numeElement = document.querySelector('h1');
const imagineElement = document.querySelector('img');
const descriereElement = document.querySelector('h2');
const portofoliuElement = document.querySelector('.portofoliu');
const portofoliuListaElement = document.querySelector('.lista__portofoliu'); 
const cunostinteElement = document.querySelector('.cunostinte');
const cunostinteListaElement = document.querySelector('.lista__cunostinte'); 

const persDanielaCotiga = {
    nume: 'Cotiga',
    prenume: 'Daniela',
    imageSrc: './Dana.jpg',
    descriere: 'Locuiesc in Braila, imi place sa calatoresc impreuna cu familia mea, iubesc animalele si inotul.',
    portofoliuLista: ['Order-Summary', 'Huddle_landing-card', 'News-homepage-card',
     'Profile_card', 'Result-Summary-Card', 'Order_summary', 'Fyli-landing-card', 
     'Homeworks', 'Robot-site', 'Space-tourism', 'Final Project'],
    cunostinteLista: ['Html: List, Tables, Div & Span, Forms, IFrame, Audio & Video',
     'Css: Colors, Backgrounds, Selectors, Margin, Border, Padding, Box sizing, Text, Fonts, Position, Display, Css-responsive, Css-Flex, Css-Grid', 
     'Javascript: Output, Input, If_Else, For Loops, While Loops, let & const, Array, Function, For Each, Map, Filter, Reduce, Find', 'Angular(in progress)']
}

numeElement.textContent = `${persDanielaCotiga.nume} ${persDanielaCotiga.prenume}`; 
imagineElement.src = persDanielaCotiga.imageSrc;
imagineElement.style.width = '150px';
imagineElement.style.height = 'auto';
imagineElement.style.borderRadius = '30px'
descriereElement.textContent = persDanielaCotiga.descriere;


portofoliuListaElement.innerHTML = '';
persDanielaCotiga.portofoliuLista.forEach((proiect) => {
  const proiectItem = document.createElement('li');
  proiectItem.textContent = proiect;
  portofoliuListaElement.appendChild(proiectItem);
});


cunostinteListaElement.innerHTML = '';
persDanielaCotiga.cunostinteLista.forEach((cunostinta) => {
    const cunostintaItem = document.createElement('li');
    cunostintaItem.textContent = cunostinta;
    cunostinteListaElement.appendChild(cunostintaItem); 
});


function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
}
const lightThemeButton = document.createElement('button');
lightThemeButton.textContent = 'Light Theme';
lightThemeButton.style.borderRadius = '10px';
lightThemeButton.style.width = '100px';
lightThemeButton.style.height = 'auto';
lightThemeButton.style.background = 'azure';


lightThemeButton.addEventListener('click', () => {
    document.body.classList.remove('dark-theme');
});

const darkThemeButton = document.createElement('button');
darkThemeButton.textContent = 'Dark Theme';
darkThemeButton.style.borderRadius = '10px';
darkThemeButton.style.width = '100px';
darkThemeButton.style.height = 'auto';
darkThemeButton.style.background = 'azure';

darkThemeButton.addEventListener('click', toggleDarkTheme);
document.body.appendChild(lightThemeButton);
document.body.appendChild(darkThemeButton);


const footer = document.createElement('footer');
const currentDate = new Date().toLocaleDateString('en-US');
footer.textContent = `Today's Date: ${currentDate}`;
footer.style.color = 'blue';


document.body.appendChild(footer);

