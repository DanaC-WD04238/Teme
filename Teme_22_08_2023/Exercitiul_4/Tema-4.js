const countryForm = document.querySelector('#countryForm');
const taraInput = document.querySelector('#tara');
const imagineInput = document.querySelector('#imagine');
const populatieInput = document.querySelector('#populatie');
const pibInput = document.querySelector('#pib');
const descriereInput = document.querySelector('#descriere');
const countryCards = document.querySelector('#countryCards');

const tari = [
    {
      tara: 'România',
      imagine: 'romania.png',
      populatie: 19500000,
      pib: 25000000000,
      descriere: 'România este un stat situat în sud-estul Europei Centrale, pe cursul inferior al Dunării, la nord de peninsula Balcanică și la țărmul nord-vestic al Mării Negre. Pe teritoriul ei este situată aproape toată suprafața Deltei Dunării și partea sudică și centrală a Munților Carpați. Se învecinează cu Bulgaria la sud, Serbia la sud-vest, Ungaria la nord-vest, Ucraina la nord și est și Republica Moldova la est, iar țărmul Mării Negre se găsește la sud-est.De-a lungul istoriei, diferite porțiuni ale teritoriului de astăzi.'
    },
    {
      tara: 'Franța',
      imagine: 'france.png',
      populatie: 67000000,
      pib: 2900000000000,
      descriere: 'Franța , recunoscută în mod oficial ca Republica Franceză , este o republică constituțională unitară având un mod de guvernare semi-prezidențial, mare parte din teritoriul său și din populație fiind situată în Europa de Vest, dar care cuprinde și mai multe regiuni și teritorii răspândite în toată lumea. Capitala sa este orașul Paris, limba oficială este franceza iar moneda este euro. Deviza națională este „Libertate, egalitate, fraternitate”, iar drapelul Franței este format din trei benzi verticale colorate.'
    },
    {
      tara: 'Germania',
      imagine: 'germania.png',
      populatie: 83000000,
      pib: 4700000000000,
      descriere: 'Republica Federală Germania, acronim RFG, colocvial, Germania, este un stat în Europa Centrală. Face parte din organizații internaționale importante, precum: Consiliul Europei (1951), OCDE, Uniunea Vest-Europeană (1954), NATO (1955), Uniunea Europeană (1957), ONU (1973), OSCE, și din zona euro. Se învecinează: la nord - cu Marea Nordului, Danemarca și Marea Baltică; la est - cu Polonia și Republica Cehă; la sud - cu Austria și Elveția; iar la vest - cu Franța, Luxemburg, Belgia și Țările de Jos.  '
    },
    {
      tara: 'Mexic',
      imagine: 'mexic.png',
      populatie: 127000000,
      pib: 1300000000000,
      descriere: 'Mexic  este o țară situată în America de Nord, mărginită de Statele Unite ale Americii la nord și Belize și Guatemala la sud. Este cea mai nordică țară hispanică din America Latină și cea mai populată țară vorbitoare de limbă spaniolă din lume. Întrucât Mexic este de fapt o republică federală, numele oficial complet este Statele Unite Mexicane (Estados Unidos Mexicanos). Țara este frecvent numită Republica Mexicană (República Mexicana), dar și simplu Mexic, deși nu acestea sunt titlurile recunoscute oficial.'
    },
    {
        tara: 'Luxemburg',
        imagine: 'luxemburg.png',
        populatie: 680000,
        pib: 31000000000,
        descriere: 'Luxemburg , oficial Marele Ducat de Luxemburg, este o țară fără ieșire la mare, din vestul Europei. Se învecinează cu Belgia la vest și la nord, cu Germania la est, și cu Franța la sud. Capitala, Luxemburg, este, împreună cu Bruxelles și Strasbourg, una dintre cele trei capitale oficiale ale Uniunii Europene și sediul Curții Europene de Justiție, cea mai înaltă instanță judecătorească din UE. Cultura, oamenii și limbile vorbite sunt extrem de strâns legate cu țările vecine, fiind în esență un amestec cultural.'
    }
  ];

countryForm.addEventListener('submit',function(event) {
    event.preventDefault();

    if(taraInput.value === '' || imagineInput.files.length === 0 || populatieInput.value === '' || pibInput.value === '' || descriereInput.value === '') {
        alert ('Toate campurile trebuie completate.');
    }else {
        const country = {
            tara: taraInput.value,
            imagine: imagineInput.files[0].name,
            populatie: populatieInput.value,
            pib: pibInput.value,
            descriere: descriereInput.value,
        };
        adaugaTara(country);
        countryForm.reset();
    }
});

function adaugaTara(country) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = country.imagine;
  img.alt = country.tara;

  const h2 = document.createElement('h2');
  h2.textContent = country.tara;

  const p = document.createElement('p');
  p.textContent = country.descriere;

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p);

  countryCards.appendChild(card);
}

tari.forEach(tara => {
    adaugaTara(tara);
  });

 
saveBtn.addEventListener('click', () => {
    localStorage.setItem('countryList', JSON.stringify(tari));
    alert('Lista de țări a fost salvată în Local Storage.');
  });

  
const filtrarePibInput = document.querySelector('#filtrarePib');
const filtrarePopulatieInput = document.querySelector('#filtrarePopulatie');
const filteredCountries = document.querySelector('#filteredCountries');

filtrarePibInput.addEventListener('input', filtrareTari);
filtrarePopulatieInput.addEventListener('input', filtrareTari);

function filtrareTari() {
    const filtrarePibValue = parseInt(filtrarePibInput.value);
    const filtrarePopulatieValue = parseInt(filtrarePopulatieInput.value);

    const tariFiltrate = tari.filter(tara => {
      return tara.pib >= filtrarePibValue && tara.populatie >= filtrarePopulatieValue;
    });

    afisareTariFiltrate(tariFiltrate);
  }

function afisareTariFiltrate(tariFiltrate) {
    filteredCountries.innerHTML = '';

    tariFiltrate.forEach(tara => {
      const li = document.createElement('li');
      li.textContent = `${tara.tara} - PIB: $${tara.pib}, Populație: ${tara.populatie}`;
      filteredCountries.appendChild(li);
    });
  }