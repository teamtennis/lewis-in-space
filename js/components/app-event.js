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
        let user = this.user[0];
        let eventIndex = user.path.length - 1;
        console.log('user path api', user.path);
        console.log('user.score', user.score);
        
        let event = new Event ({
            storyEvent: this.storyEvents[eventIndex]  
        });
        
        let choice = new Choice ({
            storyEvent:  this.storyEvents[eventIndex],
            eventIndex: eventIndex,
            
            onClick: (button) => {                
                let buttonValue = parseInt(button.value);
                let buttonName = button.name;
                user.score += buttonValue;
                choiceArea.style.display = 'none';
                resultArea.style.display = 'block';
                user.choices.push(buttonName);
                console.log('user[0]', user);
                console.log('on click score', user.score);

                let lastItem = user.choices.length - 1;
                let choiceResult = new ChoiceResult ({
                    result: user.choices[lastItem],
                    storyEvent: this.storyEvents[1]
                });
                console.log('api result', choiceResult);
                resultArea.appendChild(choiceResult.render());
            }
        });
    
       

        storyEvent.appendChild(event.render());
        choiceArea.appendChild(choice.render());

        return dom;
    }
}