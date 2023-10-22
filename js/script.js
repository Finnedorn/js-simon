/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Bonus :100: :
Realizzare l'esercizio con grafica e senza utilizzo di prompt ma con casella/e  di input
*/

simonSays();

function simonSays() {

    const play = document.getElementById('play');

    play.addEventListener('click', function() {
        
        //stabilisco quanti numeri creerò
        const numbersToGenerate = 5;
        //creo l'array dove inserirò i numeri rng
        let RngNumber = [];
        //richiamo il div che mostrerà i numeri da indovinare
        const guess = document.getElementById('guess');
        //richiamo il div da svelare
        const yourTurn = document.getElementById('yourTurn');

        //richiamo i form, ciascuno per uno dei numeri da ricordare
        const playernum01 = document.getElementById('num01');
        const playernum02 = document.getElementById('num02');
        const playernum03 = document.getElementById('num03');
        const playernum04 = document.getElementById('num04');
        const playernum05 = document.getElementById('num05');

        //creo un array dove inserirli
        let playerNums = [];

        //funzione di reset
        resetForm();

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

        //richiamo il pulsante di verifica
        const analyze = document.getElementById('analyze');

        //richiamo il div in cui piazzerò il risultato del gioco
        let result = document.getElementById('result');
        
        analyze.addEventListener('click', function() {
            //raccolgo i valori di ciascun form
            let num01 = parseInt(playernum01.value);
            let num02 = parseInt(playernum02.value);
            let num03 = parseInt(playernum03.value);
            let num04 = parseInt(playernum04.value);
            let num05 = parseInt(playernum05.value);
            //metto in un array i numeri raccolti dal value 
            //se 
            playerNums.push(num01, num02, num03, num04, num05);
            //creo un'array dove inserire gli elementi di match
            let resultList = [];
            //ogni elemento incluso in rngnumber pushalo in resultlist
            for(let i = 0; i < playerNums.length; i++) {
                if(RngNumber.includes(playerNums[i])) {
                    resultList.push(playerNums[i]);
                };
            };
            console.log(resultList);
            //se la lunghezza di rngnumber e resultlist è la stessa allora hai vinto
            if(RngNumber.length === resultList.length) {
                result.innerHTML = 'Bravo hai indovinato tutti i numeri !'; 
            } else {
                result.innerHTML = `Che Peccato! hai indovinato i seguenti numeri: ${resultList}`;
            };
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

    //creo una funzione di reset
    function resetForm() {
        yourTurn.classList.add('d-none');
        result.innerHTML = '';
        num01.value = '';
        num02.value = '';
        num03.value = '';
        num04.value = '';
        num05.value = '';
    };
};

