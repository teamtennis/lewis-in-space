import html from '../html.js';

let template = function(ship) {
    // don't use this as a way to navigate away,
    // because work (selecting the ship) may not be done
    return html`
        <p class="ship-link">
            <img class="ship-image bounce" src="${ship.img}"> 
        </p>
   `;
};

export default class Ship {
    constructor(props) {
        this.ship = props.ship;
        this.onSelect = props.onSelect;
    }

    render() {
        let dom = template(this.ship);

        let shipImage = dom.querySelector('.ship-image');

        shipImage.addEventListener('click', () => {
            this.onSelect(this.ship);
        }); 

        return dom;
    }
}
