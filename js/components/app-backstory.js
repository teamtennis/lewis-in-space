import html from '../html.js';
// import api from '../services/api.js';

let template = function() {
    return html`   
        <section>           
            <a href="../../html/choose-ship.html" class="begin-button">
                <img src="img/beginbutton.png" width="20%"/> 
                
            <audio class="star-wars-theme">
                <source src="../../music/starwars.mp3" type="audio/mpeg">
            </audio>

        </section>
    `;
};

export default class BackstoryApp {
 
    render() {
        let dom = template();
        let audio = dom.querySelector('.star-wars-theme');
        // audio.autoplay = true;
        audio.onMouseMove = function() {
            audio.play();
        };
        return dom;
    }
}