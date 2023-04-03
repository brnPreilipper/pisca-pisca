const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorsIndex = 0;
let intervalId = null;


const trafficLght = ( event ) => {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => {
    if (colorsIndex < 2) {
        colorsIndex++
    }else {
        colorsIndex = 0;
    }
}

const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[ colorsIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
    'lit': () => img.src = './img/ligado.png',
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval( changecolor, 400 )
}

buttons.addEventListener('click', trafficLght );