// SRP - Keep user info
class User {
    constructor(name, age, membership) {
        this.name = name;
        this.age = age;
        this.membership = membership;
    }
}

// OCP & Strategy Pattern - Interface for fee calculation
class FeeTypes {
    calculateFee() {
        throw new Error("This method must be implemented.");
    }
}
class RegularFee extends FeeTypes {
    calculateFee() {
        return 100;
    }
}

class StudentFee extends FeeTypes {
    calculateFee() {
        return 75;
    }
}

class MembershipFee extends FeeTypes {
    calculateFee() {
        return 50;
    }
}

class FreeFee extends FeeTypes {
    calculateFee() {
        return 0;
    }
}

// Factory Pattern - Create FeeDivision based on the user's membership type
class FeeDivision {
    static createFee (membershipType) {
        switch (membershipType.toLowerCase()) {
            case 'student': return new StudentFee();
            case 'member' : return new MembershipFee();
            case 'guest' : return new FreeFee();
            default:
                return new RegularFee();
        }
    }
}
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

const gymRegistration = GymRegistration.getInstance();

const user1 = new User('Mihai', 21, 'student');
gymRegistration.register(user1);

const user2 = new User('Marina', 18, 'regular');
gymRegistration.register(user2);

const user3 = new User('Sanda', 32, 'member');
gymRegistration.register(user3);

const user4 = new User('Ana', 47, 'guest');
gymRegistration.register(user4);

// Confirm singleton behavior
const gymRegistration2 = GymRegistration.getInstance();
console.log(gymRegistration === gymRegistration2);