// Punto 1 readme.md
// Creo la funzione che mi genera numeri casuali da 1 a 100
function createNumbers(num){
    let flag = false;
    let number;

    while(flag == false){
        number = Math.floor(Math.random() * 100 + 1);

        if(num.includes(number) == false){
            flag = true;
        }
    }
    
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
let video = arrayNumbers();
document.getElementById('numbers').innerText = video;

// Punto 3 readme.md
// SetTimeout dopo 30 secondi nascondi numeri
setTimeout(function(){
    document.getElementById('numbers').innerText = '';
    document.getElementById('h1').innerText = '';
    document.getElementById('h2').innerText = 'Ora inserisci i numeri'
}, 30000) 

// Punto 4 readme.md
// SetTimeout per far inserire i numeri all'utente
setTimeout(function(){
    let user = [];
    let user_num;

    // Creo un array di 5 numeri inseriti dall'utente
    for(let i=0; i<5; i++){
        user_num = parseInt(prompt('Inserisci un numero'));
        user.push(user_num);
        
        // Confronto l'array di numeri generati casualmente dall'array di numeri inseriti dall'utente
        if(arrayNumbers == user){
            document.getElementById('result').innerText = 'YOU WIN!!!';
        }
        else{
            document.getElementById('result').innerText = 'YOU LOSE...';
        }
    }
    
    // Mostro nella pagina i risultati
    document.getElementById('h2').innerText = '';
    document.getElementById('numbers').innerText = `I numeri erano: ${video}`;
    document.getElementById('user-numbers').innerText = `Tu hai inserito: ${user}`;
    
}, 31000)