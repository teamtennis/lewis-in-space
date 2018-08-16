import html from '../html.js';
import api from '../services/api.js';
// import Ship from '/ship.js'

let template = function(user) {
    return html`   
        <div class="direction-screen">

            <img src="${user.userShip}" class="chosen-ship" alt="rocket" width="40%"> 
                     
            <p class="direction-text">Which direction will Lewis choose to fly? Click an arrow.</p>
    
            <a href="event.html" class="left-arrow">
            <img src="img/left-arrow.png" width="20%" />   
            
            <a href="event.html" class="up-arrow">
            <img src="img/up-arrow.png" width="20%" />     
            
            <a href="event.html" class="right-arrow">
            <img src="img/right-arrow.png" width="20%" />    
    `;
};

export default class DirectionApp {
    constructor() {
        this.user = api.getUser();
    }

    render() {
        let user = this.user[0];
        console.log(user);
        let dom = template(user);
        let upArrow = dom.querySelector('.up-arrow');
        let leftArrow = dom.querySelector('.left-arrow');
        let rightArrow = dom.querySelector('.right-arrow');

        if(user.path.indexOf(0) !== -1) {
            upArrow.style.display = 'none';
        }
        if(user.path.indexOf(1) !== -1) {
            leftArrow.style.display = 'none';
        }
        if(user.path.indexOf(2) !== -1) {
            rightArrow.style.display = 'none';
        }
       
        upArrow.addEventListener('click', () => {
            user.path.push(0);
        });
        leftArrow.addEventListener('click', () => {
            user.path.push(1);
        });
        rightArrow.addEventListener('click', () => {
            user.path.push(2);
        });

        return dom;
    }
}