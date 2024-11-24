const FeeDivision = require('../Factory/FeeDivision');
const UserIndivid = require('../Composite/UserIndivid');
const UserGroup = require('../Composite/UserGroup');

class GymRegistration {
    constructor(mediator) {
        if (!mediator) {
            throw new Error("A valid GymMediator instance is required.");
        }

        if (GymRegistration.instance) {
            return GymRegistration.instance;
        }

        this.mediator = mediator;
        this.mediator.registerGym(this);

        GymRegistration.instance = this;
        this.userGroups = {
            regular: new UserGroup('Regular Fee Group'),
            student: new UserGroup('Student Fee Group'),
            membership: new UserGroup('Membership Fee Group'),
            guest: new UserGroup('Guest Fee Group'),
        };
    }

    static getInstance(mediator = null) {
        if (!GymRegistration.instance && mediator) {
            GymRegistration.instance = new GymRegistration(mediator);
        }
        return GymRegistration.instance;
    }

    register(user, trainerName = null, timeSlot = null) {
        const fee = this.mediator.calculateFee(user);
        user.fee = fee;

        this.mediator.assignTrainer(user, trainerName, timeSlot);

        const userIndivid = new UserIndivid(user);
        this._assignToGroup(userIndivid, fee);

        console.log(`${user.name} has been registered.`);
    }

    _assignToGroup(user, fee) {
        if (fee === 100) {
            this.userGroups.regular.add(user);
        } else if (fee === 50) {
            this.userGroups.membership.add(user);
        } else if (fee === 75) {
            this.userGroups.student.add(user);
        } else {
            this.userGroups.guest.add(user);
        }
    }

    calculateUserFee(user) {
        const feeStrategy = FeeDivision.createFee(user.membership);
        const fee = feeStrategy.calculateFee();
        console.log(`${user.name} has a membership type of "${user.membership}" with a fee of $${fee}.`);
        return fee;
    }

    displayAllUsers() {
        Object.values(this.userGroups).forEach(group => {
            group.getDetails();
        });
    }
}

module.exports = GymRegistration;

