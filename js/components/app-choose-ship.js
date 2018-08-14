import html from '../html.js';
import api from '../services/api.js';
import Ship from './ship.js';

let template = function() {
    return html`   
        <section>
            <img src="../../img/lewis-logo.png" width="40%" alt="Lewis in Space">        
            <p>Choose your ship:</p>
            <div class="choose-ship"></div>
            
            <section class="ship-choices"></section>
           
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
        console.log('user:', this.user);
        let shipChoice = dom.querySelector('.ship-choices');
        let user = this.user[0];

        for(var i = 0; i < this.ships.length; i++) {
            //console.log('this ship is a ', this.ships[i]);
            let ship = new Ship ({
                ship: this.ships[i],
                user: this.user,
                
                onSelect: (ship) => {
                    console.log('user on select', this.user);
                    console.log('ship on select', ship);
                    user.userShip = '';
                    user.userShip = ship.img;
                    console.log('userShip', this.user.userShip);
                }
            });
    
            shipChoice.appendChild(ship.render());
        }
        
        return dom;
    }
}