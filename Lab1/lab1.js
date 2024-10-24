// SRP - Keep user info
class User {
    constructor(name, age, membership) {
        this.name = name;
        this.age = age;
        this.membership = membership;
    }

    // Prototype pattern - Create a copy of a potential user
    clone() {
        return new User(this.name, this.age, this.membership);
    }
}

// OCP - Base class for fee division
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

// Singleton Pattern - Creating instance of GymRegistration
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

const prototypeUser = new User('Default', 25, 'regular');

// Clone the prototype and modify attributes for each new user
const user1 = prototypeUser.clone();
user1.name = 'Mihai';
user1.age = 21;
user1.membership = 'student';
gymRegistration.register(user1);

const user2 = prototypeUser.clone();
user2.name = 'Marina';
user2.age = 18;
user2.membership = 'regular';
gymRegistration.register(user2);

const user3 = prototypeUser.clone();
user3.name = 'Sanda';
user3.age = 32;
user3.membership = 'member';
gymRegistration.register(user3);

const user4 = prototypeUser.clone();
user4.name = 'Ana';
user4.age = 47;
user4.membership = 'guest';
gymRegistration.register(user4);

// Confirm singleton behavior
const gymRegistration2 = GymRegistration.getInstance();
console.log(gymRegistration === gymRegistration2);