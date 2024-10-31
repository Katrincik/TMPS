const FeeDivision = require('../Factory/FeeDivision');
class GymRegistration {
    constructor() {
        if (GymRegistration.instance) {
            return GymRegistration.instance;
        }
        GymRegistration.instance = this;
    }

    static getInstance() {
        if (!GymRegistration.instance) {
            GymRegistration.instance = new GymRegistration();
        }
        return GymRegistration.instance;
    }

    register(user) {
        const feeStrategy = FeeDivision.createFee(user.membership);
        const fee = feeStrategy.calculateFee();

        if (fee === 100) {
            console.log(`${user.name} needs to pay a regular fee of $${fee}.`);
        } else if (fee === 50) {
            console.log(`${user.name} needs to pay a membership fee of $${fee}.`);
        } else if (fee === 75) {
            console.log(`${user.name} needs to pay a student fee of $${fee}.`);
        } else {
            console.log(`${user.name} is registered for free`);
        }
    }
}

module.exports = GymRegistration;

