import AboutApp from '../components/app-about.js';

let root = document.getElementById('about-root');
let aboutApp = new AboutApp();
root.appendChild(aboutApp.render());