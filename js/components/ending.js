import html from '../html.js';

let template = function(image, text, status) {
    return html`
        <h1>${status}</h1>
        <img class="ending-image" src="${image}">
        <p class="ending-text">${text}</p>
   `;
};

export default class Ending {
    constructor(props) {
        this.ending = props.ending;       
    }

    render() {
        let endingImage = this.ending.img;
        let endingText = this.ending.text;
        let endingStatus = this.ending.status;

        let dom = template(endingImage, endingText, endingStatus);
        return dom;
    }
}