/* eslint-disable indent */
'use strict';

const dataCard ={
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


const name = document.querySelector('.name-person');
const job = document.querySelector('.work-space');
const inputName = document.querySelector('#firstName');
const inputJob = document.querySelector('#job');




function updateDataObject(event) {
    const value = inputName.value;
    if (value) {
        name.innerHTML = event.target.value;
    } else {
        name.innerHTML = 'Nombre Apellido';
    }
    updateDataCard('name',inputName.value);
    localStorage.setItem('dataCard', JSON.stringify(dataCard));
}

function updateDataCard(key, value){
    dataCard[key]= value;
}


inputName.addEventListener('keyup', updateDataObject);

function showJob(event) {

    const value = inputJob.value;

    if (value) {
        job.innerHTML = event.target.value;
    } else {
        job.innerHTML = 'Front-end developer';
    }

}

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
        } else {
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
// reciclar el checked en constante para eliminarlo
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

function getImage(event) {
    let myFile = event.target.files[0];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
}

//meto preview box aqui
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

//skills selection

function inputs() {

    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
        .then(response => response.json())
        .then(data => {
            console.log('data response: ', data);

            const divskills = document.querySelector('.container-checks');
            const dskills = data.skills;
            let divContent = '';
            let i = 1;
            for (const skill of dskills) {
                const skillContent = `<div class="check_styles"><label for="${[i]}"><input class="checkbox_input" type="checkbox" id="${[i]}" value=${skill} name="hability">${skill}</label></div>`;
                divContent += skillContent;
                i = i + 1;
            }
            divskills.innerHTML = divContent;

            const checkInput = document.querySelectorAll('.checkbox_input');
            console.log('Checkarray: ', checkInput);
            const ulBlue = document.querySelector('.skills__list');
            let liC = '';
            let acc = 0;

            function check(event) {
                for (let i = 0; i < checkInput.length; i++) {
                    if (acc < 3) {
                        if (checkInput[i] === event.currentTarget && checkInput[i].checked === true) {

                            const liContent = `<li class="skills__item skills__item--bg">${checkInput[i].value}</li>`;
                            liC += liContent;
                            acc = acc + 1;
                            console.log('checked value', checkInput[i].value);
                        }
                    }
                }
                ulBlue.innerHTML = liC;
                // console.log(acc);
                const li = document.querySelectorAll('.skills__item');
                // console.log('li0', li[0].innerHTML);
                // console.log('li1', li[1].innerHTML);
                // console.log('li2', li[2].innerHTML);
                let liC2 = '';
                let acc2 = 0;
                for (let i = 0; i < checkInput.length; i++) {
                    if (acc2 < 3 && checkInput[i].checked === true) {
                        console.log('i', i);
                        const liContent2 = `<li class="skills__item skills__item--bg">${checkInput[i].value}</li>`;
                        liC2 += liContent2;
                        acc2 = acc2 + 1;
                    }
                    ulBlue.innerHTML = liC2;
                }
            }
            for (let i = 0; i < checkInput.length; i++) {
                checkInput[i].addEventListener('click', check);
            }
        });
}

butonUnfold[1].addEventListener('click', inputs);



//API SERVICE

// Localstorage setup

// const localStore = JSON.parse(localStorage.getItem('cardValues')) || 

//TODO: Usar botones de reset y create sometime.
// const resetBtn = document.querySelector('.reset-btn');
// const createBtn = document.querySelector('.btn-create');
// const formData = document.querySelector('.fill'); // Form se repite y usamos el class .fill porque es unico
// const container = document.querySelector('.selectors-container');

// function writeCardToLocalStorage() {
    
//     //probando probando...
//     // event.preventDefault();
//     // Primero buscamos el color de paleta seleccionado
//     const color = colorList.querySelector('input[checked]');
//     localStore.pallete  = color.getAttribute('value');

//     // Ahora buscamos la fuente seleccionada
//     const font = fontList.querySelector('input[checked]');
//     localStore.typography = font.getAttribute('value');

//     // Ahora vamos a recoger el form de rellena
//     const formName = formData.querySelector('#firstName');
//     localStore.name = formName.value;

//     const formJob = formData.querySelector('#job');
//     localStore.job = formJob.value;

//     const formPhoto = formData.querySelector('.preview-img');
//     localStore.photo = formPhoto.getAttribute('src');

//     const formEmail = formData.querySelector('#email');
//     localStore.email = formEmail.value;

//     const formPhone = formData.querySelector('#phone');
//     localStore.phone = formPhone.value;

//     const formLinkedin = formData.querySelector('#linkedin');
//     localStore.linkedin = formLinkedin.value;

//     const formGithub = formData.querySelector('#github');
//     localStore.github = formGithub.value;

//     //GUARDO LOS VALORES EN STRING
//     localStorage.setItem('cardValues', JSON.stringify(localStore));
// }

// function retrieveDatafromLocalStore () {
//     const dataSaved = JSON.parse(localStorage.getItem('cardValues'));
//     if (!!dataSaved === true) {
//         console.log(dataSaved);
//         //me falta inyectarlo en la card
//     }
// }
// retrieveDatafromLocalStore ();

// function handleLocalStorage(){

//     writeCardToLocalStorage();

// }

// //HELP https://codepen.io/adalab/pen/WKeOQo?editors=1011
// container.addEventListener('change', handleLocalStorage);

//☝️☝️☝️ con todo este churro consigo que se salven los datos en local pero NO CONSIGO QUE SE PINTEN TRAS F5.
///fuck no consigo que se quede al refrescar la pagina 
//const savedData = JSON.parse(localStorage.getItem('cardValues'));
//esto lo he metido como or en el localStore
// function handleLocalStorage(){
    
//     if (!!dataSaved === true) {
//         console.log(dataSaved);
//     }
//     else {
//         writeCardToLocalStorage(dataSaved);
//     }
// }


// function retrieveDatafromLocalStore () {
//     let colorLocal = savedData.pallete;
// }
// let git = document.querySelector('#github');
// undefined
// git.value;
// "kjhkjh"
// git.value = 'rrrrr';
// "rrrrr"
