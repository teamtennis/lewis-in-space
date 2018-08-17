import html from '../html.js';

let template = function(image, text) {
    return html`
        <h2 class="ending-text">${text}</h2>
        <a class="game-continue-button" href="about.html"></a>
        <img class="ending-image" src="${image}">
   `;
};

export default class Ending {
    constructor(props) {
        this.ending = props.ending;       
    }

    render() {
        let endingImage = this.ending.img;
        let endingText = this.ending.text;

        let dom = template(endingImage, endingText);
        return dom;
    }
}