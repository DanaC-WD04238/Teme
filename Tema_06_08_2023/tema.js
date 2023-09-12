
const nume = document.querySelector('h1');
const imagine = document.querySelector('img');
const descriere = document.querySelector('h2');
const portofoliu = document.querySelector('.portofoliu'); 
const portofoliuLista = document.querySelectorAll('.lista__portofoliu li');
const cunostinte = document.querySelector('.cunostinte');
const cunostinteLista = document.querySelectorAll('.lista__cunostinte li');

function getDataInConsole() {
  const textNume = nume.textContent;
  const srcImagine = imagine.src;
  const textDescriere = descriere.textContent;
  const textPortofoliu = portofoliu.textContent; 
  const portofoliuListaArr = Array.from(portofoliuLista).map(li => li.textContent);
  const textCunostinte = cunostinte.textContent;
  
  const htmlSubLista = document.querySelectorAll('.sub-lista1 li');
  const htmlCunostinte = Array.from(htmlSubLista).map(li => li.textContent);

  const cssSubLista = document.querySelectorAll('.sub-lista2 li');
  const cssCunostinte = Array.from(cssSubLista).map(li => li.textContent);

  const jsSubLista = document.querySelectorAll('.sub-lista3 li');
  const jsCunostinte = Array.from(jsSubLista).map(li => li.textContent);

  const cunostinteListaArr = [
    { category: 'HTML', skills: htmlCunostinte },
    { category: 'CSS', skills: cssCunostinte },
    { category: 'JavaScript', skills: jsCunostinte },
    'Angular (in progress)',
  ];

  console.log(textNume, srcImagine, textDescriere, textPortofoliu, portofoliuListaArr, textCunostinte, cunostinteListaArr);
}

getDataInConsole();

const persDanielaCotiga = {
    nume1: 'Cotiga',
    prenume: 'Daniela',
    imageSrc: './Dana.jpg',
    descriere: 'Locuiesc in Braila, imi place sa calatoresc impreuna cu familia mea, iubesc animalele, imi place sa citesc cand am timp si imi place inotul.',
    portofoliu: ['Order-Summary', 'Result-Summary-Card', 'Profile-Card', 
    'News-homepage-Card', 'Card-Sunnyside', 'Huddle_landing-Card',
    'Fylo-landing-Card', 'Homeworks', 'Space-tourism', 'Robots-site', 'Final project'],
    cunostinte: [
        {
            category: 'HTML',
            skills: ['List', 'Tables', 'Div & Span','Forms', 'IFrame', 'Audio & Video']
        },
        {
            category: 'CSS',
            skills: ['Colors', 'Backgrounds', 'Selectors', 'Text', 'Margin, Border, Padding', 
            'Box Sizing', 'Height & Width' , 'Fonts', 'Tables', 'Lists', 
            'Position', 'Display', 'Align', 'Css Responsive', 'Css Flex', 'Css grid']
        },
        {
            category: 'JavaScript',
            skills: ['Output', 'Input', 'Objects', 'If_Else', 'For Loops', 'While Loops', 'Let & Const', 
            'Array', 'Function', 'Oject', 'DOM', 'For Each', 
            'Map, Filter, Reduce and Find', 'Sort Array', 'Data Structure and Algorithms', 'OOP']
        },
        {
            category: 'Angular (in progress)'
            
        }
    ]
}
const numeElement = document.querySelector('h1');
const imagineElement = document.querySelector('img');
const descriereElement = document.querySelector('h2');
const portofoliuElement = document.querySelector('.portofoliu'); 
const portofoliuListaElement = document.querySelectorAll('.lista__portofoliu li');
const cunostinteElement = document.querySelector('.cunostinte');
const cunostinteListaElement = document.querySelectorAll('.lista__cunostinte li');

numeElement.textContent = `${persDanielaCotiga.nume1} ${persDanielaCotiga.prenume}`;
imagineElement.src = persDanielaCotiga.imageSrc;
imagineElement.style.width = '200px';
imagineElement.style.height = 'auto';
descriereElement.textContent = persDanielaCotiga.descriere;

portofoliuLista.innerHTML = '';

persDanielaCotiga.portofoliu.forEach((proiect) => {
  const proiectItem = document.createElement('li');
  proiectItem.textContent = proiect;
  portofoliuLista.appendChild(proiectItem);
});
  
cunostinteLista.innerHTML = '';

persDanielaCotiga.cunostinte.forEach((categorie) => {
  const categorieItem = document.createElement('li');
  categorieItem.textContent = `${categorie.category}:`;
  cunostinteLista.appendChild(categorieItem);
  
  if (categorie.skills.length > 0) {
    const skillsList = document.createElement('ul');
    categorie.skills.forEach((skill) => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
    });
    cunostinteLista.appendChild(skillsList);
  }
});
function enableDarkTheme() {
    document.body.classList.add('dark-theme');
}  
function disableDarkTheme() {
    document.body.classList.remove('dark-theme');
}
const lightThemeBtn = document.getElementById('lightThemeBtn');
const darkThemeBtn = document.getElementById('darkThemeBtn');
lightThemeBtn.addEventListener('click', disableDarkTheme);
darkThemeBtn.addEventListener('click', enableDarkTheme);

const footer = document.createElement('footer');
const today = new Date().toLocaleDateString('en-US');
footer.textContent = `Today's Date: ${today}`;
document.body.appendChild(footer);  
  
  
  