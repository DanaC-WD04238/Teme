

// Exercitiul 1

const titlu = 'Batranul si marea';
const autor = 'Ernest Hemingway';
const dataPublicarii = 1952;
const scurtaDescriere = 'Bătrânul și marea spune un adevăr fundamental: în viață, printre toate suișurile și coborâșurile, printre toate greutățile și piedicile, un singur lucru ne ajută s-o scoatem la capăt: speranța. Cartea este mai mult decât povestea unui pescar cubanez care prinde un pește uriaș doar ca să-l scape. Este o poveste despre curaj și eroism, despre lupta interioară pe care o poartă omul cu propriile sale îndoieli, despre dorința arzătoare de a renunța când lucrurile se complică. E o carte care îți amintește că, uneori, poți să pierzi lucrurile pentru care ai muncit cel mai mult, dar niciodată nu trebuie să renunți la speranță. ';
const infoCarte = ( '  ' + 'Una din cartile mele favorite este' + ' ' + titlu + ' ,' + 'publicata in anul' + ' ' + dataPublicarii  + ' ,' +  'scrisa de ' + ' ' + autor + '. ' + scurtaDescriere);
console.log(infoCarte);


// Exercitiul 2

let cateta1 = 3;
let cateta2 = 4;
const ipotenuza = Math.sqrt(cateta1 ** 2 + cateta2 ** 2);
console.log(ipotenuza);

// Exercitiul 3

// Formula lui Heron 
let semiPerimetru = 8;
let latura1 = 6;
let latura2 = 7;
let latura3 = 4;
const arie = Math.sqrt(semiPerimetru * (semiPerimetru - latura1) * (semiPerimetru - latura2) * (semiPerimetru - latura3));
console.log(arie);


// Volumul trunchiului de con

let inaltime = 3;
let piSign = 3.14;
let razaMare = 4;
let razamica = 2;
const volum = piSign * inaltime / 3 * (razaMare ** 2 + razamica ** 2 + razaMare * razamica);
console.log(volum);