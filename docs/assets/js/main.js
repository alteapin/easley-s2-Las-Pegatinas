"use strict";const inputBlue=document.getElementById("pallete-blue"),inputRed=document.getElementById("pallete-red"),inputGrey=document.getElementById("pallete-grey"),inputGum=document.getElementById("pallete-gum"),inputPurple=document.getElementById("pallete-purple"),userCard=document.querySelector(".box-card"),backgroundBlue="../assets/images/tiger.png",backgroundRed="../assets/images/cebra5.png",backgroundGrey="../assets/images/cocodrilo2.png",backgroundGum="../assets/images/cat2.png",backgroundPurple="../assets/images/panter7.png",mail=document.querySelector("#email"),icons=document.querySelectorAll(".icons-card"),phone=document.querySelector("#phone"),github=document.querySelector("#github"),linked=document.querySelector("#linkedin"),name=document.querySelector(".name-person"),job=document.querySelector(".work-space"),inputName=document.querySelector("#firstName"),inputJob=document.querySelector("#job"),resetBtn=document.querySelector(".reset-btn"),uploadBtn=document.querySelector(".button_ad_image"),inputImage=document.getElementById("img-selector"),boxUserImage=document.querySelector(".card-img"),previewImg=document.querySelector(".preview-img"),ulBlue=document.querySelector(".skills__list"),bgColor=document.querySelector(".build-card");let dataCard={pallete:"",typography:"",name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:"",skills:[""],success:"",cardURL:"",error:""},savedData=localStorage.getItem("datos");function fillSavedForm(){dataCard.name?name.innerHTML=dataCard.name:name.innerHTML="Nombre Apellido",inputName.value=dataCard.name,dataCard.job?job.innerHTML=dataCard.job:job.innerHTML="Front-end developer",inputJob.value=dataCard.job,icons[0].href="tel: +34"+dataCard.phone,phone.value=dataCard.phone,icons[1].href="mailto:"+dataCard.email,mail.value=dataCard.email,icons[3].href="https://github.com/"+dataCard.github,github.value=dataCard.github,dataCard.photo&&(boxUserImage.style.backgroundImage="url("+dataCard.photo+")"),userCard.classList.remove("color-grey","color-red","color-gum","color-purple"),bgColor.classList.remove("animation-red","animation-grey","animation-gum","animation-purple"),inputBlue.checked=!1,inputRed.checked=!1,inputGrey.checked=!1,inputGum.checked=!1,inputPurple.checked=!1,"1"===dataCard.pallete&&(inputBlue.checked=!0,userCard.classList.add("color-blue")),"2"===dataCard.pallete&&(inputRed.checked=!0,userCard.classList.add("color-red"),bgColor.classList.add("animation-red")),"3"===dataCard.pallete&&(inputGrey.checked=!0,userCard.classList.add("color-grey"),bgColor.classList.add("animation-grey")),"4"===dataCard.pallete&&(inputGum.checked=!0,userCard.classList.add("color-gum"),bgColor.classList.add("animation-gum")),"5"===dataCard.pallete&&(inputPurple.checked=!0,userCard.classList.add("color-purple"),bgColor.classList.add("animation-purple"))}function initDataCard(){dataCard={pallete:"",typography:"",name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:"",skills:[""]},btnShare.classList.remove("btn-share--disabled"),cardCreated.classList.add("hide-box"),boxUserImage.style.backgroundImage="url("+backgroundBlue+")",previewImg.setAttribute("src",""),console.log(dataCard.photo),localStorage.setItem("datos",""),fillSavedForm()}function updateDataName(e){const t=inputName.value;name.innerHTML=t?e.target.value:"Nombre Apellido",updateDataCard("name",inputName.value),localStorage.setItem("datos",JSON.stringify(dataCard))}function updateDataCard(e,t){console.log(e),console.log(t),dataCard[e]=t,localStorage.setItem("datos",JSON.stringify(dataCard))}function updateDataJob(e){const t=inputJob.value;job.innerHTML=t?e.target.value:"Front-end developer",updateDataCard("job",inputJob.value),localStorage.setItem("datos",JSON.stringify(dataCard))}savedData&&(dataCard=JSON.parse(savedData),fillSavedForm()),resetBtn.addEventListener("click",initDataCard),inputName.addEventListener("keyup",updateDataName),inputJob.addEventListener("keyup",updateDataJob);const hideBoxes=document.querySelectorAll(".bring-box"),butonUnfold=document.querySelectorAll(".btn-unfold"),butonfold=document.querySelectorAll(".btn-fold"),button=document.querySelectorAll("button");function fold(e){const t=e.currentTarget;for(let e=0;e<hideBoxes.length;e++)(t===butonUnfold[e]||t===butonfold[e])&&hideBoxes[e].classList.contains("hide-box")?(hideBoxes[e].classList.remove("hide-box"),butonUnfold[e].classList.add("hide-box"),butonfold[e].classList.remove("btn-fold")):(hideBoxes[e].classList.add("hide-box"),butonUnfold[e].classList.remove("hide-box"),butonfold[e].classList.add("btn-fold"))}butonUnfold[0].addEventListener("click",fold),butonUnfold[1].addEventListener("click",fold),butonUnfold[2].addEventListener("click",fold),butonfold[0].addEventListener("click",fold),butonfold[1].addEventListener("click",fold),butonfold[2].addEventListener("click",fold);const handleColorTheme=()=>{userCard.classList.remove("color-grey","color-red","color-gum","color-purple"),bgColor.classList.remove("animation-red","animation-grey","animation-gum","animation-purple");const e=event.currentTarget;e===inputRed?(userCard.classList.add("color-red"),bgColor.classList.add("animation-red"),dataCard.photo||(boxUserImage.style.backgroundImage="url("+backgroundRed+")")):e===inputGrey?(userCard.classList.add("color-grey"),bgColor.classList.add("animation-grey"),dataCard.photo||(boxUserImage.style.backgroundImage="url("+backgroundGrey+")")):e===inputGum?(userCard.classList.add("color-gum"),bgColor.classList.add("animation-gum"),dataCard.photo||(boxUserImage.style.backgroundImage="url("+backgroundGum+")")):e===inputPurple?(userCard.classList.add("color-purple"),bgColor.classList.add("animation-purple"),dataCard.photo||(boxUserImage.style.backgroundImage="url("+backgroundPurple+")")):e===inputBlue&&(dataCard.photo||(boxUserImage.style.backgroundImage="url("+backgroundBlue+")")),updateDataCard("pallete",e.value),localStorage.setItem("datos",JSON.stringify(dataCard))};inputBlue.addEventListener("click",handleColorTheme),inputRed.addEventListener("click",handleColorTheme),inputGrey.addEventListener("click",handleColorTheme),inputGum.addEventListener("click",handleColorTheme),inputPurple.addEventListener("click",handleColorTheme);const ubuntuFont=document.getElementById("font-ubuntu"),comicFont=document.getElementById("font-comic"),montseFont=document.getElementById("font-montse"),fontCard=document.querySelector(".card-header");function handleFonttheme(){fontCard.classList.remove("font-ubuntu","font-comic","font-montse");const e=event.currentTarget;e===ubuntuFont?fontCard.classList.add("font-ubuntu"):e===comicFont?fontCard.classList.add("font-comic"):e===montseFont&&fontCard.classList.add("font-montse"),updateDataCard("typography",e.value)}function handlersendMail(){icons[1].href="mailto:"+mail.value,updateDataCard("email",mail.value),localStorage.setItem("datos",JSON.stringify(dataCard))}function handlerPhone(){icons[0].href="tel: +34"+phone.value,updateDataCard("phone",phone.value),localStorage.setItem("datos",JSON.stringify(dataCard))}function handlerGithub(){icons[3].href="https://github.com/"+github.value,updateDataCard("github",github.value),localStorage.setItem("datos",JSON.stringify(dataCard))}function handlerLinkedin(){icons[2].href="https://linkedin.com/in/"+linked.value,updateDataCard("linkedin",linked.value),localStorage.setItem("datos",JSON.stringify(dataCard))}ubuntuFont.addEventListener("click",handleFonttheme),comicFont.addEventListener("click",handleFonttheme),montseFont.addEventListener("click",handleFonttheme),mail.addEventListener("keyup",handlersendMail),phone.addEventListener("keyup",handlerPhone),github.addEventListener("keyup",handlerGithub);const fr=new FileReader;function getImage(e){let t=e.target.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t),fr.onloadend=(()=>{updateDataCard("photo",fr.result),localStorage.setItem("photo",JSON.stringify(dataCard))})}function writeImage(e){boxUserImage.style.backgroundImage="url("+e.target.result+")",previewImg.setAttribute("src",e.target.result)}function fileClick(){event.preventDefault(),inputImage.click()}function inputs(){fetch("https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json").then(e=>e.json()).then(e=>{const t=document.querySelector(".container-checks"),a=e.skills;let n="",o=1;for(const e of a){n+=`<div class="check_styles"><label for="${[o]}"><input class="checkbox_input" type="checkbox" id="${[o]}" value=${e} name="hability">${e}</label></div>`,o+=1}t.innerHTML=n;const d=document.querySelectorAll(".checkbox_input");saveDataskills(d);const r=document.querySelector(".skills__list");let l="",s=0,i=0,c=[];function u(e){for(let t=0;t<d.length;t++){if(s<3&&d[t]===e.currentTarget&&!0===d[t].checked){const e=`<li class="skills__item skills__item--bg">${d[t].value}</li>`;l+=e,s+=1,c[i]=d[t].value,i+=1}if(s>=3)for(let e=0;e<d.length;e++)!1===d[e].checked&&(d[e].disabled=!0)}r.innerHTML=l,updateDataCard("skills",c),localStorage.setItem("datos",JSON.stringify(dataCard))}for(let e=0;e<d.length;e++)d[e].addEventListener("click",u)})}inputImage.addEventListener("change",getImage),uploadBtn.addEventListener("click",fileClick),linked.addEventListener("keyup",handlerLinkedin),inputs();const btnShare=document.querySelector(".btn-share"),cardCreated=document.querySelector(".card-created");function sendRequest(e){fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){showURL(e)}).catch(function(e){console.log(e)})}function sendData(){btnShare.classList.add("btn-share--disabled"),cardCreated.classList.remove("hide-box"),sendRequest(dataCard)}const twitterShare=document.querySelector(".twitter--link");function showURL(e){const t=document.querySelector(".share-link");e.success?(console.log(e.success),t.innerHTML="<a href="+e.cardURL+" >"+e.cardURL+"</a>",console.log(dataCard.cardURL),twitterShare.innerHTML+="<a class='twitter' target='_blank' href=https://twitter.com/intent/tweet?text=Hello%20world&url="+e.cardURL+"></a>"):t.innerHTML="ERROR:"+dataCard.error}function saveDataskills(e){let t=localStorage.getItem("datos");if(t){let a=JSON.parse(t);if(a){dataCard=a;let t="",n=0;for(let a=0;a<dataCard.skills.length;a++){for(let o=0;o<e.length;o++)if(e[o].value===dataCard.skills[a]&&n<3){e[o].checked=!0,t+=`<li class="skills__item skills__item--bg">${e[o].value}</li>`,n++}if(n>=3)for(let t=0;t<e.length;t++)!1===e[t].checked&&(e[t].disabled=!0)}document.querySelector(".skills__list").innerHTML=t}}}function resetSkills(){inputs();let e=document.querySelector(".skills__list"),t=document.querySelectorAll(".skills__item");for(let a=0;a<t.length;a++)e.removeChild(t[a])}btnShare.addEventListener("click",sendData),resetBtn.addEventListener("click",resetSkills);