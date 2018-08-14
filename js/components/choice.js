import html from '/js/html.js';

let template = function(storyEvent) {
    return html`
        <h2>${storyEvent.choice1a}</h2>
        <button type="submit" value="1" name="choice1a" class="choice1">${storyEvent.buttonText1}</button>
        <h2>${storyEvent.choice1b}</h2>
        <button type="submit" value="-1" name="choice1b" class="choice2">${storyEvent.buttonText2}</button>
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
            console.log('scoreChange', parseInt(button1.value));
        });

        button2.addEventListener('click', () => {
            this.onClick(button2);
            console.log('scoreChange', parseInt(button2.value));
        });


        console.log('button1', button1.value);     
        
        return dom;
    }
}