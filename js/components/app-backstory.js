import html from '../html.js';
// import api from '../services/api.js';

let template = function() {
    return html`   
        <section>           
            <p>Hello backstory!</p>
        </section>
    `;
};

export default class BackstoryApp {

    render() {
        let dom = template();
        return dom;
    }
}