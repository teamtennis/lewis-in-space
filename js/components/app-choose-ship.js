import html from '../html.js';
// import api from '../services/api.js';
// import Ship from '/ship.js'

let template = function() {
    return html`   
        <section>
            <img src="../../img/rocket-placeholder.jpg" alt="Lewis in Space">        
            <p>Choose your ship:</p>
            <div class="choose-ship"></div>
        </section>
    `;
};

export default class ChooseShipApp {

    render() {
        let dom = template();
        return dom;
    }
}