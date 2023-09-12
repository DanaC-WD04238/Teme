
class Persoana {
    constructor(id, nume, prenume, adresa_email, adresa, varsta, lastCheckedIn, timeSpentOnSite) {
        this.id = id;
        this.nume = nume;
        this.prenume = prenume;
        this.adresa_email = adresa_email;
        this.adresa = adresa;
        this.varsta = varsta;
        this.lastCheckedIn = lastCheckedIn;
        this.timeSpentOnSite = timeSpentOnSite;
    }
}

const users = [];

function renderTable() {
    const tbody = document.querySelector('#userTable tbody');
    tbody.innerHTML = '';
    
    users.forEach(user => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${user.nume}</td>
            <td>${user.prenume}</td>
            <td>${user.adresa_email}</td>
            <td>${user.adresa}</td>
            <td>${user.varsta}</td>
            <td>${user.lastCheckedIn}</td>
            <td>${user.timeSpentOnSite}</td>
            <td><button class="deleteBtn" data-id="${user.id}">Sterge</button></td>
        `;
    });
}

function addUser(event) {
    event.preventDefault();

    const nume = document.querySelector('#nume').value;
    const prenume = document.querySelector('#prenume').value;
    const adresa_email = document.querySelector('#adresa_email').value;
    const adresa = document.querySelector('#adresa').value;
    const varsta = parseInt(document.querySelector('#varsta').value);
    const lastCheckedIn = document.querySelector('#lastCheckedIn').value;
    const timeSpentOnSite = parseInt(document.querySelector('#timeSpentOnSite').value);

    if (!nume || !prenume || !adresa_email || !adresa || isNaN(varsta) || !lastCheckedIn || isNaN(timeSpentOnSite)) {
        alert('Toate campurile trebuie completate corect!');
        return;
    }

    const existingUser = users.find(user => user.nume === nume && user.prenume === prenume);
    if (existingUser) {
        alert('Acest utilizator exista deja!');
        return;
    }

    const id = new Date().getTime().toString();
    const newUser = new Persoana(id, nume, prenume, adresa_email, adresa, varsta, lastCheckedIn, timeSpentOnSite);
    users.push(newUser);

    renderTable();
    clearForm();
}

function deleteUser(event) {
    if (event.target.classList.contains('deleteBtn')) {
        const userId = event.target.getAttribute('data-id');
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            renderTable();
        }
    }
}

function clearForm() {
    document.querySelector('#userForm').reset();
}

document.querySelector('#userForm').addEventListener('submit', addUser);
document.querySelector('#userTable').addEventListener('click', deleteUser);

renderTable();

