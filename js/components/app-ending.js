import html from '../html.js';
import api from '../services/api.js';
import Ending from './ending.js';

let template = function() {
    return html`   
        <section class="ending"></section>

        <a href="../../html/about.html">Continue</a>   
    `;
};

export default class EndingApp {
    constructor() {
        this.storyEndings = api.getEndings();
    }

    render() {
        let dom = template();
        let endingArea = dom.querySelector('.ending');
        let ending = new Ending ({
            ending: this.storyEndings[0]
        });
        endingArea.appendChild(ending.render());

        return dom;
    }
}