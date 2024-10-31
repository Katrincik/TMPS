const User = require('./Prototype/User');
const GymRegistration = require('./Singleton/GymRegistration');
const FeeDivision = require('./Factory/FeeDivision');

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