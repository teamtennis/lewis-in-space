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
        this.user = api.getUser();
    }

    render() {
        let dom = template();
        let storyEvent = dom.querySelector('.story-event');
        let choiceArea = dom.querySelector('.choice-area');
        let resultArea = dom.querySelector('.choice-result');
        let user = this.user;

        let lastItemPath = user.path.length - 1;
        let eventIndex = user.path[lastItemPath];
                
        let event = new Event ({
            storyEvent: this.storyEvents[eventIndex]  
        });
        
        let choice = new Choice ({
            storyEvent:  this.storyEvents[eventIndex],
            eventIndex: eventIndex,
            mirror: user.mirror,

            onClick: (eventChoice) => {                
                choiceArea.style.display = 'none';
                resultArea.style.display = 'block';
                
                user.score += eventChoice.outcome;
                user.choices.push(eventChoice);

                let choiceResult = new ChoiceResult ({
                    eventChoice: eventChoice
                });                   

                resultArea.appendChild(choiceResult.render());
            }
        });

        storyEvent.appendChild(event.render());
        choiceArea.appendChild(choice.render());

        return dom;
    }
}