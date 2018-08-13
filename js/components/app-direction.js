import html from '../html.js';
// import api from '../services/api.js';
// import Ship from '/ship.js'

let template = function() {
    return html`   
        <section>
            <img src="../../img/rocket-placeholder.jpg" alt="rocket">          
            <p>Which direction will Lewis choose to fly? Click an arrow.</p>
        </section>
    `;
};

export default class DirectionApp {

    render() {
        let dom = template();
        return dom;
    }
}