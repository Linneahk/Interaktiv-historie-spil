let nameBoks=document.getElementById("name");
let nameText = document.getElementById("genderText");
let nextButton = document.getElementById("nextButton");
let heading = document.getElementById("Heading");
let story = document.getElementById("story");
function checkGender(){
    let boy=document.getElementById("genderBoy").checked;
    let girl=document.getElementById("genderGirl").checked;
    let gender = document.getElementById("genderBoks");
    
   
        nameText.innerText="skriv namnet ditt";
        gender.style.display="none";  
        nameBoks.style.display="block";

}
function setHeading() {
    let Firstname = document.getElementById("Firstname");
    let container = document.getElementById("container");
    nameBoks.style.display="none";
    nameText.style.display="none";
    nextButton.style.display="block";
    nextButton.onclick=start;
    heading.innerHTML = "velkommen, " + Firstname.value;
    heading.style.color = "white";
   
}
function start() {
heading.innerText="Overskrift";
story.innerText="Detter er en test";
nextButton.onclick=nextStep;

}

function nextStep() {
    heading.innerText="du våkner av ein lyd utfor huset ditt midt på natta";
    story.innerText="kva velger du å gjer";
    nextButton.onclick=nextStep1;
}

function nextStep1() {
    heading.innerText="du ser gjennom vinduet og ser ein man springe vekk fra huset ditt.";
    story.innerText=" vil du velge å...";
    nextButton.onclick=nextStep2;
}





function nextStep2() {
    heading.innerText="du ser gjennom vinduet og ser ein man springe vekk fra huset ditt.";
    story.innerText=" vil du velge å...";
    nextButton.onclick=nextStep3;
}

