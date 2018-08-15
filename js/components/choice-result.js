import html from '/js/html.js';

let template = function(text) {
    return html`
        <p>${text}</p>
        <a class="get-fuel-button" href="../../html/get-snacks.html">Get Snack Fuel</a>
        <a class="dark-influence-button" href="../../html/dark-influence.html">You've Changed</a>
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
        console.log('darkChoice', darkChoice);
    
        if(darkChoice !== -1) {
            darkInfluenceButton.style.display = 'inline-block';
            getFuelButton.style.display = 'none';
        } else {
            darkInfluenceButton.style.display = 'none';
            getFuelButton.style.display = 'inline-block';
        }


        console.log('result text', text);
        
        return dom;
    }
}


