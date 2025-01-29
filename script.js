/*Milestone 2
Utilizzando Postman, testiamo una chiamata a questo endpoint:
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!*/


// 1. Seleziono l'elemento HTML dove far comparire le Card

const containerCards = document.getElementById("card-container");

// 2. Creo un Array dove salvare le card

let cards = [];
let totalCards = 1; //Questa variabile mi setta il numero di chiamate che andrò a fare

// 3. Creo una funzione per fare la chiamata all'API

function fetchPhotos() {

    fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => 
        data.forEach((photo) => {
            const card = document.createElement("div")
            card.classList.add("card", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-4");
        
            card.innerHTML= ` 
                 <img src="./assets_day1/img/pin.svg" class="pin">
                 <img id="img" src="${photo.url}" class="card-img-top pt-2" alt="${photo.title}">
                 <div class="card-body">
                 <h5 id="prima-riga" class="card-title h2">${photo.title}</h5>
                 <p id="seconda-riga" class="card-text h5">${photo.date}</p>
             </div>
             `;
        
        containerCards.appendChild(card);
    }))

    .catch(error => console.error('Errore:', error)); 
};

fetchPhotos(); // 4. Faccio partire la funzione
