import html from '../html.js';

let template = function(ending) {
    return html`
        <h2 class="ending-text">${ending.text}</h2>
        <a class="game-continue-button" href="about.html"></a>
        <img class="ending-image" src="${ending.image}">
        <audio class="imperial-barks" autoplay>
        <source src="${ending.music}" type="audio/mpeg">
   `;
};

export default class Ending {
    constructor(props) {
        this.ending = props.ending;   
    }

    render() {
        let dom = template(this.ending);
        let audio = dom.querySelector('.imperial-barks');
        audio.onMouseMove = function() {
            audio.play();
        };
        return dom;
    }
}