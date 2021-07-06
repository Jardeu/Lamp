//const turnOn = document.getElementById('turnOn');
//const turnOff = document.getElementById('turnOff');
const turn = document.getElementById('turn');
const lamp = document.getElementById('lamp');
let cont = 0;

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
};

function lampOn() {
    turn.src = './img/botao-on.png';
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
};

function lampOff() {
    turn.src = './img/botao-off.png';
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
};

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
};

function incrementCont() {
    cont++;
    if (cont % 2 != 0) {
        lampOn();
    }
    else {
        lampOff();
    }
};

//turnOn.addEventListener('click', lampOn);
//turnOff.addEventListener('click', lampOff);
//lamp.addEventListener('mouseover', lampOn);
//lamp.addEventListener('mouseleave', lampOff);
turn.addEventListener('click', incrementCont);
lamp.addEventListener('dblclick', lampBroken);