import html from '../html.js';

let template = function() {
    return html`   
        <section>           
            <a href="choose-ship.html" class="begin-button">
            <img src="img/beginbutton.png" width="30%"/> </a>
        </section>
    `;
};

export default class BackstoryApp {
 
    render() {
        let dom = template();
        
        return dom;
    }
}