"use strict";
//--------- Variables form-----------

// PALLETES INPUTS

const inputBlue = document.getElementById("pallete-blue");
const inputRed = document.getElementById("pallete-red");
const inputGrey = document.getElementById("pallete-grey");
const inputGum = document.getElementById("pallete-gum");
const inputPurple = document.getElementById("pallete-purple");
const userCard = document.querySelector(".box-card");
//palletes background
const backgroundBlue = "../assets/images/tiger.png";
const backgroundRed = "../assets/images/cebra5.png";
const backgroundGrey = "../assets/images/cocodrilo2.jpg";
const backgroundGum = "../assets/images/cat2.png";
const backgroundPurple = "../assets/images/panter7.png";


// email-phone-github-linked
const mail = document.querySelector("#email");
const icons = document.querySelectorAll(".icons-card");
const phone = document.querySelector("#phone");
const github = document.querySelector("#github");
const linked = document.querySelector("#linkedin");

//variablesname-job
const name = document.querySelector(".name-person");
const job = document.querySelector(".work-space");
const inputName = document.querySelector("#firstName");
const inputJob = document.querySelector("#job");
const resetBtn = document.querySelector(".reset-btn");

//variables photo
const uploadBtn = document.querySelector(".button_ad_image");
const inputImage = document.getElementById("img-selector");
const boxUserImage = document.querySelector(".card-img");
const previewImg = document.querySelector(".preview-img");


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
  skills: [""],
  success: "",
  cardURL: "",
    // 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card',
  error: ""
};

// cheking if exist data on localStorage//
let savedData = localStorage.getItem("datos");
if (savedData) {
  // to fill datacard
  dataCard = JSON.parse(savedData);
  fillSavedForm();
}

// fill form with data on localStorage
function fillSavedForm() {
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
  //icons
  icons[0].href = "tel: +34" + dataCard.phone;
  phone.value = dataCard.phone;

  icons[1].href = "mailto:" + dataCard.email;
  mail.value = dataCard.email;

  icons[3].href = "https://github.com/" + dataCard.github;
  github.value = dataCard.github;
  // photo
  if (dataCard.photo) {
    boxUserImage.style.backgroundImage = "url(" + dataCard.photo + ")";
  }

  //pallete
  userCard.classList.remove(
    "color-grey",
    "color-red",
    "color-gum",
    "color-purple"
  );
  inputBlue.checked = false;
  inputRed.checked = false;
  inputGrey.checked = false;
  inputGum.checked = false;
  inputPurple.checked = false;

  if (dataCard.pallete === "1") {
    inputBlue.checked = true;
    userCard.classList.add("color-blue");
  }
  if (dataCard.pallete === "2") {
    inputRed.checked = true;
    userCard.classList.add("color-red");
  }
  if (dataCard.pallete === "3") {
    inputGrey.checked = true;
    userCard.classList.add("color-grey");
  }
  if (dataCard.pallete === "4") {
    inputGum.checked = true;
    userCard.classList.add("color-gum");
  }
  if (dataCard.pallete === "5") {
    inputPurple.checked = true;
    userCard.classList.add("color-purple");
  }
}

// reset dataCard
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
    skills: [""]
  };
  btnShare.classList.remove("btn-share--disabled");
  cardCreated.classList.add("hide-box");
  boxUserImage.style.backgroundImage = "url(" + backgroundBlue + ")";
  previewImg.setAttribute("src", dataCard.photo); // dataCard.photo or event.target.result
  console.log(dataCard.photo);
  localStorage.setItem("datos", "");
  fillSavedForm();
}

resetBtn.addEventListener("click", initDataCard);

//--------------------------end of new----------------------------------------

function updateDataName(event) {
  const value = inputName.value;
  if (value) {
    name.innerHTML = event.target.value;
  } else {
    name.innerHTML = "Nombre Apellido";
  }
  updateDataCard("name", inputName.value);
  localStorage.setItem("datos", JSON.stringify(dataCard));
}

function updateDataCard(key, value) {
  console.log(key);
  console.log(value);
  dataCard[key] = value;
  localStorage.setItem("datos", JSON.stringify(dataCard));
}

//  function retrieveDataStored() {
//      const dataStored = JSON.parse('datos')
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
  localStorage.setItem("datos", JSON.stringify(dataCard));
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
  const colorSelected = event.currentTarget;

  if (colorSelected === inputRed) {
    userCard.classList.add("color-red");
    if (!dataCard.photo) {
      boxUserImage.style.backgroundImage = "url(" + backgroundRed + ")";
    }
  } else if (colorSelected === inputGrey) {
    userCard.classList.add("color-grey");
    if (!dataCard.photo) {
      boxUserImage.style.backgroundImage = "url(" + backgroundGrey + ")";
    }
  } else if (colorSelected === inputGum) {
    userCard.classList.add("color-gum");
    if (!dataCard.photo) {
      boxUserImage.style.backgroundImage = "url(" + backgroundGum + ")";
    }
  } else if (colorSelected === inputPurple) {
    userCard.classList.add("color-purple");
    if (!dataCard.photo) {
      boxUserImage.style.backgroundImage = "url(" + backgroundPurple + ")";
    }
  } else if (colorSelected === inputBlue) {
    if (!dataCard.photo) {
      boxUserImage.style.backgroundImage = "url(" + backgroundBlue + ")";
    }
  }
  updateDataCard("pallete", colorSelected.value);
  localStorage.setItem("datos", JSON.stringify(dataCard));
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
  localStorage.setItem("datos", JSON.stringify(dataCard));
}

mail.addEventListener("keyup", handlersendMail);

//form telephone

function handlerPhone() {
  icons[0].href = "tel: +34" + phone.value;
  updateDataCard("phone", phone.value);
  localStorage.setItem("datos", JSON.stringify(dataCard));
}

phone.addEventListener("keyup", handlerPhone);

//form github

function handlerGithub() {
  icons[3].href = "https://github.com/" + github.value;
  updateDataCard("github", github.value);
  localStorage.setItem("datos", JSON.stringify(dataCard));
}

github.addEventListener("keyup", handlerGithub);

//form linkedin

function handlerLinkedin() {
  icons[2].href = "https://linkedin.com/in/" + linked.value;
  updateDataCard("linkedin", linked.value);
  localStorage.setItem("datos", JSON.stringify(dataCard));
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

inputImage.addEventListener("change", getImage);
uploadBtn.addEventListener("click", fileClick);
linked.addEventListener("keyup", handlerLinkedin);

function inputs() {
  fetch(
    "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json"
  )
    .then(response => response.json())
    .then(data => {
      console.log("data response: ", data);

      const divskills = document.querySelector(".container-checks");
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
      const checkInput = document.querySelectorAll(".checkbox_input");
      const ulBlue = document.querySelector(".skills__list");
      let liC = "";
      let acc = 0;

      function check(event) {
        for (let i = 0; i < checkInput.length; i++) {
          if (acc < 3) {
            if (
              checkInput[i] === event.currentTarget &&
              checkInput[i].checked === true
            ) {
              const liContent = `<li class="skills__item skills__item--bg">${
                checkInput[i].value
              }</li>`;
              liC += liContent;
              acc = acc + 1;
            }
          }
        }
        ulBlue.innerHTML = liC;
        let liC2 = "";
        let acc2 = 0;
        let j = 0;
        let skillArray = [];
        for (let i = 0; i < checkInput.length; i++) {
          if (acc2 < 3 && checkInput[i].checked === true) {
            const liContent2 = `<li class="skills__item skills__item--bg">${
              checkInput[i].value
            }</li>`;
            liC2 += liContent2;
            acc2 = acc2 + 1;
            skillArray[j] = checkInput[i].value;
            j = j + 1;
          }
          ulBlue.innerHTML = liC2;
          updateDataCard("skills", skillArray);
          localStorage.setItem("skills", JSON.stringify(dataCard));
        }
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
//const linkURL = document.querySelector(".link"); //revisar


function sendRequest(dataCard) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(dataCard),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) {
      return resp.json();
      
    })
    .then(function(resultURL) {
      showURL(resultURL);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function sendData() {
  btnShare.classList.add("btn-share--disabled");
  cardCreated.classList.remove("hide-box");
  sendRequest(dataCard);
}

const twitterShare = document.querySelector('.twitter--link');
function showURL(resultURL) {
  const linkURLShare = document.querySelector('.share-link');

    if (resultURL.success) {
      console.log(resultURL.success);
      linkURLShare.innerHTML =
        "<a href=" + resultURL.cardURL + " >" + resultURL.cardURL + "</a>";
        console.log(dataCard.cardURL);
        //mete el enlace a twiter en el html pero hayq arreglarlo
      twitterShare.innerHTML += "<a class='twitter' target='_blank' href=https://twitter.com/intent/tweet?text=Hello%20world&url="+ resultURL.cardURL +"></a>";
    } else {
      linkURLShare.innerHTML = "ERROR:" + dataCard.error;
    }
  }

btnShare.addEventListener("click", sendData);
//btnShare.addEventListener("load", sendData);
