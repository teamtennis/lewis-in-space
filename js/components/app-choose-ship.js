import html from '../html.js';
import api from '../services/api.js';
import Ship from './ship.js';

let template = function() {
    return html`   
        <section> 
            <div class="ship-grid">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
                <div>21</div>
                <div>22</div>
                <div>23</div>
                <div>24</div>
            </div>
<img src="../../img/lewis-logo.png"class="lewis-logo">        


            <p>Choose your ship:</p>
            <div class="choose-ship"></div>
            
            <section class="ship-choices"></section>
           
        </section>
    `;
};

export default class ChooseShipApp {
    constructor() {
        this.ships = api.getShips();
        this.user = api.getUser();
    }

    render() {
        let user = this.user[0];
        
        window.addEventListener('load', () => {
            user.score = 0;
            user.choices = [];
            user.path = [];
            user.userShip = '';
            user.mirror = [];
        });

        let dom = template();
        let shipChoice = dom.querySelector('.ship-choices');

        for(var i = 0; i < this.ships.length; i++) {
            let ship = new Ship ({
                ship: this.ships[i],
                user: this.user,
                
                onSelect: (ship) => {
                    user.userShip = '';
                    user.userShip = ship.img;
                }
            });
    
            shipChoice.appendChild(ship.render());
        }
        
        return dom;
    }
}