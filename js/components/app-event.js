import html from '../html.js';
import api from '../services/api.js';
import Event from './event.js';

let template = function() {
    return html`   
        <section class="story-event">
           
        </section>
        
    `;
};

export default class EventApp {
    constructor() {
        this.storyEvents = api.getEvents();
        this.userScore = api.userScore();
    
    }

    render() {
        let dom = template();
        let storyEvent = dom.querySelector('.story-event');
        console.log('user score', this.userScore);
        
        let event = new Event ({
            storyEvent: this.storyEvents[0],  
            
            onClick: (button) => {
               
                console.log('app button clicked', parseInt(button.value));
                let buttonName = button.name;
                console.log('button name', buttonName);
                if(buttonName === 'choice1a') {
                    console.log('if button', buttonName);
                }
                if(buttonName === 'choice1b') {
                    console.log('if other button', buttonName);
                }
        
            }
        });



        storyEvent.appendChild(event.render());
        return dom;
    }
}