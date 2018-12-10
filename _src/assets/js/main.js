/* eslint-disable indent */
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
const colorList = document.querySelector('.colors-list');


const handleColorTheme = () => {
    userCard.classList.remove('color-grey', 'color-red');
    const colorSelected = event.currentTarget;
    const checkedAttribute = colorList.querySelector('input[checked]');

    if (colorSelected === inputRed) {
        userCard.classList.add('color-red');
        checkedAttribute.removeAttribute('checked');
        inputRed.setAttribute('checked', 'yes');
    } else if (colorSelected === inputGrey) {
        userCard.classList.add('color-grey');
        checkedAttribute.removeAttribute('checked');
        inputGrey.setAttribute('checked', 'yes');
    } else if (colorSelected === inputBlue) {
        userCard.classList.add('color-blue');
        checkedAttribute.removeAttribute('checked');
        inputBlue.setAttribute('checked', 'yes');
    }
};

inputBlue.addEventListener('click', handleColorTheme);
inputRed.addEventListener('click', handleColorTheme);
inputGrey.addEventListener('click', handleColorTheme);



//LINKING FONT FAMILY TO USER CARD

const ubuntuFont = document.getElementById('font-ubuntu');
const comicFont = document.getElementById('font-comic');
const montseFont = document.getElementById('font-montse');
const fontCard = document.querySelector('.card-header');
const fontList = document.querySelector('.fonts-list');

function handleFontTheme(){
    fontCard.classList.remove('font-ubuntu','font-comic','font-montse');
    const checkedAttribute = fontList.querySelector('input[checked]');

    const fontSelectedByUser = event.currentTarget;

    if(fontSelectedByUser === ubuntuFont) {
        fontCard.classList.add('font-ubuntu');
        checkedAttribute.removeAttribute('checked');
        ubuntuFont.setAttribute('checked', 'yes');
    }
    else if(fontSelectedByUser === comicFont){
        fontCard.classList.add('font-comic');
        checkedAttribute.removeAttribute('checked');
        comicFont.setAttribute('checked', 'yes');
    }
    else if(fontSelectedByUser === montseFont){
        fontCard.classList.add('font-montse');
        checkedAttribute.removeAttribute('checked');
        montseFont.setAttribute('checked', 'yes');
    }
}

ubuntuFont.addEventListener('click', handleFontTheme);
comicFont.addEventListener('click', handleFontTheme);
montseFont.addEventListener('click', handleFontTheme);

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


//add Image Feature
//button div contacto, con div add_image.
const uploadBtn = document.querySelector('.button_ad_image');
const inputImage = document.getElementById('img-selector');
const boxUserImage = document.querySelector('.card-img');
const previewImg = document.querySelector('.preview-img');

//TODO:   ask about FileReader
const fr = new FileReader();

function getImage(event){
    let myFile = event.target.files[0];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
}

function writeImage(event) {
    boxUserImage.style.backgroundImage = 'url(' + event.target.result + ')';
    previewImg.setAttribute('src', event.target.result);
}
function fileClick() {
    event.preventDefault();
    inputImage.click();
}

inputImage.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fileClick);
linked.addEventListener('keyup', handlerLinkedin);


//API SERVICE

// Localstorage setup

// const localStore = JSON.parse(localStorage.getItem('cardValues')) || 
const localStore ={
    'pallete': '',
    'typography': '',
    'name': '',
    'job': '',
    'photo': '',
    'email': '',
    'phone': '',
    'linkedin': '',
    'github': '',
    'skills': [''] //https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json
};

//TODO: Usar botones de reset y create sometime.
const resetBtn = document.querySelector('.reset-btn');
const createBtn = document.querySelector('.btn-create');
const formData = document.querySelector('.fill'); // Form se repite y usamos el class .fill porque es unico
const container = document.querySelector('.selectors-container');

function writeCardToLocalStorage() {
    
    function writeData (){

    
    //probando probando...
    // event.preventDefault();
    // Primero buscamos el color de paleta seleccionado
    const color = colorList.querySelector('input[checked]');
    localStore.pallete  = color.getAttribute('value');

    // Ahora buscamos la fuente seleccionada
    const font = fontList.querySelector('input[checked]');
    localStore.typography = font.getAttribute('value');

    // Ahora vamos a recoger el form de rellena
    const formName = formData.querySelector('#firstName');
    localStore.name = formName.value;

    const formJob = formData.querySelector('#job');
    localStore.job = formJob.value;

    const formPhoto = formData.querySelector('.preview-img');
    localStore.photo = formPhoto.getAttribute('src');

    const formEmail = formData.querySelector('#email');
    localStore.email = formEmail.value;

    const formPhone = formData.querySelector('#phone');
    localStore.phone = formPhone.value;

    const formLinkedin = formData.querySelector('#linkedin');
    localStore.linkedin = formLinkedin.value;

    const formGithub = formData.querySelector('#github');
    localStore.github = formGithub.value;

    //GUARDO LOS VALORES EN STRING
    localStorage.setItem('cardValues', JSON.stringify(localStore));
    }
    writeData();
    //LOS PARSEO, TENGO QUE INYECTARLOS OTRA VEZ EN LA PAGINA PERO NO SE COMO
    const dataSaved = JSON.parse(localStorage.getItem('cardValues'));

    //
    if (!!dataSaved === true) {
        console.log(dataSaved);
        const palleteChosen = localStore.pallete;
        const colorSel = palleteChosen.value;

    }
}
//HELP https://codepen.io/adalab/pen/WKeOQo?editors=1011
container.addEventListener('change', writeCardToLocalStorage);

//☝️☝️☝️ con todo este churro consigo que se salven los datos en local pero NO CONSIGO QUE SE PINTEN TRAS F5.

// function handleLocalStorage(){
    
//     if (!!dataSaved === true) {
//         console.log(dataSaved);
//     }
//     else {
//         writeCardToLocalStorage(dataSaved);
//     }
// }

// function retrieveDatafromLocalStore () {
//     const dataSaved = JSON.parse(localStorage.getItem('cardValues'));
//         dataSaved
// }

///fuck no consigo que se quede al refrescar la pagina 
//const savedData = JSON.parse(localStorage.getItem('cardValues'));
//esto lo he metido como or en el localStore


// function retrieveDatafromLocalStore () {
//     let colorLocal = savedData.pallete;

// }




// let git = document.querySelector('#github');
// undefined
// git.value;
// "kjhkjh"
// git.value = 'rrrrr';
// "rrrrr"