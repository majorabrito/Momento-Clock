function updateTime() {

let caracasElement = document.querySelector("#caracas");
let caracasDateElement = caracasElement.querySelector(".date");
let caracasTimeElement = caracasElement.querySelector(".time");
let caracasTime= moment().tz("America/Caracas");

caracasDateElement.innerHTML = caracasTime.format("MMMM Do YYYY");
caracasTimeElement.innerHTML = caracasTime.format("h:mm:ss:SS[<small>]A[</small>]");


let berlinElement = document.querySelector("#berlin");
let berlinDateElement = berlinElement.querySelector(".date");
let berlinTimeElement = berlinElement.querySelector(".time");
let berlinTime= moment().tz("Europe/Berlin");

berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
berlinTimeElement.innerHTML = berlinTime.format("h:mm:ss:SS [<small>]A[</small>]");



let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime= moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss:SS [<small>]A[</small>]");



let torontoElement = document.querySelector("#toronto");
let torontoDateElement = torontoElement.querySelector(".date");
let torontoTimeElement = torontoElement.querySelector(".time");
let torontoTime= moment().tz("America/Toronto");

torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
torontoTimeElement.innerHTML = torontoTime.format("h:mm:ss:SS [<small>]A[</small>]");
};

updateTime();
setInterval(updateTime, 1);
