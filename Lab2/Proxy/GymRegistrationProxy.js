const GymRegistration = require('../Singleton/GymRegistration');

class GymRegistrationProxy {
    constructor(isAdmin) {
        this.isAdmin = isAdmin;
        this.gymRegistration = GymRegistration.getInstance();
    }

    register(user, trainerName = null) {
        if (this.isAdmin) {
            this.gymRegistration.register(user, trainerName);
            console.log(`Admin is registering user: ${user.name}`);
        } else {
            console.log("Access denied: Only admins can register new users.");
        }
    }

    displayAllUsers() {
        if (this.isAdmin) {
            this.gymRegistration.displayAllUsers();
            console.log("Admin is viewing all user groups:");
        } else {
            console.log("Access denied: Only admins can view all users.");
        }
    }
}

module.exports = GymRegistrationProxy;
