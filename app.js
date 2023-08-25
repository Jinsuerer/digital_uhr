const clock = document.querySelector(".clock");
// clock.innerText = new Data().toLocaleTimeString("en-GB")// yerel saati alır. en-GB  => 24 saatlik dilimi alır

setInterval(() => {
  clock.innerText = new Date().toLocaleTimeString();
}, 1000);

const day = document.querySelector(".day");

const year = new Date().getFullYear();
const date = new Date().getDate();
const days = new Date().getDay();
day.innerText = `${date}.${days}.${year}`;

document.querySelector('body').addEventListener('mousemove', clockColor);

function clockColor(e) {   
    let c1 = Math.floor(Math.random() * 255);
    let c2 = Math.floor(Math.random() * 255);
    let c3 = Math.floor(Math.random() * 255);
    let rgb = `rgb(${c1},${c2},${c3})`
    document.querySelector('.divClock').style.backgroundColor=rgb
    document.querySelector(`.divDay`).style.backgroundColor=rgb
    document.querySelector(".day").style.color=rgb
    document.querySelector(".clock").style.color=rgb

}
