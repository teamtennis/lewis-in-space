import html from '/js/html.js';

let template = function(ship) {
    return html`
        <img class="ship-image" src="${ship.img}" width="20%">
        
   `;
};

export default class Ship {
    constructor(props) {
        this.ship = props.ship;
        this.onClick = props.onClick;
    }

    render() {
        let dom = template(this.ship);
        console.log('what is ship', this.ship);

        

        return dom;
    }
}
