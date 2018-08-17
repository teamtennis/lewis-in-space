import html from '../html.js';

let template = function(text) {
    return html`
        <h2>The Consequences of Your Choice</h2>
        <p>${text}</p>
        <a class="get-fuel-button" href="get-snacks.html"></a>
        <a class="dark-influence-button" href="dark-influence.html"></a>
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
        let getFuelButton = dom.querySelector('.get-fuel-button');
        let darkInfluenceButton = dom.querySelector('.dark-influence-button');
        let result = this.result;


        let darkChoice = result.indexOf('b');
    
        if(darkChoice !== -1) {
            darkInfluenceButton.style.display = 'block';
            getFuelButton.style.display = 'none';
        } else {
            darkInfluenceButton.style.display = 'none';
            getFuelButton.style.display = 'block';
        }

        return dom;
    }
}


