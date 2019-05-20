
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

//Cacher le résultat du formulaire et le bouton de retour au formulaire
document.getElementById("result").style.display= "none";
//Au click sur bouton Valider, le formulaire disparait et le résultat d'apparaît
document.querySelector("#buttonSubmit").addEventListener("click",() => {
  document.querySelector("#contentForm").style.display="none";
  document.getElementById("result").style.display= "block";
//Déclare les variables à retenir
var name = document.getElementById("name").value;
var power = document.getElementById("power").value;
var motivation = document.getElementById("motivation").value;
var project = document.getElementById("project").value;
//Ecrit le résultat
document.querySelector("#resName").innerHTML = '<h1>You are : ' + name + '</h1>';
document.querySelector("#resPower").innerHTML = '<h2>Power :'  + power + '</h2>';
document.querySelector("#resMotivation").innerHTML = '<p>Motivation :' + motivation + '</p>';
document.querySelector("#resProject").innerHTML = '<p>Project :' + project + '</p>';
});
//Fonction pour effacer les champs du formulaire
function resetForm(){
  document.querySelector("#name").value="";
  document.querySelector("#power").value="";
  document.querySelector("#motivation").value="";
  document.querySelector("#project").value="";
}
//Au clic sur le button Retour au formulaire
//Et fonction reset du formulaire des valeurs validées
document.querySelector("#buttonRevert").addEventListener("click",() => {
document.getElementById("result").style.display= "none";
document.querySelector("#contentForm").style.display="block";
  resetForm();
});
//Au clic sur le bouton Réinitialiser efface les champs du formulaire
document.querySelector("#buttonReset").addEventListener("click",() => {
  resetForm();
});




//Au click sur le button Valider, enregistrer les insformations
//de l'utilisateur et les afficher dans le <p>
