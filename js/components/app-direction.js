import html from '../html.js';
import api from '../services/api.js';
// import Ship from '/ship.js'

let template = function() {
    return html`   
        <section>
            <img src="../../img/rocket-placeholder.jpg" alt="rocket" width="50%">          
            <p>Which direction will Lewis choose to fly? Click an arrow.</p>
        </section>

            <a href="../../html/event.html">
            <img src="../../img/left-arrow.png" width="20%" />   
            
            <a href="../../html/event.html" class="up-arrow">
            <img src="../../img/up-arrow.png" width="20%" />     
            
            <a href="../../html/event.html">
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

        upArrow.addEventListener('click', () => {
            user.path.push(0);
            console.log('user path', user.path);
        });

        return dom;
    }
}