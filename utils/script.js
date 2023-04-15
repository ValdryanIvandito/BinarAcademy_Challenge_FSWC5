const value = ["scissors", "paper", "rock"];
let state = true;
let statebgm = true;
let valueOne, valueCom;

// let interval = 1000;
// let delay = 3250;

// let imageScissorsOne = document.querySelector('.bP1Scissors');
// let imagePaperOne = document.querySelector('.bP1Paper');
// let imageRockOne = document.querySelector('.bP1Rock');
// let imageScissorsCom = document.querySelector('.iPCScissors');
// let imagePaperCom = document.querySelector('.iPCPaper');
// let imageRockCom = document.querySelector('.iPCRock');
// let signs = document.querySelector('.tSigns');
// let audioContainer = document.querySelector('.audioContainer');
// let bgm = document.querySelector('.bgm');
// bgm.src = '../FF7Chocobo.mp3';

function rockP1() {
    valueOne = "rock";
    const result = gameStart(valueOne);
    return result;
}

function paperP1() {
    valueOne = "paper";
    const result = gameStart(valueOne);
    return result;
}

function scissorsP1() {
    valueOne = "scissors";
    const result = gameStart(valueOne);
    return result;
}

function winResultP1() {
    //console.log(`PLAYER1: ${valueOne} VS COM: ${valueCom}`);
    //console.log("PLAYER1 WIN!");
    state = false;
    statebgm = false;
    return "PLAYER1 WIN!";
    // signs.classList.add('tSignsWin');
    // signs.textContent = "PLAYER1 WIN";
    // bgm.src = '../FF7Victory.mp3';
}

function winResultPC() {
    //console.log(`PLAYER1: ${valueOne} VS COM: ${valueCom}`);
    //console.log("COM WIN!");
    state = false;
    return "COM WIN!";
    // signs.classList.add('tSignsWin');
    // signs.textContent = "COM WIN";
}

function drawResult() {
    //console.log(`PLAYER1: ${valueOne} VS COM: ${valueCom}`);
    //console.log("DRAW!");
    state = false;
    return "DRAW!";
    // signs.classList.add('tSignsDraw');
    // signs.textContent = "DRAW";
}

function gameStart(valueOne) {
    valueCom = Math.trunc(Math.random() * 3);
    valueCom = value[valueCom];

    //playerOne Win Scenario
    if(valueOne === 'scissors' && valueCom === 'paper') {
        const result = winResultP1();
        return { valueOne, valueCom, result };
        // imageScissorsOne.classList.add('hidden');
        // imagePaperCom.classList.add('hidden');
    }

    else if(valueOne === "paper" && valueCom === "rock") {
        const result = winResultP1();
        return { valueOne, valueCom, result };
        // imagePaperOne.classList.add('hidden');
        // imageRockCom.classList.add('hidden');
    }

    else if(valueOne === 'rock' && valueCom === "scissors") {
        const result = winResultP1();
        return { valueOne, valueCom, result };
        // imageRockOne.classList.add('hidden');
        // imageScissorsCom.classList.add('hidden');
    }

    //playerCom Win Scenario
    else if(valueCom === 'scissors' && valueOne === "paper") {
        const result = winResultPC();
        return { valueOne, valueCom, result };
        // imagePaperOne.classList.add('hidden');
        // imageScissorsCom.classList.add('hidden');
    }

    else if(valueCom === "paper" && valueOne === "rock") {
        const result = winResultPC();
        return { valueOne, valueCom, result };
        // imageRockOne.classList.add('hidden');
        // imagePaperCom.classList.add('hidden');
    }

    else if(valueCom === 'rock' && valueOne === "scissors") {
        const result = winResultPC();
        return { valueOne, valueCom, result };
        // imageScissorsOne.classList.add('hidden');
        // imageRockCom.classList.add('hidden');
    }

    //Draw Scenario
    else if(valueCom === 'rock' && valueOne === 'rock') {
        const result = drawResult();
        return { valueOne, valueCom, result };
        // imageRockOne.classList.add('hidden');
        // imageRockCom.classList.add('hidden');
    }

    else if(valueCom === 'paper' && valueOne === 'paper') {
        const result = drawResult();
        return { valueOne, valueCom, result };
        // imagePaperOne.classList.add('hidden');
        // imagePaperCom.classList.add('hidden');
    }

    else {
        const result = drawResult();
        return { valueOne, valueCom, result };
        // imageScissorsOne.classList.add('hidden');
        // imageScissorsCom.classList.add('hidden');
    }
}

function gameRestart() {
    state = true;
    // signs.textContent = "VS";
    // imageRockOne.classList.remove('hidden');
    // imagePaperOne.classList.remove('hidden');
    // imageScissorsOne.classList.remove('hidden');
    // imageRockCom.classList.remove('hidden');
    // imagePaperCom.classList.remove('hidden');
    // imageScissorsCom.classList.remove('hidden');
    // signs.classList.remove('tSignsWin');
    // signs.classList.remove('tSignsDraw');

    if(statebgm === false) {
        statebgm = true
        //bgm.src = '../FF7Chocobo.mp3';
    } 
}

module.exports = { rockP1, paperP1, scissorsP1, gameRestart };