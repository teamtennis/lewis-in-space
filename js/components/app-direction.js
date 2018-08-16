import html from '../html.js';
import api from '../services/api.js';
// import Ship from '/ship.js'

let template = function(user) {
    return html`   
        <div class="direction-screen">

            <img src="${user.userShip}" class="chosen-ship" alt="rocket" width="40%"> 
                     
            <p class="direction-text">Which direction will Lewis choose to fly? Click an arrow.</p>
            <button type="reset" class="reset-path">Reset path history</button>
    
            <a href="event.html" class="left-arrow">
            <img src="img/left-arrow.png" width=40%/>   
            
            <a href="event.html" class="up-arrow">
            <img src="img/up-arrow.png" width=40%/>     
            
            <a href="event.html" class="right-arrow">
            <img src="img/right-arrow.png" width=40%/>    
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
        let resetPath = dom.querySelector('.reset-path');
        

        if(user.path.indexOf(0) !== -1) {
            upArrow.style.visibility = 'hidden';
        }
        if(user.path.indexOf(1) !== -1) {
            leftArrow.style.visibility = 'hidden';
        }
        if(user.path.indexOf(2) !== -1) {
            rightArrow.style.visibility = 'hidden';
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
        resetPath.addEventListener('click', () => {
            user.path = [];
        });

        return dom;
    }
}