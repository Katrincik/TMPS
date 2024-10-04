// SRP - Keep user info
class User {
    constructor(name, age, membership) {
        this.name = name;
        this.age = age;
        this.membership = membership;
    }
}

// OCP - Base class for fee division
class RegularFee {
    calculateFee() {
        return 100;
    }
}

class MembershipFee extends RegularFee {
    calculateFee() {
        return 50;
    }
}

class FreeFee extends RegularFee {
    calculateFee() {
        return 0;
    }
}

class GymRegistration {
    register(user, feeStrategy = new RegularFee()) {
        const fee = feeStrategy.calculateFee();
        if (fee === 100) {
            console.log(`${user.name} needs to pay a regular fee of $${fee}.`);
        } else if (fee === 50) {
            console.log(`${user.name} needs to pay a membership fee of $${fee}.`);
        } else {
            console.log(`${user.name} is registered for free`);
        }
    }
}

const gymRegistration = new GymRegistration();

const user1 = new User('Mihai', 21, 'student');
gymRegistration.register(user1, new MembershipFee());

const user2 = new User('Marina', 18, 'regular');
gymRegistration.register(user2, new RegularFee());

const user3 = new User('Sanda', 32, 'friend');
gymRegistration.register(user3, new FreeFee());


