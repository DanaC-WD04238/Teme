const imagini = [
    'https://static.eva.ro/img/auto_resized/db/article/142/365/210754l-1050x1050-b-d06e00e5/--5e00df30/locul-5.jpg',
    'https://static.eva.ro/img/auto_resized/db/article/142/365/266316l-1050x1050-b-cf7582fa/--caa06453/locul-7.jpg',
    'https://www.nationalfm.ro/data_files/mce_images/Septembrie/Animale_zambarete/animale_care_zambesc_12.jpg',
    'https://images-on-off.com/images/202/10samixkrasivixzhivotnixvmire-69715616.jpg',
    'https://i.ytimg.com/vi/gZ89pV-tZ04/maxresdefault.jpg',
    'https://static.eva.ro/img/auto_resized/db/article/196/825/982112l-650x487-b-e679505e.jpg',
    'https://cdn.toxel.ro/img/uploads/a16-28.jpg',
    'https://www.civilizatia.ro/wp-content/uploads/2017/01/Animals-in-snow-8.jpg',
    'https://www.hobby-zoo.ro/img/leul_alb_1.jpg',
  
  ];

  // Funcție pentru afișarea imaginilor cu întârziere 
  function afiseazaImagini(n) {
    const imageContainer = document.getElementById('imageContainer');
    let index = 0;

    function afiseazaUrmatoareaImagine() {
      if (index < imagini.length) {
        const imagine = document.createElement('img');
        imagine.src = imagini[index];
        imageContainer.appendChild(imagine);
        index++;

        setTimeout(afiseazaUrmatoareaImagine, n * 1000); // Afișează următoarea imagine după "n" secunde
      }
    }

    afiseazaUrmatoareaImagine();
  }