import html from '/js/html.js';

let template = function(storyEvent) {
    return html`
        <img class="event-image" src="${storyEvent.img}">
        <div>
            <h1>${storyEvent.title}</h1>
            <p>${storyEvent.text}</p>
            <h2 class="event-choices">${storyEvent.choice1}</h2>
            <button type="submit" value="1" class="event-choices choice1">${storyEvent.buttonText1}</button>
            <h2 class="event-choices">${storyEvent.choice2}</h2>
            <button type="submit" value="-1" class="event-choices choice2">${storyEvent.buttonText2}</button>
        </div>
   `;
};

export default class Event {
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
            this.onClick(this.button2);
            this.onClick(button2);
            console.log('scoreChange', parseInt(button2.value));
        });


        console.log('button1', button1.value);     
        
        return dom;
    }
}