import html from '/js/html.js';

let template = function() {
    return html`
        <p>This is a choice result</p>
        <a class="button" href="../../html/direction.html">Continue</a>
   `;
};

export default class ChoiceResult {
    constructor(props) {
        this.storyEvent = props.storyEvent;
    }

    render() {
        let dom = template();   
        
        return dom;
    }
}