import html from '../html.js';
// import api from '../services/api.js';
// import Ship from '/ship.js'

let template = function() {
    return html`   
        <section>
            <img src="../../img/rocket-placeholder.jpg" alt="rocket" width="50%">          
            <p>Which direction will Lewis choose to fly? Click an arrow.</p>
        </section>

            <a href="app-event.js">
                <img src="../../img/left-arrow.png" width="20%" />   
            
            <a href="app-event.js">
                <img src="../../img/up-arrow.png" width="20%" />     
            
            <a href="app-event.js">
                <img src="../../img/right-arrow.png" width="20%" />        
            
    `;
};

export default class DirectionApp {

    render() {
        let dom = template();
        return dom;
    }
}