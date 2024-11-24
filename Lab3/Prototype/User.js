class User {
    constructor(name, age, membership) {
        this.name = name;
        this.age = age;
        this.membership = membership;
    }

    clone() {
        return new User(this.name, this.age, this.membership);
    }
}

module.exports = User;
