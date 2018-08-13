import EndingApp from '../components/app-ending.js';

let root = document.getElementById('ending-root');
let endingApp = new EndingApp();
root.appendChild(endingApp.render());