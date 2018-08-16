import html from '/js/html.js';

let template = function(storyEvent, eventIndex, choice1, choice2) {
    return html`
        <section class="two-choices">
            <h2>What will you choose to do?</h2>
            <div class="choices">
                <div class="choice">
                    <p>${storyEvent[choice1]}</p>
                    <button type="submit" value="1" name="choice${eventIndex}aResult" class="choicea"></button>
                </div>  
                <div class="choice">
                    <p>${storyEvent[choice2]}</p>
                    <button type="submit" value="-1" name="choice${eventIndex}bResult" class="choiceb"></button>
                </div> 
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
        let eventIndex = this.eventIndex;
        let choice1 = 'choice' + [eventIndex] + 'a';
        let choice2 = 'choice' + [eventIndex] + 'b';
        let dom = template(this.storyEvent, eventIndex, choice1, choice2);
        let button1 = dom.querySelector('.choicea');
        let button2 = dom.querySelector('.choiceb');
        
        button1.addEventListener('click', () => {
            this.onClick(button1);
        });

        button2.addEventListener('click', () => {
            this.onClick(button2);
            this.mirror.push(eventIndex);
        });

        return dom;
    }
}