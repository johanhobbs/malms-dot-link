const header = document.getElementsByClassName("header");
const navigator = document.getElementById("navigator");
const btnOpenDyslexic = document.getElementById("btn-open-dyslexic");
const accessibility = document.getElementById("accessibility");
const textWrapper = document.getElementsByClassName("text-wrapper");
const btnDarkMode = document.getElementById("btn-dark-mode");
const btnLightMode = document.getElementById("btn-light-mode");
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

lightDarkNormalMode = "normal";

btnLightMode.addEventListener("click", toggleLightMode);

function toggleLightMode() {
  console.log(`Light mode button pressed`);
  if (lightDarkNormalMode === "normal") {
    enableLightMode();
  } else if (lightDarkNormalMode === "dark") {
    enableLightMode();
  } else if (lightDarkNormalMode === "light") {
    enableNormalMode();
  }
}

btnDarkMode.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  console.log(`Dark mode button pressed`);
  if (lightDarkNormalMode === "normal") {
    enableDarkMode();
  } else if (lightDarkNormalMode === "dark") {
    enableNormalMode();
  } else if (lightDarkNormalMode === "light") {
    enableDarkMode();
  }
}

function enableDarkMode() {
  //SECTION - For logging purposes
  console.log("Enabling Dark Mode");
  lightDarkNormalMode = "dark";

  //SECTION - updates our style to reflect the desired mode
  document.querySelector("body").style.backgroundImage =
    "url('../assets/tile-dark.png')";
  document.querySelector("h2").style.backgroundColor = "#85553555";
  document.querySelector("h1").style.backgroundColor = "#a97c5f55";
  document.querySelector("h2").style.color = "#ffffff";
  document.querySelector("h1").style.color = "#ffffff";
  document.querySelector("body").style.color = "#ffffff";
  document.querySelector("a").style.color = "#ffffff";
  // TODO fix this so it restyles ALL anchor links
  document.getElementById("accessibility").style.color = "#ffffff";
}

function enableNormalMode() {
  // SECTION - for logging purposes
  console.log("Enabling Normal Mode");
  lightDarkNormalMode = "normal";

  //SECTION - updates the style properties of the page
  document.querySelector("body").style.backgroundImage =
    "url('../assets/tile.png')";
  document.querySelector("h2").style.backgroundColor = "#a97c5fcc";
  document.querySelector("h1").style.backgroundColor = "#855535cc";
  document.querySelector("h2").style.color = "#ffffff";
  document.querySelector("h1").style.color = "#ffffff";
  document.querySelector("body").style.color = "#000000";
  document.querySelector("a").style.color = "#000000";
  document.getElementById("accessibility").style.color = "#000000";
}

function enableLightMode() {
  //SECTION - for logging purposes
  console.log("Enabling Light Mode");
  lightDarkNormalMode = "light";

  //SECTION - updates style to reflect the desired mode
  document.querySelector("body").style.backgroundImage =
    "url('../assets/tile.png')";
  document.querySelector("h2").style.backgroundColor = "#a97c5f66";
  document.querySelector("h1").style.backgroundColor = "#ffffff33";
  document.querySelector("h2").style.color = "#000000";
  document.querySelector("h1").style.color = "#000000";
  document.querySelector("body").style.color = "#000000";
  document.querySelector("a").style.color = "#000000";
  document.getElementById("accessibility").style.color = "#000000";
}
