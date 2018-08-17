import html from '../html.js';

let template = function() {
    return html`   
        <section>           
            <a href="choose-ship.html" class="begin-button">
            <img src="img/beginbutton.png" width="20%"/> </a>
                
            <audio class="star-wars-theme" autoplay>
                <source src="music/starwars.mp3" type="audio/mpeg">
            </audio>
        </section>
    `;
};

export default class BackstoryApp {
 
    render() {
        let dom = template();
        let audio = dom.querySelector('.star-wars-theme');
        
        audio.onMouseMove = function() {
            audio.play();
        };
        
        return dom;
    }
}