import EventApp from '../components/app-event.js';

let root = document.getElementById('event-root');
let eventApp = new EventApp();
root.appendChild(eventApp.render());