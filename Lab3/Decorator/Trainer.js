const User = require('../Prototype/User');

class Trainer {
    constructor(user, trainerName = null) {
        this.user = user;
        this.trainer = trainerName;
    }

    // chooseTrainer() {
    //     const trainersNames = ['Alexandru', 'Vasile', 'Rodica', 'Dumitru'];
    //     return trainersNames[Math.floor(Math.random() * trainersNames.length)];
    // }

    displayTrainerChoice() {
        if (this.trainer) {
            console.log(`${this.user.name} has chosen ${this.trainer} as their personal trainer.`);
        } else {
            console.log(`${this.user.name} has chosen to not have a personal trainer.`);
        }
    }
}

module.exports = Trainer;