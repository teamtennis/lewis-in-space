import html from '../html.js';
import ChoiceButton from './choice-button';

let template = function() {
    return html`
        <section class="two-choices">
            <h2>What will you choose to do?</h2>
            <div class="choices">
                <!-- Looks like a ChoiceButton component, no need to repeat! --> 
            </div> 
        </section>
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
        let dom = template();
        let choices = dom.querySelector('.choices');

        // see changes I made in `api.js` to events;
        let eventChoices = this.storyEvent.choices;

        for(let i = 0; i < eventChoices.length; i++) {
            let eventChoice = eventChoices[i];
            let choiceButton = new ChoiceButton({
                label: eventChoice.label,
                onChoose: () => {
                    // we implicitly know "which" choice via closure
                    this.onChoose(eventChoice);
                }
            });

            choices.appendChild(choiceButton.render());
        }

        return dom;
    }
}