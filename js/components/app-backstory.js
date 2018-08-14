import html from '../html.js';
// import api from '../services/api.js';

let template = function() {
    return html`   
        <section>           
            <a href="../../html/choose-ship.html" class="begin-button">
                <img src="../../img/beginbutton.png" width="20%"/>  
        </section>
    `;
};

export default class BackstoryApp {

    render() {
        let dom = template();
        return dom;
    }
}