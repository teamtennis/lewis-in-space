import html from '../html.js';

let template = function(image) {
    return html`
        <p>Hello Ending!</p>
        <img src="${image}">
        
  
   `;
};

export default class Ending {
    constructor(props) {
        this.ending = props.ending;       
    }

    render() {
        let endingImage = this.ending.img;
        let dom = template(endingImage);
        return dom;
    }
}