import html from '../html.js';
import api from '../services/api.js';

let template = function() {
    return html`   
        <a class="game-continue-button" href="direction.html"></a>
        <a class="ending-button" href="ending.html"></a>
        <h1>Lewis, You've Changed</h1>
        <h2>Take a look in the mirror...<h2>
        <img class="mirror1 mirror" src="img/dark-influence-1.jpg">
        <img class="mirror2 mirror" src="img/dark-influence-2.jpg">
        <img class="mirror3 mirror" src="img/dark-influence-3.jpg">
    `;
};

export default class DarkInfluence {
    constructor() {
        this.user = api.getUser();
    }

    render() {
        let dom = template();
        let user = this.user[0];
        let mirror1 = dom.querySelector('.mirror1');
        let mirror2 = dom.querySelector('.mirror2');
        let mirror3 = dom.querySelector('.mirror3');
        let choiceNumber = user.choices.length;
        let continueButton = dom.querySelector('.game-continue-button');
        let endingButton = dom.querySelector('.ending-button');

        if(user.mirror.length === 1) {
            mirror1.style.display = 'block';
            mirror2.style.display = 'none';
            mirror3.style.display = 'none';
        } else if(user.mirror.length === 2) {
            mirror1.style.display = 'none';
            mirror2.style.display = 'block';
            mirror3.style.display = 'none';
        } else if(user.mirror.length === 3) {
            mirror1.style.display = 'none';
            mirror2.style.display = 'none';
            mirror3.style.display = 'block';
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