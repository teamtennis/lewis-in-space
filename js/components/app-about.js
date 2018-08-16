import html from '../html.js';
//import api from '../services/api.js';

let template = function() {
    return html`   
        <section>                    
            <a href="choose-ship.html" class="play-again">
                <img src="img/play-again.png" width="20%"/> 
        </section>
    `;
};

export default class AboutApp {

    render() {
        let dom = template();
        return dom;
    }
}