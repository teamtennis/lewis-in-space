import html from '/js/html.js';

let template = function(storyEvent, eventIndex, choice1, choice2, button1Selector, button2Selector) {
    return html`
        <p>${storyEvent[choice1]}</p>
        <button type="submit" value="1" name="choice${eventIndex}aResult" class="choice1">${storyEvent[button1Selector]}</button>
        <p>${storyEvent[choice2]}</p>
        <button type="submit" value="-1" name="choice${eventIndex}bResult" class="choice2">${storyEvent[button2Selector]}</button>
   `;
};

export default class Choice {
    constructor(props) {
        this.storyEvent = props.storyEvent;
        this.onClick = props.onClick;
        this.eventIndex = props.eventIndex;
        this.mirror = props.mirror;
    }

    render() {
        let eventIndex = this.eventIndex;
        let choice1 = 'choice' + [eventIndex] + 'a';
        let button1Selector = 'buttonText' + [eventIndex] + 'a';
        let choice2 = 'choice' + [eventIndex] + 'b';
        let button2Selector = 'buttonText' + [eventIndex] + 'b';
        let dom = template(this.storyEvent, eventIndex, choice1, choice2, button1Selector, button2Selector);
        let button1 = dom.querySelector('.choice1');
        let button2 = dom.querySelector('.choice2');
        
        button1.addEventListener('click', () => {
            this.onClick(button1);
        });

        button2.addEventListener('click', () => {
            this.onClick(button2);
            this.mirror.push(eventIndex);
            console.log('choice mirror', this.mirror);
        });

        return dom;
    }
}