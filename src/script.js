const header = document.getElementsByClassName("header");
const navigator = document.getElementById("navigator");
const btnOpenDyslexic = document.getElementById("btn-open-dyslexic");
const accessibility = document.getElementById("accessibility");
const textWrapper = document.getElementsByClassName("text-wrapper");
class linkContents {
  constructor(linkText, linkPath) {
    this.linkText = linkText;
    this.linkPath = linkPath;
  }
}

let home = new linkContents("Home", "index.html");
let about = new linkContents("About us", "about.html");
let game = new linkContents("Minigame", "game.html");
let inventory = new linkContents("Inventory", "inventory.html");
let rules = new linkContents("Rules", "rules.html");
let login = new linkContents("Login", "login.html");
let library = new linkContents("Library", "library.html");

let navLinks = [home, about, library, game, inventory, rules, login];

navLinks.forEach((navLink) => {
  navigator.insertAdjacentHTML(
    "beforeend",
    `<li><a href="${navLink.linkPath}">${navLink.linkText}</a></li>`
  );
});

let openDyslexicMode = false;
console.log(`openDyslexic: ${openDyslexicMode}`);

function enableOpenDyslexicMode() {
  console.log("Enabling open dyslexic");
  document.querySelector("h1").style.fontFamily = "Open Dyslexic, cursive";
  document.querySelector("h1").style.fontSize = "3em";
  document.querySelector("h2").style.fontFamily = "Open Dyslexic, cursive";
  document.querySelector("h2").style.fontSize = "1.75em";
  document.querySelector("main").style.fontFamily = "Open Dyslexic, cursive";
  document.querySelector("main").style.fontSize = "1em";
  document.querySelector("footer").style.fontFamily = "Open Dyslexic, cursive";
  document.getElementById("navigator").style.fontFamily =
    "Open Dyslexic, cursive";
  document.getElementById("navigator").style.fontSize = "1.25em";
  openDyslexicMode = true;
  console.log(`openDyslexic: ${openDyslexicMode}`);
  btnOpenDyslexic.innerHTML = "Use default font";
}

function disableOpenDyslexicMode() {
  console.log("Disabling open dyslexic");
  document.querySelector("h1").style.fontFamily = "Kaushan Script, cursive";
  document.querySelector("h1").style.fontSize = "3.5em";
  document.querySelector("h2").style.fontFamily = "Caveat, cursive";
  document.querySelector("h2").style.fontSize = "2em";
  document.querySelector("main").style.fontFamily = "Caveat, cursive";
  document.querySelector("main").style.fontSize = "1.5em";
  document.querySelector("footer").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("navigator").style.fontFamily = "Caveat, cursive";
  document.getElementById("navigator").style.fontSize = "1.4em";
  openDyslexicMode = false;
  console.log(`openDyslexic: ${openDyslexicMode}`);
  btnOpenDyslexic.innerHTML = "Use Open Dyslexic";
}

btnOpenDyslexic.addEventListener("click", toggleOpenDyslexic);

function toggleOpenDyslexic() {
  console.log("Open Dyslexic button pressed");
  if (openDyslexicMode === true) {
    openDyslexicMode = false;
    console.log(`disabling Open Dyslexic`);
    disableOpenDyslexicMode();
  } else {
    openDyslexicMode = true;
    console.log(`enabling Open Dyslexic`);
    enableOpenDyslexicMode();
  }
}
