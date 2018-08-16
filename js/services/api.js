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
    img: 'img/rocket.png'    
    
}, {
    name: 'ufo',
    img: 'img/ufo.png'    
}];

let storyEvents = [{
    title: 'Slime Pirates',
    text: 'You fell asleep at the controls and drifted off course. You wake abruptly, salivating, to the sound of a warning bell. You check your radar and are horrified to see a slime pirate ship has found you and it is closing in fast. You start up your engine, preparing to flee. Your space ship is low on snack fuel and as soon as you run out, the slime pirates will catch you, steal your ship, and turn you into a slime dog.',
    img: 'img/space-pirates.png',  
    choice0a: 'You flee into a nearby asteroid field where you hope you can outmaneuver or hide from the slime pirates.',
    choice0b: 'Remembering your promise to always come home to Princess Megan Organa, and knowing there is very little hope of escaping with the fuel you have left, you make a difficult decision: you hail the pirate ship and tell them about a nearby cruise ship full of rich creatures they could raid instead.',
    choice0aResult: 'The slime pirated followed you into the asteroid field. During the chase, the slime pirates\' ship sustained damage in an in an asteroid collision and turned back. As you passed out of the asteroid field, you ran out of fuel and drifted through space until a passing cargo ship picked your ship up.',
    choice0bResult: 'The slime pirates thank you for telling them about the cruise ship, but they want to take your ship and turn you into a slime dog anyway. Lucky for you, the cruise ship changes course and the pirates only have time to raid one of you. They chase the cruise ship, leaving you with enough fuel to continue your journey. You convince yourself that the cruise ship\'s security team will prevent the slime pirates from hurting any passengers.'
}, {
    title: 'Distress Signal from Furtuna9',
    text: 'While trying to pass unnoticed through the cat-space, where no dogs are allowed, you receive a distress signal from the cat planet Furtuna9. An asteroid big enough to destroy a major city is heading straight toward their planet, and you are the only ship close enough to take action to divert it.',
    img: 'img/asteroid.png',  
    choice1a: 'You risk your life, ship, and use up most of the snack fuel you need to continue your travels in an attempt to prevent a cat-aststrophe. You change your heading to intercept the asteroid and plan to use your ship to nudge it onto a different course',
    choice1b: 'You have no weapons, a ship barely big enough for a dog, and have limited snack fuel. Even if you could get to the asteroid in time, you could easily run out of fuel and never make it home to Planet Alchemy where you have friends and family waiting for you. With some reluctance, you continue on your journey as if you never heard the distress signal',
    choice1aResult: 'Your outrageous, brave plan to save Furtuna9 worked! A small nudge from your ship changed the course of the asteroid enough that it missed the cat planet. Unfortunately, you\'ve used up most of your snack fuel and are at risk of becoming stranded in space. You have to make a stop and take some risks to get more fuel.',
    choice1bResult: 'By the time the asteroid strikes Furtuna9, you are about to cross out of cat-space with plenty of snack fuel to continue your journey. You can\'t see the impact and the planet is just a dot in the distance. You put it out of your mind, but you\'ve changed.'
}, {
    title: 'Visit to the Ice Moon',
    text: 'You are so happy when you notice you\'re nearing the ice moon Algid, where your good friend Fluffy the Wampa lives. Although some think you two make an odd pair, you have a surprising amount in common. For instance, you are both very protective of your personal space. You decide to surprise her with a visit. You land and your friend comes out to greet you, but when you give her a big hug (with your eyes) you notice how thin she is. Fluffy reluctantly admits that she\'s been out of snacks for weeks, which means no food and no fuel to go get more food.',
    img: 'img/planet-algrid.jpg',  
    choice2a: 'Fluffy is one of your best friends, and it breaks your heart to see her so frail and weak. You leave her with all of the snacks you can spare to help her heal and get back on her big feet.',
    choice2b: 'Everyone needs a little help sometimes so you give Fluffy just enough snacks fuel a one way trip to the nearest space station. She can get a job and earn her own way there. Give a Wampa a snack, feed her for a day, but teach a Wampa to get snacks, she feeds herself without taking from her friends.',
    choice2aResult: 'You fly away from Algid after a long, pleasant visit during which you and Fluffy always stayed an appropriate distance apart. You are a little concerned about your own snack fuel levels, but you feel good about helping your friend and know she would have done the same for you.',
    choice2bResult: 'You fly away from Algid after a short, pleasant visit. You were clear about your boundaries, and that\'s important in a friendship, right? You hope Fluffy does the right thing, using those snacks to find work rather than binge eating them.'
}];

let storyEndings = [{
    img: 'img/good-planet-placeholder.jpg',
    status: 'you are home',
    text: 'You are a good dog! You stayed on the path of righteousness, you will be rewarded for your exceptional acts of compassion with an infinite amount of treats! Now reunited with Princess Megan Organa and Marty Solo, the tales of your heroism will be spoken about for generations to come. '
}, {
    img: 'img/bad-planet-placeholder.jpg',
    status: 'you are a bad bad doggo',
    text: 'Oh no! You’ve been a bad dog! Your selfish deeds have caught the eye of Darth Journey, and he’s now grooming you as his apprentice on the <<<whatever the bad planet’s name>>>. The ground is hard, the treats are scarce, and your new uniform is really itchy.'
}, {
    img: 'img/oops-dog.jpg',
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