function checkGender(){
    let boy=document.getElementById("genderBoy").checked;
    let girl=document.getElementById("genderGirl").checked;
    let genderText = document.getElementById("genderText");
    if (boy){
        genderText.innerText="Eg er ein gutt";
        document.getElementById("genderBoks").style.display = "none";
    }
    if (girl){
        genderText.innerText="Eg er ei jente";
        document.getElementById("genderBoks").style.display = "none";
    }
}
function setHeading() {
    let Firstname = document.getElementById("Firstname");
    let heading = document.getElementById("Heading");
    let container = document.getElementById("container");
    heading.innerHTML = "velkommen, " + Firstname.value;
    heading.style.color = "white";
    heading.style.backgroundColor = "grey";
    container.style.backgroundColor = "grey";
}

