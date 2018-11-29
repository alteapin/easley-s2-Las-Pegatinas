'use strict';

const name = document.querySelector('.name-person');
const job = document.querySelector('.work-space');
const inputName = document.querySelector('#firstName');
const inputJob = document.querySelector('#job');

function showText (event){

    const value = inputName.value;

    if(value){
        name.innerHTML = event.target.value;
    }else {
        name.innerHTML = 'Nombre Apellido';
    }

}

function showJob (event){

    const value = inputJob.value;

    if(value){
        job.innerHTML = event.target.value;
    }else {
        job.innerHTML = 'Front-end developer';
    }

}

inputName.addEventListener('keyup',showText);
inputJob.addEventListener('keyup',showJob);




