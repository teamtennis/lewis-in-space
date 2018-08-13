import DirectionApp from '../components/app-direction.js';

let root = document.getElementById('direction-root');
let directionApp = new DirectionApp();
root.appendChild(directionApp.render());