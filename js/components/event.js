import html from '/js/html.js';

let template = function(storyEvent) {
    return html`
        <img src="${storyEvent.img}">
        
        
   `;
};

export default class Event {
    constructor(props) {
        this.storyEvent = props.storyEvent;
       
    }

    render() {
        let dom = template();
        
        return dom;
    }
}