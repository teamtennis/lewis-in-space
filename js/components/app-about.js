import html from '../html.js';
// import api from '../services/api.js';

let template = function() {
    return html`   
        <section>           
            <p>Hello about!</p>
        </section>
    `;
};

export default class AboutApp {

    render() {
        let dom = template();
        return dom;
    }
}