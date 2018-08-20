import html from '../html.js';

let template = function(storyEvent) {
    return html`
        <div class="event-story">
            <img class="event-image" src="${storyEvent.img}">
            <div class="event-text">
                <h1>${storyEvent.title}</h1>
                <p>${storyEvent.text}</p>
            </div>
        </div>
   `;
};

export default class Event {
    constructor(props) {
        this.storyEvent = props.storyEvent;
    }

    render() {
        let dom = template(this.storyEvent);
        return dom;
    }
}