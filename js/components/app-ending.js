import html from '../html.js';
import api from '../services/api.js';
import Ending from './ending.js';

let template = function() {
    return html`   
        <section class="ending"></section>  
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
        let music;

        if(choiceNumber >= 3 && userScore === 3) {
            userEnding = endings[0];
            music = 'music/cantina-band.mp3';
        }
        else if(choiceNumber >= 3 && userScore === 1) {
            userEnding = endings[1];
            music = 'music/cantina-band.mp3';
        }
        else if(choiceNumber >= 3 && userScore < 0) {
            userEnding = endings[2];
            music = 'music/imperialborks.mp3';
        }

        let ending = new Ending ({
            ending: userEnding,
            music: music
        });

        endingArea.appendChild(ending.render());

        return dom;
    }
}