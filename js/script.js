// Punto 1 readme.md
// Creo la funzione che mi genera numeri casuali da 1 a 100
function createNumbers(num){
    let number = Math.floor(Math.random() * 100 + 1);

    return number;
}

// Punto 2 readme.md
// Inserisco i numeri casuali dentro un array;
function arrayNumbers(){
    let array = [];
    
    for(let i=0; i<5; i++){
        array.push(createNumbers(array));
    }
    
    return array
}

// Riprendo l'elemento in html per mostrare a video i numeri
let video = document.getElementById('numbers');
video.innerText = arrayNumbers();

// Punto 3 readme.md
// SetTimeout dopo 30 secondi nascondi numeri
setTimeout(function(){
    video.innerText = '';
    document.getElementById('h1').innerText = '';
    document.getElementById('h2').innerText = 'Ora inserisci i numeri'
}, 3000) 

// Punto 4 readme.md
// SetTimeout per far inserire i numeri all'utente
setTimeout(function(){
    // let num_1 = parseInt(prompt('Ora inserisci il primo numero'));
    // let num_2 = parseInt(prompt('Inserisci il secondo numero'));
    // let num_3 = parseInt(prompt('Inserisci il terzo nuemro'));
    // let num_4 = parseInt(prompt('Inserisci il quarto numero'));
    // let num_5 = parseInt(prompt('Inserisci il quinto numero'));
}, 4000)