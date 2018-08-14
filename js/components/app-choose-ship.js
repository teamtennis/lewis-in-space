import html from '../html.js';
// import api from '../services/api.js';
// import Ship from '/ship.js'

let template = function() {
    return html`   
        <section>
            <img src="../../img/lewis-logo.png" width="40%" alt="Lewis in Space">        
            <p>Choose your ship:</p>
            <div class="choose-ship"></div>
            
            <a href="direction.html">
                <img src="../../img/ufo.png" width="50%" />   

            <a href="direction.html">
                <img src="../../img/rocket-placeholder.jpg" width="30%" />  
        </section>
    `;
};

export default class ChooseShipApp {

    render() {
        let dom = template();
        return dom;
    }
}