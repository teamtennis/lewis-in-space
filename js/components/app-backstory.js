import html from '../html.js';

// all your app html goes here...

let template = function() {
    return html`   
        <div id="titles">
            <div id="titlecontent">
            <p class="center">EPISODE IV<br />
            LEWIS IN SPACE</p>
            <p>Our furry friend was last seen fleeing the paws of the insidious Darth Journey. Lewis the Dog is now lost in the reaches of space itself.</p>
            <p> With fuel tanks running low, Lewis needs to make some snap decisions to make it back to his home, Planet Alchemy.</p>
            <p>Marty Solo and Princess Megan Organa are patiently standing by for his arrival. Countless amounts of treats and personal space are awaiting our courageous canine.</p>
            <p>It's up to Lewis and Lewis alone to make the right choices to arrive safely. As each scenario unfolds, choose the best path for Lewis and his adventure.</p>
            <p>Be careful! The Dark Side is strong in this neck of the woods. If you make too many dark decisions, who knows what'll happen!</p>
        </div>
        <section>  
            <a href="choose-ship.html" class="begin-button">
            <img src="img/beginbutton.png" width="30%"/> </a>

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