/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Bonus :100: :
Realizzare l'esercizio con grafica e senza utilizzo di prompt ma con casella/e  di input
*/


const play = document.getElementById('play');

play.addEventListener('click', function() {

    const numbersToGenerate = 5;
    let RngNumber = [];
    const guess = document.getElementById('guess');
    const yourTurn = document.getElementById('yourTurn');

    //funzione di reset

    //creo un ciclo per ogni elemento da generare 
    while(RngNumber.length < numbersToGenerate) {
        //se il numero è gia presente lo pusho nell'array
        let extracted = getRndInteger(1, 100);
        RngNumber.push(extracted);
        if(!RngNumber.includes(extracted)) {
            RngNumber.push(extracted);
        };
    };
    console.log(RngNumber);
    //mostro i numeri della pagina
    guess.innerHTML = `Prova a memorizzare i seguenti numeri: ${RngNumber}`;

    //scattano i 30 sec e il div con la lista scompare, appare il form
    setTimeout(showForm, 5000);
    console.log(yourTurn);



    //richiamo i form, ciascuno per uno dei numeri da ricordare
    const playernum01 = document.getElementById('num01');
    const playernum02 = document.getElementById('num02');
    const playernum03 = document.getElementById('num03');
    const playernum04 = document.getElementById('num04');
    const playernum05 = document.getElementById('num05');
    //creo un array dove inserirli
    let playerNums = [];
    //richiamo il pulsante di verifica
    const analyze = document.getElementById('analyze');
    
    analyze.addEventListener('click', function() {
        //raccolgo i valori di ciascun form
        let num01 = parseInt(playernum01.value);
        let num02 = parseInt(playernum02.value);
        let num03 = parseInt(playernum03.value);
        let num04 = parseInt(playernum04.value);
        let num05 = parseInt(playernum05.value);
        //metto in un array i numeri raccolti dal value 
        playerNums.push(num01, num02, num03, num04, num05);
        console.log(playerNums);
    });
    

});

//creo una funzione per il form 
function showForm() {
    guess.innerHTML = '';
    yourTurn.classList.remove('d-none');
};

//rng per l'estrazione dei numeri
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};





/*
//creo un ciclo per ogni elemento da generare 
while(RngNumber.length < numbersToGenerate) {
    //se il numero è gia presente lo pusho nell'array
    let extracted = getRndInteger(1, 100);
    RngNumber.push(extracted);
    if(!RngNumber.includes(extracted)) {
        RngNumber.push(extracted);
    };
};
console.log(RngNumber);
//mostro i numeri della pagina
guess.innerHTML = `Prova a memorizzare i seguenti numeri: ${RngNumber}`;

//scattano i 30 sec e il div con la lista scompare, appare il form
setTimeout(showForm, 5000);
//creo una funzione per il form 
function showForm() {
    guess.innerHTML = '';
    yourTurn.classList.add('d-block');
};

//rng per l'estrazione dei numeri
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
*/