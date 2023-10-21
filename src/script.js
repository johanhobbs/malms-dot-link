const header = document.getElementsByClassName("header")
const navigator = document.getElementById("navigator")

class linkContents {
    constructor(linkText, linkPath){
        this.linkText = linkText;
        this.linkPath = linkPath;
    }
}

let home = new linkContents('Home', 'index.html');
let about = new linkContents('About us', 'about.html')
let game = new linkContents('Minigame', 'game.html')
let inventory = new linkContents('Inventory', 'inventory.html')
let rules = new linkContents('rules', 'rules.html')

