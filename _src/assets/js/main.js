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

//hide boxes

const hideBoxes = document.querySelectorAll('.bring-box');

const butonUnfold = document.querySelectorAll('.btn-unfold');


function fold(event){
    const newButton = event.currentTarget;
    for (let i = 0; i < hideBoxes.length; i++) {
        if (event.currentTarget === butonUnfold[i]) {

            if (hideBoxes[i].classList.contains('hide-box')) {
                // Elimina la clase
                hideBoxes[i].classList.remove('hide-box');
            } else { // Sino
                // Añade la clase hidden
                hideBoxes[i].classList.add('hide-box');
            }
        }
    }
}


butonUnfold[0].addEventListener('click',fold);
butonUnfold[1].addEventListener('click',fold);
butonUnfold[2].addEventListener('click',fold);


