import html from '../html.js';
import api from '../services/api.js';

let template = function() {
    return html`   
        <h2>Take a look in the mirror to see who you're becoming:</h2>
        <a class="game-continue-button" href="direction.html">Continue</a>
        <a class="ending-button" href="ending.html">Continue</a>
        <img class="pirate" src="img/pirate-placeholder.jpg">
        <img class="evil" src="img/evil-placeholder.jpg">
        <img class="darth" src="img/darth-placeholder.jpg">
    `;
};

export default class DarkInfluence {
    constructor() {
        this.user = api.getUser();
    }

    render() {
        let dom = template();
        let user = this.user[0];
        let pirate = dom.querySelector('.pirate');
        let evil = dom.querySelector('.evil');
        let darth = dom.querySelector('.darth');
        let choiceNumber = user.choices.length;
        let continueButton = dom.querySelector('.game-continue-button');
        let endingButton = dom.querySelector('.ending-button');

        if(user.mirror.indexOf(2) !== -1) {
            darth.style.display = 'block';
        }
        if(user.mirror.indexOf(1) !== -1) {
            evil.style.display = 'block';
        }
        if(user.mirror.indexOf(0) !== -1) {
            pirate.style.display = 'block';
        }

        if(choiceNumber < 3) {
            continueButton.style.display = 'block';
            endingButton.style.display = 'none';
        }
        else {
            continueButton.style.display = 'none';
            endingButton.style.display = 'block';
        }

        return dom;
    }
}