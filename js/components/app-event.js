import html from '../html.js';
import api from '../services/api.js';
import Event from './event.js'

let template = function() {
    return html`   
        <section>           
            <p>Hello event!</p>
        </section>
        <section class="story-event">
           
        </section>
        
    `;
};

export default class EventApp {
    constructor() {
        this.storyEvents = api.getEvents();
    
    }

    render() {
        let dom = template();
        let storyEvent = dom.querySelector('.story-event');
        
        let event = new Event ({
            
        });


        storyEvent.appendChild(event.render());
        return dom;
    }
}