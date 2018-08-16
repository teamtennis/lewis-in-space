import html from '../html.js';
import api from '../services/api.js';
import Ending from './ending.js';

let template = function() {
    return html`   
        <section class="ending"></section>

        <a href="about.html">Continue</a>   
    `;
};

export default class EndingApp {
    constructor() {
        this.storyEndings = api.getEndings();
        this.user = api.getUser();
    }

    render() {
        let dom = template();
        let user = this.user[0];
        let userScore = user.score;
        let choiceNumber = user.choices.length;
        let endingArea = dom.querySelector('.ending');
        let endings = this.storyEndings;
        let userEnding;

        if(choiceNumber === 3 && userScore > 0) {
            userEnding = endings[0];
        }
        else if(choiceNumber === 3 && userScore < 0) {
            userEnding = endings[1];
        } else {
            userEnding = endings[2];
        }

        let ending = new Ending ({
            ending: userEnding
        });

        endingArea.appendChild(ending.render());

        return dom;
    }
}