const FeeDivision = require('../Factory/FeeDivision');
const Trainer = require('../Decorator/Trainer');
const UserIndivid = require('../Composite/UserIndivid');
const UserGroup = require('../Composite/UserGroup');

class GymRegistration {
    constructor() {
        if (GymRegistration.instance) {
            return GymRegistration.instance;
        }

        GymRegistration.instance = this;
        this.userGroups = {
            regular: new UserGroup('Regular Fee Group'),
            student: new UserGroup('Student Fee Group'),
            membership: new UserGroup('Membership Fee Group'),
            guest: new UserGroup('Guest Fee Group'),
        };
    }

    static getInstance() {
        if (!GymRegistration.instance) {
            GymRegistration.instance = new GymRegistration();
        }
        return GymRegistration.instance;
    }

    register(user, trainerName = null) {
        const decoratedUser = new Trainer(user, trainerName);

        const feeStrategy = FeeDivision.createFee(user.membership);
        const fee = feeStrategy.calculateFee();

        decoratedUser.displayTrainerChoice();

        user.fee = fee;

        const userIndivid = new UserIndivid(user);

        if (fee === 100) {
            console.log(`${user.name} needs to pay a regular fee of $${fee}.`);
            this.userGroups.regular.add(userIndivid);
        } else if (fee === 50) {
            console.log(`${user.name} needs to pay a membership fee of $${fee}.`);
            this.userGroups.membership.add(userIndivid);
        } else if (fee === 75) {
            console.log(`${user.name} needs to pay a student fee of $${fee}.`);
            this.userGroups.student.add(userIndivid);
        } else {
            console.log(`${user.name} is registered for free`);
            this.userGroups.guest.add(userIndivid);
        }
    }

    displayAllUsers() {
        Object.values(this.userGroups).forEach(group => {
            group.getDetails();
        });
    }
}

module.exports = GymRegistration;

