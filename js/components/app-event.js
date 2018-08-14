import html from '../html.js';
import api from '../services/api.js';
import Event from './event.js';
import ChoiceResult from './choice-result.js';
import Choice from './choice.js';

let template = function() {
    return html`   
        <section class="story-event"></section>
        <section class="choice-area"></section>
        <section class="choice-result"></section> 
    `;
};

export default class EventApp {
    constructor() {
        this.storyEvents = api.getEvents();
        this.userScore = api.userScore();
        this.userChoices = api.userChoices();
    }

    render() {
        let dom = template();
        let storyEvent = dom.querySelector('.story-event');
        let choiceArea = dom.querySelector('.choice-area');
        let resultArea = dom.querySelector('.choice-result');
        let userChoices = this.userChoices;

        let event = new Event ({
            storyEvent: this.storyEvents[0]  
        });

        let choice = new Choice ({
            storyEvent:  this.storyEvents[0],

            onClick: (button) => {
               
                let buttonValue = parseInt(button.value);
                let buttonName = button.name;
                this.userScore += buttonValue;
                choiceArea.style.display = 'none';
                resultArea.style.display = 'block';
                userChoices.push(buttonName);
            }
        });

        let choiceResult = new ChoiceResult ({
            storyEvent:  this.storyEvents[0]
        });

        storyEvent.appendChild(event.render());
        choiceArea.appendChild(choice.render());
        resultArea.appendChild(choiceResult.render());

        return dom;
    }
}