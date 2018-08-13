import ChooseShipApp from '../components/app-choose-ship.js';

let root = document.getElementById('choose-ship-root');
let chooseShipApp = new ChooseShipApp();
root.appendChild(chooseShipApp.render());