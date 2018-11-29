'use strict';

const name = document.querySelector('.name-person');
const job = document.querySelector('.work-space');
const input = document.querySelector('#firstName');
const inputJob = document.querySelector('#job');

function showName (event){

    const value = input.value;

    if(value){
        name.innerHTML = event.target.value;
    }else {
        name.innerHTML = 'Nombre Apellido';
    }

}

input.addEventListener('keyup',showName);




