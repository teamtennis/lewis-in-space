import html from '../html.js';

let template = function(label) {
    return html`
        <div class="choice">
            <button class="choice-button grow">
                ${label}
            </button>
        </div>   
   `;
};

export default class Choice {
    constructor(props) {
        this.label = props.label;
        this.onChoose = props.onChoose;
    }

    render() {
        let dom = template(this.label);
        let button = dom.querySelector('button');
        
        button.addEventListener('click', () => {
            this.onChoose();
        });

        return dom;
    }
}