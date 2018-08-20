import html from '../html.js';

let template = function(text) {
    return html`
        <h2>Consequences</h2>
        <p>${text}</p>
        <a class="get-fuel-button grow" href="get-snacks.html"></a>
        <a class="dark-influence-button grow" href="dark-influence.html"></a>
    `;
};

export default class ChoiceResult {
    constructor(props) {
        this.eventChoice = props.eventChoice;
    }

    render() {
        let dom = template(this.eventChoice.result);

        let getFuelButton = dom.querySelector('.get-fuel-button');
        let darkInfluenceButton = dom.querySelector('.dark-influence-button');
        
        if(this.eventChoice.isDark) {
            darkInfluenceButton.style.display = 'block';
            getFuelButton.style.display = 'none';
        } else {
            darkInfluenceButton.style.display = 'none';
            getFuelButton.style.display = 'block';
        }

        return dom;
    }
}


