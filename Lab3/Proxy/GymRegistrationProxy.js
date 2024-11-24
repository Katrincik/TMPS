const GymRegistration = require('../Singleton/GymRegistration');

class GymRegistrationProxy {
    constructor(isAdmin) {
        this.isAdmin = isAdmin;
        this.gymRegistration = GymRegistration.getInstance();
    }

    register(user, trainerName = null, timeSlot = null) {
        if (this.isAdmin) {
            console.log(`Admin is registering user: ${user.name}`);
            this.gymRegistration.register(user, trainerName, timeSlot);
        } else {
            console.log("Access denied: Only admins can register new users.");
        }
    }

    displayAllUsers() {
        if (this.isAdmin) {
            console.log("Admin is viewing all user groups:");
            this.gymRegistration.displayAllUsers();
        } else {
            console.log("Access denied: Only admins can view all users.");
        }
    }
}

module.exports = GymRegistrationProxy;
