const UserComponent = require('./UserComponent');

class UserIndivid extends UserComponent {
    constructor(user) {
        super();
        this.user = user;
    }

    getDetails() {
        return `${this.user.name} - ${this.user.membership} - Fee: $${this.user.fee}`;
    }
}

module.exports = UserIndivid;
