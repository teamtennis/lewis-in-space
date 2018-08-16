import html from 'js/html.js';

let template = function(ship) {
    return html`
         <a href="direction.html" class="ship-link">
            <img class="ship-image" src="${ship.img}"> 
        </a>
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
