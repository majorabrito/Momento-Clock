let caracasElement = document.querySelector("#caracas");
let caracasDateElement = caracasElement.querySelector(".date");
let caracasTimeElement = caracasElement.querySelector(".time");
let caracasTime= moment().tz("America/Caracas");

caracasDateElement.innerHTML = caracasTime.format("MMMM Do YYYY");
caracasTimeElement.innerHTML = caracasTime.format("h:mm:ss [<small>]A[</small>]");