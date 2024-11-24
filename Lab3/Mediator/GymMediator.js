class GymMediator {
    constructor() {
        this.trainers = {};
        this.gymRegistration = null;
    }

    registerGym(gymRegistration) {
        this.gymRegistration = gymRegistration;
    }

    registerTrainer(name, trainer) {
        this.trainers[name] = trainer;
    }

    assignTrainer(user, trainerName, timeSlot = null) {
        if (!trainerName) {
            console.log(`${user.name} has chosen to work out without a personal trainer.`);
            return;
        }

        const trainer = this.trainers[trainerName];
        if (trainer) {
            trainer.assignUser(user, timeSlot);
        } else {
            console.log(`Trainer ${trainerName} is not available.`);
        }
    }

    calculateFee(user) {
        return this.gymRegistration.calculateUserFee(user);
    }
}

module.exports = GymMediator;
