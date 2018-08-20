import html from '../html.js';
import api from '../services/api.js';

let template = function(darknessLevel) {
    return html`   
        <a class="game-continue-button grow" href="direction.html"></a>
        <a class="ending-button grow" href="ending.html"></a>
        <div class="mirror-text">
            <h1>Lewis, You've Changed</h1>
            <h2>Take a look in the mirror...<h2>
        </div>
        <img class="mirror" src="img/dark-influence-${darknessLevel}.jpg">
    `;
};

export default class DarkInfluence {
    constructor() {
        this.user = api.getUser();
    }

    render() {
        let user = this.user;
        let darknessLevel = user.mirror.length;
        let dom = template(darknessLevel);
        
        if(!darknessLevel) {
            let image = dom.querySelector('img');
            image.style.display = 'none';
        }
        
        let continueButton = dom.querySelector('.game-continue-button');
        let endingButton = dom.querySelector('.ending-button');

        if(user.choices.length < 3) {
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