import BackstoryApp from '../components/app-backstory.js';

let root = document.getElementById('backstory-root');
let backstoryApp = new BackstoryApp();
root.appendChild(backstoryApp.render());