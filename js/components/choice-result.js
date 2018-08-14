import html from '/js/html.js';

let template = function() {
    return html`
        <p>This is a choice result</p>
        <button type="submit">Continue</button>
   `;
};

export default class ChoiceResult {
    constructor() {
        // this.storyEvent = props.storyEvent;
        // this.continue = props.continue;
    }

    render() {
        let dom = template();   
        
        return dom;
    }
}