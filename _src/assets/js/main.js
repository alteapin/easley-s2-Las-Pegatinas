"use strict";
//--------- Variables form-----------

// PALLETES INPUTS
//Refactor: each input radio check at the palette selector

const inputBlue = document.getElementById("pallete-blue");
const inputRed = document.getElementById("pallete-red");
const inputGrey = document.getElementById("pallete-grey");
const inputGum = document.getElementById("pallete-gum");
const inputPurple = document.getElementById("pallete-purple");
const userCard = document.querySelector(".box-card");
//palletes background
//Refactor: profile image placeholders for each palette
const backgroundBlue = "../assets/images/tiger.png";
const backgroundRed = "../assets/images/cebra5.png";
const backgroundGrey = "../assets/images/cocodrilo2.png";
const backgroundGum = "../assets/images/cat2.png";
const backgroundPurple = "../assets/images/panter7.png";


// email-phone-github-linked
//Refactor: boxes from formulary
const mail = document.querySelector("#email");
const icons = document.querySelectorAll(".icons-card");
const phone = document.querySelector("#phone");
const github = document.querySelector("#github");
const linked = document.querySelector("#linkedin");

//variablesname-job
const name = document.querySelector(".name-person"); //card name
const job = document.querySelector(".work-space"); //card job
const inputName = document.querySelector("#firstName"); //form
const inputJob = document.querySelector("#job"); //form
const resetBtn = document.querySelector(".reset-btn"); //card reset btn

//variables photo
const uploadBtn = document.querySelector(".button_ad_image");//btn "anadir imagen"
const inputImage = document.getElementById("img-selector"); //input type file to catch image, its hidden
const boxUserImage = document.querySelector(".card-img"); //main image
const previewImg = document.querySelector(".preview-img"); //small preview box

//Refactor
const ulBlue = document.querySelector('.skills__list');//selected skills ul list(html, css...)
const bgColor = document.querySelector('.build-card');//

//REFACTOR: LOCAL STORAGE EMPTY OBJECT
let dataCard = {
  pallete: "",
  typography: "",
  name: "",
  job: "",
  photo: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  skills: [],
  success: "",
  cardURL: "",
  error: ""
};

// cheking if exist data on localStorage
//Refactor: retrieve from LS data and assign it to let variable
let savedData = localStorage.getItem("data");
//Refactor: if we have LS, parse it and fill Form
if (savedData) {
  // to fill datacard
  dataCard = JSON.parse(savedData);
  fillSavedForm();
}

// fill form with data on localStorage
//refactor: modify this loooong function to separate ones and invoke them as callbacks into a wider one. For  ifs, use ternary operators
function fillSavedForm() {
  //refactor: create function for fill name and job
  if (dataCard.name) {
    name.innerHTML = dataCard.name;
  } else {
    name.innerHTML = "Nombre Apellido";
  }
  inputName.value = dataCard.name;
  //job
  if (dataCard.job) {
    job.innerHTML = dataCard.job;
  } else {
    job.innerHTML = "Front-end developer";
  }
  inputJob.value = dataCard.job;

  //-----second function
  //icons
  //third and fourth functions: one for icons href (include Linkedin icons[2].href ), and another one for phone, mail and github value
  icons[0].href = "tel: +34" + dataCard.phone;
  phone.value = dataCard.phone;

  icons[1].href = "mailto:" + dataCard.email;
  mail.value = dataCard.email;

  icons[3].href = "https://github.com/" + dataCard.github;
  github.value = dataCard.github;
  // photo
  //refactor: fifth function. Plus amend small preview image at reload
  if (dataCard.photo) {
    boxUserImage.style.backgroundImage = "url(" + dataCard.photo + ")";
  }

  //pallete
  //Refactor: sixth function -- reset palette and set up background and palette design color as per checked radio btn
  userCard.classList.remove('color-grey', 'color-red', 'color-gum', 'color-purple');
  bgColor.classList.remove('animation-red', 'animation-grey', 'animation-gum', 'animation-purple');
  inputBlue.checked = false;
  inputRed.checked = false;
  inputGrey.checked = false;
  inputGum.checked = false;
  inputPurple.checked = false;

  //REFACTOR: pending to abilitate default checked palette
  if (dataCard.pallete === '1' || dataCard.pallete === "") {
    inputBlue.checked = true;
    userCard.classList.add('color-blue');
  }
  if (dataCard.pallete === "2") {
    inputRed.checked = true;
    userCard.classList.add('color-red');
    bgColor.classList.add('animation-red');

  }
  if (dataCard.pallete === "3") {
    inputGrey.checked = true;
    userCard.classList.add('color-grey');
    bgColor.classList.add('animation-grey');
  }
  if (dataCard.pallete === "4") {
    inputGum.checked = true;
    userCard.classList.add('color-gum');
    bgColor.classList.add('animation-gum');
  }
  if (dataCard.pallete === "5") {
    inputPurple.checked = true;
    userCard.classList.add('color-purple');
    bgColor.classList.add('animation-purple');
  }
}

// reset dataCard
//refactor: after reset, putting the checked inputs as per default. This is OK but is going to be placed at another partial
function initDataCard() {
  dataCard = {
    pallete: "",
    typography: "",
    name: "",
    job: "",
    photo: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    skills: []
  };
  btnShare.classList.remove("btn-share--disabled");
  cardCreated.classList.add("hide-box");
  boxUserImage.style.backgroundImage = "url(" + backgroundBlue + ")";
  previewImg.setAttribute("src", "")

  localStorage.setItem("data", "");
  fillSavedForm();
} //refactor: to go along with its handlerFunction
resetBtn.addEventListener("click", initDataCard);



function updateDataName(event) {
  const value = inputName.value;
  if (value) {
    name.innerHTML = event.target.value;
  } else {
    name.innerHTML = "Nombre Apellido";
  }
  updateDataCard("name", inputName.value);
  localStorage.setItem("data", JSON.stringify(dataCard));
}

function updateDataCard(key, value) {
  console.log(key);
  console.log(value);
  dataCard[key] = value;
  localStorage.setItem("data", JSON.stringify(dataCard));
}

//  function retrieveDataStored() {
//      const dataStored = JSON.parse('data')
//      console.log(dataStored);
//  }

function updateDataJob(event) {
  const value = inputJob.value;
  if (value) {
    job.innerHTML = event.target.value;
  } else {
    job.innerHTML = "Front-end developer";
  }
  updateDataCard("job", inputJob.value);
  localStorage.setItem("data", JSON.stringify(dataCard));
}

inputName.addEventListener("keyup", updateDataName);
inputJob.addEventListener("keyup", updateDataJob);

//hide boxes

const hideBoxes = document.querySelectorAll(".bring-box");
const butonUnfold = document.querySelectorAll(".btn-unfold");
const butonfold = document.querySelectorAll(".btn-fold");
const button = document.querySelectorAll("button");

function fold(event) {
  const newButton = event.currentTarget;
  for (let i = 0; i < hideBoxes.length; i++) {
    if (newButton === butonUnfold[i] || newButton === butonfold[i]) {
      if (hideBoxes[i].classList.contains("hide-box")) {
        // Elimina la clase
        hideBoxes[i].classList.remove("hide-box");
        butonUnfold[i].classList.add("hide-box");
        butonfold[i].classList.remove("btn-fold");
      } else {
        // Sino
        // Añade la clase hidden
        hideBoxes[i].classList.add("hide-box");
        butonUnfold[i].classList.remove("hide-box");
        butonfold[i].classList.add("btn-fold");
      }
    } else {
      hideBoxes[i].classList.add("hide-box");
      butonUnfold[i].classList.remove("hide-box");
      butonfold[i].classList.add("btn-fold");
    }
  }
}

butonUnfold[0].addEventListener("click", fold);
butonUnfold[1].addEventListener("click", fold);
butonUnfold[2].addEventListener("click", fold);

butonfold[0].addEventListener("click", fold);
butonfold[1].addEventListener("click", fold);
butonfold[2].addEventListener("click", fold);

//pallete
const handleColorTheme = () => {
  userCard.classList.remove(
    "color-grey",
    "color-red",
    "color-gum",
    "color-purple"
  );
  bgColor.classList.remove('animation-red', 'animation-grey', 'animation-gum', 'animation-purple');
  const colorSelected = event.currentTarget;

  if (colorSelected === inputRed) {
    userCard.classList.add("color-red");
    bgColor.classList.add('animation-red');
    if (!dataCard.photo) {
      boxUserImage.style.backgroundImage = "url(" + backgroundRed + ")";
    }
  } else if (colorSelected === inputGrey) {
    userCard.classList.add("color-grey");
    bgColor.classList.add('animation-grey');
    if (!dataCard.photo) {
      boxUserImage.style.backgroundImage = "url(" + backgroundGrey + ")";
    }
  } else if (colorSelected === inputGum) {
    userCard.classList.add("color-gum");
    bgColor.classList.add('animation-gum');
    if (!dataCard.photo) {
      boxUserImage.style.backgroundImage = "url(" + backgroundGum + ")";
    }
  } else if (colorSelected === inputPurple) {
    userCard.classList.add("color-purple");
    bgColor.classList.add('animation-purple');
    if (!dataCard.photo) {
      boxUserImage.style.backgroundImage = "url(" + backgroundPurple + ")";
    }
  } else if (colorSelected === inputBlue) {
    if (!dataCard.photo) {
      boxUserImage.style.backgroundImage = "url(" + backgroundBlue + ")";
    }
  }
  updateDataCard("pallete", colorSelected.value);
  localStorage.setItem("data", JSON.stringify(dataCard));
};

inputBlue.addEventListener("click", handleColorTheme);
inputRed.addEventListener("click", handleColorTheme);
inputGrey.addEventListener("click", handleColorTheme);
inputGum.addEventListener("click", handleColorTheme);
inputPurple.addEventListener("click", handleColorTheme);

//LINKING FONT FAMILY TO USER CARD

const ubuntuFont = document.getElementById("font-ubuntu");
const comicFont = document.getElementById("font-comic");
const montseFont = document.getElementById("font-montse");
const fontCard = document.querySelector(".card-header");

function handleFonttheme() {
  fontCard.classList.remove("font-ubuntu", "font-comic", "font-montse");

  const fontSelectedByUser = event.currentTarget;

  if (fontSelectedByUser === ubuntuFont) {
    fontCard.classList.add("font-ubuntu");
  } else if (fontSelectedByUser === comicFont) {
    fontCard.classList.add("font-comic");
  } else if (fontSelectedByUser === montseFont) {
    fontCard.classList.add("font-montse");
  }
  updateDataCard("typography", fontSelectedByUser.value);
}

ubuntuFont.addEventListener("click", handleFonttheme);
comicFont.addEventListener("click", handleFonttheme);
montseFont.addEventListener("click", handleFonttheme);

//form

//form email

function handlersendMail() {
  icons[1].href = "mailto:" + mail.value;
  updateDataCard("email", mail.value);
  localStorage.setItem("data", JSON.stringify(dataCard));
}

mail.addEventListener("keyup", handlersendMail);

//form telephone

function handlerPhone() {
  icons[0].href = "tel: +34" + phone.value;
  updateDataCard("phone", phone.value);
  localStorage.setItem("data", JSON.stringify(dataCard));
}

phone.addEventListener("keyup", handlerPhone);

//form github

function handlerGithub() {
  icons[3].href = "https://github.com/" + github.value;
  updateDataCard("github", github.value);
  localStorage.setItem("data", JSON.stringify(dataCard));
}

github.addEventListener("keyup", handlerGithub);

//form linkedin

function handlerLinkedin() {
  icons[2].href = "https://linkedin.com/in/" + linked.value;
  updateDataCard("linkedin", linked.value);
  localStorage.setItem("data", JSON.stringify(dataCard));
}

//add Image Feature
//button div contacto, con div add_image.
//TODO:   ask about FileReader
const fr = new FileReader();

function getImage(event) {
  let myFile = event.target.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
  // console.log(fr);
  fr.onloadend = () => {
    const imgUrl = fr.result;
    updateDataCard("photo", imgUrl);
    localStorage.setItem("photo", JSON.stringify(dataCard));
  }
}

function writeImage(event) {
  boxUserImage.style.backgroundImage = "url(" + event.target.result + ")";
  previewImg.setAttribute("src", event.target.result);
}

function fileClick() {
  event.preventDefault();
  inputImage.click();
}

inputImage.addEventListener('change', getImage);
uploadBtn.addEventListener('click', fileClick);
linked.addEventListener('keyup', handlerLinkedin);
let skillArray = [];
let j = 0;
let acc = 0;


function inputs() {
  fetch(
    "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json"
  )
    .then(response => response.json())
    .then(data => {
      const divskills = document.querySelector('.container-checks');
      const dskills = data.skills;
      let divContent = "";
      let i = 1;
      for (const skill of dskills) {
        const skillContent = `<div class="check_styles"><label for="${[
          i
        ]}"><input class="checkbox_input" type="checkbox" id="${[
          i
        ]}" value=${skill} name="hability">${skill}</label></div>`;
        divContent += skillContent;
        i = i + 1;
      }
      divskills.innerHTML = divContent;

      const checkInput = document.querySelectorAll('.checkbox_input');
      saveDataskills(checkInput);
      if (dataCard.skills) {
        skillArray = dataCard.skills;
        console.log('si ya lo tengo va a ser el de la card', skillArray);
        j = skillArray.length;
        console.log('la lenght es', j);
        acc = skillArray.length;
      }
      else {
        skillArray = [];
      }
      const ulBlue = document.querySelector('.skills__list');

      function check(event) {

        for (let i = 0; i < checkInput.length; i++) {
          if (acc <= 3 && j <= 3) {
            for (let k = 0; k < checkInput.length; k++) {
              if (checkInput[k].checked === false)
                checkInput[k].disabled = false;
            }
            if (
              checkInput[i] === event.currentTarget &&
              checkInput[i].checked === true
            ) {
              let list = document.querySelector('.skills__list');
              const newItem = document.createElement('li');
              newItem.classList.add('skills__item', 'skills__item--bg');
              const newContent = document.createTextNode(`${
                checkInput[i].value}`);
              newItem.appendChild(newContent);
              list.appendChild(newItem);
              acc = acc + 1;
              skillArray[j] = checkInput[i].value;
              j = j + 1;
            }
            else if (
              checkInput[i] === event.currentTarget &&
              checkInput[i].checked === false
            ) {
              let childsList = document.querySelectorAll('.skills__item');
              let list = document.querySelector('.skills__list');
              for (let k = 0; k < childsList.length; k++) {
                if (event.currentTarget.value === childsList[k].innerHTML) {
                  list.removeChild(childsList[k]);
                }
              }
              acc = acc - 1;
              //search es el que busco en el array que guardo en el localStorage skillArray
              let search = event.currentTarget.value;
              for (let i = 0; i < skillArray.length; i++) {
                if (search === skillArray[i]) {
                  skillArray.splice(i, 1);
                }
              }
              j = j - 1;
            }
          }
          if (acc >= 3) {
            for (let k = 0; k < checkInput.length; k++) {
              if (checkInput[k].checked === false)
                checkInput[k].disabled = true;
            }
          }
        }
        updateDataCard('skills', skillArray);
        localStorage.setItem('data', JSON.stringify(dataCard));
      }
      for (let i = 0; i < checkInput.length; i++) {
        checkInput[i].addEventListener("click", check);
      }
    });
}

inputs();

/// fetch API

const btnShare = document.querySelector(".btn-share");
const cardCreated = document.querySelector(".card-created");

function sendRequest(dataCard) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(dataCard),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(resp => resp.json())
    .then(resultURL => {
      showURL(resultURL);
      btnShare.classList.remove("btn-share--disabled");
    })
    .catch(error => console.log(error))
}

function sendData() {
  btnShare.classList.add("btn-share--disabled");
  cardCreated.classList.remove("hide-box");
  sendRequest(dataCard);
}

const twitterShare = document.querySelector('.twitter-link');
function showURL(resultURL) {
  const linkURLShare = document.querySelector('.share-link');

  if (resultURL.success) {
    console.log(resultURL.success);
    linkURLShare.innerHTML =
      "<a class='link' href=" + resultURL.cardURL + " >" + resultURL.cardURL + "</a>";
  
    //mete el enlace a twiter en el html pero hayq arreglarlo
    twitterShare.href = "https://twitter.com/intent/tweet?text=Mi%20tarjeta%20virtual%20&url=" + resultURL.cardURL;
  } else {
    linkURLShare.innerHTML = "ERROR:" + dataCard.error;
  }
}

btnShare.addEventListener("click", sendData);
//btnShare.addEventListener("load", sendData);
function saveDataskills(a) {
  // cheking if exist data on localStorage//
  let savedData = localStorage.getItem('data');
  if (savedData) {
    let savedDataCard = JSON.parse(savedData);
    // to fill datacard
    if (savedDataCard) {
      dataCard = savedDataCard;
      let liC3 = '';
      let acc3 = 0;
      for (let i = 0; i < dataCard.skills.length; i++) {
        for (let j = 0; j < a.length; j++) {
          if (a[j].value === dataCard.skills[i] && acc3 < 3) {
            a[j].checked = true;
            let liContent3 = `<li class="skills__item skills__item--bg">${a[j].value}</li>`;
            liC3 += liContent3;
            acc3++;
          }
        }
        if (acc3 >= 3) {
          for (let k = 0; k < a.length; k++) {
            if (a[k].checked === false)
              a[k].disabled = true;
          }
        }

      }
      const ulBlue = document.querySelector('.skills__list');
      ulBlue.innerHTML = liC3;
    }
  }
}

function resetSkills() {
  inputs();

  let list = document.querySelector('.skills__list');
  let childlist = document.querySelectorAll('.skills__item');

  for (let i = 0; i < childlist.length; i++) {
    list.removeChild(childlist[i]);
  }
}

resetBtn.addEventListener('click', resetSkills);
