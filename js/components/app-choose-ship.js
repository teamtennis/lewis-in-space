import html from '../html.js';
import api from '../services/api.js';
import Ship from './ship.js';

let template = function() {
    return html`   
        <section>
            <img src="../../img/lewis-logo.png" width="40%" alt="Lewis in Space">        
            <p>Choose your ship:</p>
            <div class="choose-ship"></div>
            
            <section class="ship-choice-1"></section>
            <section class="ship-choice-2"></section>
            
            
            
            <!-- <a href="direction.html">
                <img src="../../img/ufo.png" width="50%" />   
            <a href="direction.html">
                <img src="../../img/rocket-placeholder.jpg" width="30%" />   -->
        </section>
    `;
};

export default class ChooseShipApp {
    constructor() {
        this.ships = api.getShips();
        this.user = api.getUser();
    }

    render() {
        let dom = template();
        let shipChoice1 = dom.querySelector('.ship-choice-1');
        let shipChoice2 = dom.querySelector('.ship-choice-2');

        let ship = new Ship ({
            ship: this.ships

            //onClick: (button) => {
                
            //}
        });

        shipChoice1.appendChild(ship.render());

        return dom;
    }
}