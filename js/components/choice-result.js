import html from '/js/html.js';

let template = function(text) {
    return html`
        <p>${text}</p>
        <a class="direction-button" href="../../html/direction.html">Continue</a>
        <a class="ending-button" href="../../html/ending.html">Continue</a>
    `;
};

export default class ChoiceResult {
    constructor(props) {
        this.result = props.result;
        this.storyEvent = props.storyEvent;
        this.choiceNumber = props.choiceNumber;
    }

    render() {
        let text = this.storyEvent[this.result];
        let url;
        let dom = template(text, url);
        let directionButton = dom.querySelector('.direction-button');
        let endingButton = dom.querySelector('.ending-button');
        if(this.choiceNumber < 3) {
            directionButton.style.display = 'inline';
            endingButton.style.display = 'none';
        }
        if(this.choiceNumber >= 3) {
            directionButton.style.display = 'none';
            endingButton.style.display = 'inline';
        }
        console.log('result text', text);
        
        return dom;
    }
}


