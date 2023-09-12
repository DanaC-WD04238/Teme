const catFactDiv = document.getElementById('catFact');
const savedFactsList = document.getElementById('savedFacts');

document.getElementById('getCatFactBtn').addEventListener('click', async () => {
    try {
        
        const catResponse = await fetch('https://catfact.ninja/fact');
        const catData = await catResponse.json();

        if (catData && catData.fact) {
            const catFact = catData.fact;
            catFactDiv.innerHTML = `<p>${catFact}</p>`;
            addFactToSaved(catFact);
        } else {
            catFactDiv.innerHTML = '<p>Nu s-a găsit niciun fapt.</p>';
        }

        const breedUrl = 'https://catfact.ninja/breeds';
        const breedResponse = await fetch(breedUrl, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'X-CSRF-TOKEN': 'heXt82puwkMPI9gtYdrNoJ2QXZuneFzFcIehAQRz'
            }
        });
        const breedData = await breedResponse.json();
        
        console.log(breedData);

    } catch (error) {
        console.error('Eroare la cererea API:', error);
        catFactDiv.innerHTML = '<p>Eroare la obținerea faptului despre pisici sau informațiilor despre rase.</p>';
    }
});

function addFactToSaved(fact) {
    const listItem = document.createElement('li');
    listItem.textContent = fact;
    savedFactsList.appendChild(listItem);
}