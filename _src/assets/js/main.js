'use strict';

const name = document.querySelector('.name-person');
const job = document.querySelector('.work-space');
const inputName = document.querySelector('#firstName');
const inputJob = document.querySelector('#job');



function showText(event) {

    const value = inputName.value;

    if (value) {
        name.innerHTML = event.target.value;
    } else {
        name.innerHTML = 'Nombre Apellido';
    }

}

function showJob(event) {

    const value = inputJob.value;

    if (value) {
        job.innerHTML = event.target.value;
    } else {
        job.innerHTML = 'Front-end developer';
    }

}

inputName.addEventListener('keyup', showText);
inputJob.addEventListener('keyup', showJob);

//hide boxes

const hideBoxes = document.querySelectorAll('.bring-box');
const butonUnfold = document.querySelectorAll('.btn-unfold');
const butonfold = document.querySelectorAll('.btn-fold');
const button = document.querySelectorAll('button');

function fold(event) {
    const newButton = event.currentTarget;
    for (let i = 0; i < hideBoxes.length; i++) {
        if (newButton === butonUnfold[i] || newButton === butonfold[i]) {
            if (hideBoxes[i].classList.contains('hide-box')) {
                // Elimina la clase
                hideBoxes[i].classList.remove('hide-box');
                butonUnfold[i].classList.add('hide-box');
                butonfold[i].classList.remove('btn-fold');
            } else { // Sino
                // Añade la clase hidden
                hideBoxes[i].classList.add('hide-box');
                butonUnfold[i].classList.remove('hide-box');
                butonfold[i].classList.add('btn-fold');
            }
        }
        else {
            hideBoxes[i].classList.add('hide-box');
            butonUnfold[i].classList.remove('hide-box');
            butonfold[i].classList.add('btn-fold');
        }
    }

}


butonUnfold[0].addEventListener('click', fold);
butonUnfold[1].addEventListener('click', fold);
butonUnfold[2].addEventListener('click', fold);

butonfold[0].addEventListener('click', fold);
butonfold[1].addEventListener('click', fold);
butonfold[2].addEventListener('click', fold);


// PALLETES INPUTS

const inputBlue = document.getElementById('pallete-blue');
const inputRed = document.getElementById('pallete-red');
const inputGrey = document.getElementById('pallete-grey');
const userCard = document.querySelector('.box-card');


const handleColorTheme = () => {
    userCard.classList.remove('color-grey', 'color-red');
    const colorSelected = event.currentTarget;

    if (colorSelected === inputRed) {
        userCard.classList.add('color-red');
    } else if (colorSelected === inputGrey) {
        userCard.classList.add('color-grey');
    }
}

inputBlue.addEventListener('click', handleColorTheme);
inputRed.addEventListener('click', handleColorTheme);
inputGrey.addEventListener('click', handleColorTheme);



//LINKING FONT FAMILY TO USER CARD

const ubuntuFont = document.getElementById('font-ubuntu');
const comicFont = document.getElementById('font-comic');
const montseFont = document.getElementById('font-montse');
const fontCard = document.querySelector('.card-header');

function handleFonttheme(){
    fontCard.classList.remove('select-ubuntu','select-comic','select-montse');

    const fontSelectedByUser = event.currentTarget;

    if(fontSelectedByUser === ubuntuFont) {

        fontCard.classList.add('select-ubuntu');
    }
    else if(fontSelectedByUser === comicFont){
        fontCard.classList.add('select-comic');
    }
    else if(fontSelectedByUser === montseFont){
        fontCard.classList.add('select-montse');
    }
}

ubuntuFont.addEventListener('click', handleFonttheme);
comicFont.addEventListener('click', handleFonttheme);
montseFont.addEventListener('click', handleFonttheme);

//form

const mail = document.querySelector('#email');
const icons = document.querySelectorAll('.icons-card');
const phone = document.querySelector('#phone');
const github = document.querySelector('#github');
const linked = document.querySelector('#linkedin');

//form email

function handlersendMail() {
    icons[1].href = 'mailto:' + mail.value;
}

mail.addEventListener('keyup', handlersendMail);

//form telephone

function handlerPhone() {
    icons[0].href = 'tel: +34' + phone.value;
}

phone.addEventListener('keyup', handlerPhone);

//form github

function handlerGithub() {
    icons[3].href = 'https://github.com/' + github.value;
}

github.addEventListener('keyup', handlerGithub);

//form linkedin

function handlerLinkedin() {
    icons[2].href = 'https://linkedin.com/in/' + linked.value;
}

linked.addEventListener('keyup', handlerLinkedin);
