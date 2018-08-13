import html from '../html.js';
// import api from '../services/api.js';
// import Ship from '/ship.js'

let template = function() {
    return html`   
        <section>
            <img src="../../img/rocket-placeholder.jpg" alt="rocket" width="50%">          
            <p>Which direction will Lewis choose to fly? Click an arrow.</p>
        </section>

            <div>
            <input type="image" id="left-arrow" src="../../img/left-arrow.png" width="20%"/>
            </div

            <div>
            <input type="image" id="up-arrow" src="../../img/up-arrow.png" width="20%" />     
            </div>

            <div>
            <input type="image" id="right-arrow" src="../../img/right-arrow.png" width="20%" />     
            </div>
    `;
};

export default class DirectionApp {

    render() {
        let dom = template();
        return dom;
    }
}