import html from '/js/html.js';

let template = function(storyEvent) {
    return html`
        <h2>${storyEvent.choice0a}</h2>
        <button type="submit" value="1" name="choice0a" class="choice1">${storyEvent.buttonText0a}</button>
        <h2>${storyEvent.choice0b}</h2>
        <button type="submit" value="-1" name="choice0b" class="choice2">${storyEvent.buttonText0b}</button>
   `;
};

export default class Choice {
    constructor(props) {
        this.storyEvent = props.storyEvent;
        this.onClick = props.onClick;
    }

    render() {
        let dom = template(this.storyEvent);
        let button1 = dom.querySelector('.choice1');
        let button2 = dom.querySelector('.choice2');
        
        button1.addEventListener('click', () => {
            this.onClick(button1);
        });

        button2.addEventListener('click', () => {
            this.onClick(button2);
        });


        console.log('button1', button1.value);     
        
        return dom;
    }
}