import html from '../html.js';

let template = function(image, text, music) {
    return html`
        <h2 class="ending-text">${text}</h2>
        <a class="game-continue-button" href="about.html"></a>
        <img class="ending-image" src="${image}">
        <audio class="imperial-barks" autoplay>
        <source src="${music}" type="audio/mpeg">
   `;
};

export default class Ending {
    constructor(props) {
        this.ending = props.ending;   
        this.music = props.music;    
    }

    render() {
        let endingImage = this.ending.img;
        let endingText = this.ending.text;
        let music = this.music;
        let dom = template(endingImage, endingText, music);
        let audio = dom.querySelector('.imperial-barks');

        audio.onMouseMove = function() {
            audio.play();
        };

        
        return dom;
    }
}