const header = document.getElementsByClassName("header");
const navigator = document.getElementById("navigator");
const btnOpenDyslexic = document.getElementById("btn-open-dyslexic");
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

let navLinks = [home, about, game, inventory, rules, login];

navLinks.forEach((navLink) => {
  console.log(`${navLink.linkText} at ${navLink.linkPath}`);
  navigator.insertAdjacentHTML(
    "beforeend",
    `<li><a href="${navLink.linkPath}">${navLink.linkText}</a></li>`
  );
});

function enableOpenDyslexicMode() {
  document.body.style.fontFamily = "Open Dyslexic, Cursive";
}

function disableOpenDyslexicMode() {
  document.h1.style.fontFamily = "Kaushan Script, cursive";
}
