import html from '/js/html.js';

let template = function() {
    return html`
        <img src="../../img/good-planet-placeholder.jpg">
        
        
   `;
};

export default class Event {
    constructor(props) {
       
    }

    render() {
        let dom = template();
        // let storyEvent = dom.querySelector('.story-event');
        return dom;
    }
}