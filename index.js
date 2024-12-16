function checkGender(){
    let boy=document.getElementById("genderBoy").checked;
    let girl=document.getElementById("genderGirl").checked;
    let genderText = document.getElementById("genderText");
    if (boy){
        genderText.innerText="Eg er ein gutt";
       
    }
    if (girl){
        genderText.innerText="Eg er ei jente";
     
    }
}
function setHeading() {
    let Firstname = document.getElementById("Firstname");
    let heading = document.getElementById("Heading");
    let container = document.getElementById("container");
    heading.innerHTML = "velkommen, " + Firstname.value;
    heading.style.color = "black";
   
}

