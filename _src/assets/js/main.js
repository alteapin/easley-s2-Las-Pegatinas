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


/* function fold(){

  /*  for (let i=0; i< hideBoxes.length ; i++){
        
    }*/
    //const newButon = hideBoxesevent.currentTarget;

    //for (const elements of hideBoxes){
      // elements.classList.toggle('hide-box');
        
   // }

//}/*






butonUnfold[0].addEventListener('click',fold);
butonUnfold[1].addEventListener('click',fold);
butonUnfold[2].addEventListener('click',fold);



const inputBlue = document.getElementById('pallete-blue');
const inputRed = document.getElementById('pallete-red');
const inputGrey = document.getElementById('pallete-grey');
const userCard = document.querySelector('.box-card');


const handleColorTheme = () => {
    userCard.classList.remove('color-blue', 'color-red');
     = event.currentTarget;
    
}


inputBlue.addEventListener('click', handleColorTheme);
inputRed.addEventListener('click', handleColorTheme);
