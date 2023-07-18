
// Calculul mediei aritmetice
let nota1 = 10;
let nota2 = 9;
let nota3 = 8;
let media = (nota1 +nota2 + nota3)/3;
document.getElementById("calcul").innerHTML = media;
console.log(media);

// Concatenarea sirurilor de caractere

let firstName;
let lastName;
let mesage;
firstName = "Daniela";
lastName = "Cotiga";
mesage = "Declarati trei variabile sir de caractere : nume, prenume, mesaj";
let fullName = firstName + " " + lastName;
document.getElementById("mesaj").textContent = fullName;
let finalMesage = fullName +  " "  + mesage;
document.getElementById("mesaj").textContent = finalMesage;
console.log(finalMesage);

// Convertirea temperaturii

let temperaturaCelsius = 35;
let temperaturaFahrenheit = temperaturaCelsius *(9/5) + 32;
document.getElementById("grade").innerHTML = temperaturaFahrenheit;
console.log(temperaturaFahrenheit);





