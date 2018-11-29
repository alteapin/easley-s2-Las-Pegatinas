'use strict';

const name = document.querySelector('.name-person');
const job = document.querySelector('.work-space');
const input = document.querySelector('.name');
const inputJob = document.querySelector('#job');

function showName (event){
    if(!input){
        name.innerHTML = event.target.value;
    }else {
        name.innerHTML = ('Nombre Apellido');
    }

}

input.addEventListener('keypress',showName);




