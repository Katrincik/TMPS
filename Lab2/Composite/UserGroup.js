const UserComponent = require('./UserComponent');

class UserGroup extends UserComponent {
    constructor(feeType) {
        super();
        this.feeType = feeType;
        this.users = [];
    }

    add(userComponent) {
        this.users.push(userComponent);
    }

    remove(userComponent) {
        this.users = this.users.filter(user => user !== userComponent);
    }

    getDetails() {
        console.log(`\nUser Group: ${this.feeType}`);
        this.users.forEach(user => {
            console.log(user.getDetails());
        });
    }
}

module.exports = UserGroup;
