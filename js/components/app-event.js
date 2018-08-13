import html from '../html.js';
// import api from '../services/api.js';
// import Event from './event.js'

let template = function() {
    return html`   
        <section>           
            <p>Hello event!</p>
        </section>
    `;
};

export default class EventApp {

    render() {
        let dom = template();
        return dom;
    }
}