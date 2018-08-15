import data from './data.js';

let user = data.user;

if(!user) {
    data.user = createUser();
    user = data.user;
}

function createUser() {
    let data = [{
        score: 0,
        choices: [],
        path: [],
        userShip: '',
        mirror: []
    }];
    return data;
}
console.log('data', data);

let ships = [{ 
    name: 'rocket',
    img: '../../img/rocket-placeholder.jpg'    
    
}, {
    name: 'ufo',
    img: '../../img/ufo.png'    
}];

let arrows = [{
    name: 'left',
    img: '../../img/left-arrow.png'
}, {
    name: 'right',
    img: '../../img/right-arrow.png'
}, {
    name: 'up',
    img: '../../img/up-arrow.png'
}];

let storyEvents = [{
    title: 'Space Pirates',
    text: 'space pirate story text',
    img: '../../img/event1-placeholder.jpg',  
    choice0a: 'this is your first pirate choice',
    choice0b: 'this is your second pirate choice',
    buttonText0a: 'Pick me',
    buttonText0b: 'No, pick me',
    choice0aResult: 'choice 0a results text',
    choice0bResult: 'choice 0b results text'
}, {
    title: 'Distress Signal from Furtuna9',
    text: 'While trying to pass unnoticed through the cat-space, where no dogs are allowed, Lewis receives a distress signal from the cat planet Furtuna9. An asteroid big enough to destroy a major city is heading straight toward their planet, and you are the only ship close enough to take action to divert it. What do you choose to do?',
    img: '../../img/event2-placeholder.jpg',  
    choice1a: 'You risk your life, ship, and use up most of the snack fuel you need to power your ship in an attempt to prevent a cat-aststrophe. You change your heading to intercept the asteroid and plan to use your ship to nudge it onto a different course',
    choice1b: 'You have no weapons, a ship barely big enough for a dog, and and limited snack fuel. Even if you could get to the asteroid in time, you could easily run out of fuel and never make it home to Planet Alchemy where you have friends and family waiting for you. With some reluctance, you continue on your journey as if you never heard the distress signal',
    buttonText1a: 'Choice A',
    buttonText1b: 'Choice B',
    choice1aResult: 'choice 1a results text',
    choice1bResult: 'choice 1b results text'
}, {
    title: 'Some Other Story',
    text: 'some other story text',
    img: '../../img/event3-placeholder.jpg',  
    choice2a: 'this is your first other choice',
    choice2b: 'this is your second other choice',
    buttonText2a: 'Do not press this button',
    buttonText2b: 'Danger',
    choice2aResult: 'choice 2a results text',
    choice2bResult: 'choice 2b results text'
}];

let backstory = [{
    gameName: 'Lewis in Space',
    episode: 'IV',
    text: 'insert text here'
}];

let storyEndings = [{
    img: '../../img/good-planet-placeholder.jpg',
    status: 'you are home',
    text: 'this is the story of your good ending'
}, {
    img: '../../img/bad-planet-placeholder.jpg',
    status: 'you are a bad bad doggo',
    text: 'this is the story of your bad ending'
}, {
    img: '../../img/oops-dog.jpg',
    status: 'Oops',
    text: 'you reached this page in error'
}];

export default {

    getEvents: function() {
        return storyEvents;
    },
    
    getUser: function() {
        return user;
    },

    getShips: function() {
        return ships;
    },

    getEndings: function() {
        return storyEndings;
    }

};