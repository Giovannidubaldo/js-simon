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
}, 30000) 