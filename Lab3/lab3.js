const User = require('./Prototype/User');
const GymRegistration = require('./Singleton/GymRegistration');
const GymRegistrationProxy = require('./Proxy/GymRegistrationProxy');
const GymMediator = require('./Mediator/GymMediator');
const Trainer = require('./Decorator/Trainer');

// Initialize Mediator
const mediator = new GymMediator();

const isAdmin = true;
const gymRegistration = GymRegistration.getInstance(mediator);
const gymRegistrationProxy = new GymRegistrationProxy(isAdmin);

// Register Trainers with Mediator
mediator.registerTrainer('Alexandru', new Trainer('Alexandru'));
mediator.registerTrainer('Rodica', new Trainer('Rodica'));
mediator.registerTrainer('Dumitru', new Trainer('Dumitru'));

const prototypeUser = new User('Default', 25, 'regular');

// Clone the prototype and modify attributes for each new user
const user1 = prototypeUser.clone();
user1.name = 'Mihai';
user1.age = 21;
user1.membership = 'student';
gymRegistrationProxy.register(user1, 'Alexandru', '10:00 AM');

const user2 = prototypeUser.clone();
user2.name = 'Marina';
user2.age = 18;
user2.membership = 'regular';
gymRegistrationProxy.register(user2, null);

const user3 = prototypeUser.clone();
user3.name = 'Sanda';
user3.age = 32;
user3.membership = 'member';
gymRegistrationProxy.register(user3, 'Rodica', '11:30 AM');

const user4 = prototypeUser.clone();
user4.name = 'Ana';
user4.age = 47;
user4.membership = 'guest';
gymRegistrationProxy.register(user4, 'Dumitru');

const user5 = prototypeUser.clone();
user5.name = 'Arina';
user5.age = 21;
user5.membership = 'student';
gymRegistrationProxy.register(user5, null);

Object.values(mediator.trainers).forEach(trainer => trainer.displaySchedule());

// Simulate training sessions
mediator.trainers['Alexandru'].trainUser('10:00 AM');
mediator.trainers['Rodica'].trainUser('11:30 AM');
mediator.trainers['Dumitru'].trainUser('12:00 PM'); // No session at this time

// Confirm singleton behavior
const gymRegistration2 = GymRegistration.getInstance();
console.log(gymRegistration === gymRegistration2);

gymRegistrationProxy.displayAllUsers();
