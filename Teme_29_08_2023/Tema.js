class Articol {
    #id;
    #titlu;
    #author;
    #dateCreated;
    #descriere;
    #image;
    #cuvinteCheie;

    constructor(id, titlu, author, dateCreated, descriere, image, cuvinteCheie) {
        this.#id = id;
        this.#titlu = titlu;
        this.#author = author;
        this.#dateCreated = dateCreated || new Date().toISOString().split('T')[0];
        this.#descriere = descriere;
        this.#image = image;
        this.#cuvinteCheie = new Set(cuvinteCheie);
    }

    get id() {
        return this.#id;
    }

    get titlu() {
        return this.#titlu;
    }

    get author() {
        return this.#author;
    }

    get dateCreated() {
        return this.#dateCreated;
    }

    get descriere() {
        return this.#descriere;
    }

    get image() {
        return this.#image;
    }

    get cuvinteCheie() {
        return [...this.#cuvinteCheie];
    }

    set titlu(newTitlu) {
        this.#titlu = newTitlu;
    }

    set author(newAuthor) {
        this.#author = newAuthor;
    }

    set dateCreated(newDate) {
        this.#dateCreated = newDate;
    }

    set descriere(newDescriere) {
        this.#descriere = newDescriere;
    }

    set image(newImage) {
        this.#image = newImage;
    }

    set cuvinteCheie(newCuvinteCheie) {
        this.#cuvinteCheie = new Set(newCuvinteCheie);
    }

    createHtmlEl() {
        const articleEl = document.createElement('article');
        articleEl.innerHTML = `
            <img src="${this.#image}" alt="${this.#titlu}">
            <h2>${this.#titlu}</h2>
            <span>Date created: ${this.#dateCreated}</span>
            <span>Author: ${this.#author}</span>
            <p>${this.#descriere}</p>
            <ul>
                ${[...this.#cuvinteCheie].map(tag => `<li>${tag}</li>`).join('')}
            </ul>
        `;
        return articleEl;
    }
}

window.addEventListener('load', () => {
    const container = document.getElementById('articoleContainer');
    const stiri = JSON.parse(localStorage.getItem('articole'));

    if (stiri) {
        stiri.forEach((article) => {
            const articleObj = new Articol(
                article.id,
                article.titlu,
                article.author,
                article.dateCreated,
                article.descriere,
                article.image,
                article.cuvinteCheie
            );
            const articleEl = articleObj.createHtmlEl();
            container.appendChild(articleEl);
        });
    } else {
        alert('Nu exista stiri !');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Când se trimite formularul
    const adaugaArticolForm = document.getElementById('adaugaArticolForm');

    adaugaArticolForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obținem valorile din formular
        const titlu = document.getElementById('titlu').value;
        const author = document.getElementById('author').value;
        const dateCreated = document.getElementById('dateCreated').value;
        const descriere = document.getElementById('descriere').value;
        const image = document.getElementById('image').value;
        const cuvinteCheie = document.getElementById('cuvinteCheie').value.split(',');

        // Creăm un nou articol
        const newArticol = new Articol(
            Date.now(),
            titlu,
            author,
            dateCreated,
            descriere,
            image,
            cuvinteCheie
        );

        // Adăugăm articolul în container și în stocarea locală
        const container = document.getElementById('articoleContainer');
        const articolEl = newArticol.createHtmlEl();
        container.appendChild(articolEl);

        const articoleLocalStorage = JSON.parse(localStorage.getItem('articole')) || [];
        articoleLocalStorage.push({
            id: newArticol.id,
            titlu: newArticol.titlu,
            author: newArticol.author,
            dateCreated: newArticol.dateCreated,
            descriere: newArticol.descriere,
            image: newArticol.image,
            cuvinteCheie: newArticol.cuvinteCheie,
        });
        localStorage.setItem('articole', JSON.stringify(articoleLocalStorage));

        // Resetam formularul
        adaugaArticolForm.reset();
    });
});
const filtrareButton = document.getElementById('filtrareButton');
filtrareButton.addEventListener('click', () => {
    const filtrareTitlu = document.getElementById('filtrareTitlu').value;
    const filtrareAutor = document.getElementById('filtrareAutor').value;

    filtrareArticole(filtrareTitlu, filtrareAutor);
});
function filtrareArticole(titlu, autor) {
    const container = document.getElementById('articoleContainer');
    const articole = container.getElementsByClassName('articol');

    for (let i = 0; i < articole.length; i++) {
        const articol = articole[i];
        const articolTitlu = articol.querySelector('h2').textContent;
        const articolAutor = articol.querySelector('span.author').textContent;

        if (
            (!titlu || articolTitlu.toLowerCase().includes(titlu.toLowerCase())) &&
            (!autor || articolAutor.toLowerCase().includes(autor.toLowerCase()))
        ) {
            articol.style.display = 'block';
        } else {
            articol.style.display = 'none';
        }
    }
}