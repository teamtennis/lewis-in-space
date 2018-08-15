import html from '/js/html.js';

let template = function(storyEvent) {
    return html`
        <img class="event-image" src="${storyEvent.img}">
        <div>
            <h1>${storyEvent.title}</h1>
            <p>${storyEvent.text}</p>
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