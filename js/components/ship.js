import html from '/js/html.js';

let template = function(ship) {
    return html`
         <a href="../../html/direction.html" class="">
            <img class="ship-image " src="${ship.img}" width="20%"> 
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
