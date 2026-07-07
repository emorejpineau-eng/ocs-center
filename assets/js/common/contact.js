document.addEventListener("DOMContentLoaded", function(){
const form = document.getElementById("contactForm");
if(form){

form.addEventListener("submit", function(e){
e.preventDefault();
alert("✅ Votre demande a bien été envoyée. Notre équipe vous contactera rapidement.");

form.reset();

});

}

});