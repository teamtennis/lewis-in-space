import html from '../html.js';
// import api from '../services/api.js';
// import Ship from '/ship.js'

let template = function() {
    return html`   
        <section>           
            <p>Hello direction!</p>
        </section>
    `;
};

export default class DirectionApp {

    render() {
        let dom = template();
        return dom;
    }
}