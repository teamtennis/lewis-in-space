import html from '../html.js';
import api from '../services/api.js';
// import Ship from '/ship.js'

let template = function() {
    return html`   
        <section>
            <img src="../../img/rocket-placeholder.jpg" alt="rocket" width="50%">          
            <p>Which direction will Lewis choose to fly? Click an arrow.</p>
            <button type="reset" class="reset-path">Reset path history</button>
        </section>

            <a href="../../html/event.html" class="left-arrow">
            <img src="../../img/left-arrow.png" width="20%" />   
            
            <a href="../../html/event.html" class="up-arrow">
            <img src="../../img/up-arrow.png" width="20%" />     
            
            <a href="../../html/event.html" class="right-arrow">
                <img src="../../img/right-arrow.png" width="20%" />    
    `;
};

export default class DirectionApp {
    constructor() {
        this.user = api.getUser();
    }

    render() {
        let dom = template();
        let user = this.user[0];
        let upArrow = dom.querySelector('.up-arrow');
        let leftArrow = dom.querySelector('.left-arrow');
        let rightArrow = dom.querySelector('.right-arrow');
        let resetPath = dom.querySelector('.reset-path');
        

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
        resetPath.addEventListener('click', () => {
            user.path = [];
        });

        return dom;
    }
}