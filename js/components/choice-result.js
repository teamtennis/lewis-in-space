import html from '/js/html.js';

let template = function(text) {
    return html`
        <p>${text}</p>
        <a class="button" href="../../html/direction.html">Continue</a>
   `;
};

export default class ChoiceResult {
    constructor(props) {
        this.result = props.result;
        this.storyEvent = props.storyEvent;
    }

    render() {
        let text = this.storyEvent[this.result];
        console.log('result text', text);
        let dom = template(text);
        
        return dom;
    }
}


