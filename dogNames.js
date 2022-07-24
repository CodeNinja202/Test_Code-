
let prompt = require('readline-sync');

let breed = prompt.question('what breed is your dog? ');

let dogs = {
    pomeranian: 'Peppy',
    shitSue: "Olly",
    pug: "Notorious P.U.G."
};

console.log('Your dog\'s name is ' + dogs[breed] + '? How fascinating');
