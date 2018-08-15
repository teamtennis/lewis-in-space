import GetSnacksApp from '../components/app-get-snacks.js';

let root = document.getElementById('get-snacks-root');
let getSnacksApp = new GetSnacksApp();
root.appendChild(getSnacksApp.render());