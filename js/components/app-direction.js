import html from '../html.js';
import api from '../services/api.js';
// import Ship from '/ship.js'

let template = function(user) {
    return html`   
        <div class="direction-screen">

            <img src="${user.userShip}" class="chosen-ship ship-direction bounce" alt="rocket" width="40%"> 
                     
            <p class="direction-text">Which direction will Lewis choose to fly? Click an arrow.</p>
    
            <p class="left-arrow grow2">
                <img src="img/left-arrow.png" width=40%/>   
            </p>

            <p class="up-arrow grow2">
                <img src="img/up-arrow.png" width=40%/>     
            </p>

            <p class="right-arrow grow2">
                <img src="img/right-arrow.png" width=40%/> 
            </p>
        </div>   
    `;
};

export default class DirectionApp {
    constructor() {
        this.user = api.getUser();
    }

    render() {
        let user = this.user[0];
        let dom = template(user);
        let upArrow = dom.querySelector('.up-arrow');
        let leftArrow = dom.querySelector('.left-arrow');
        let rightArrow = dom.querySelector('.right-arrow');

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
            // would be better to track "user.currentPath"
            user.path.push(0);
            window.location.href = 'event.html';
        });
        leftArrow.addEventListener('click', () => {
            user.path.push(1);
            window.location.href = 'event.html';
        });
        rightArrow.addEventListener('click', () => {
            user.path.push(2);
            window.location.href = 'event.html';
        });

        return dom;
    }
}