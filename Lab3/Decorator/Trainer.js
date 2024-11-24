class Trainer {
    constructor(name) {
        this.name = name;
        this.schedule = {};
    }

    assignUser(user, timeSlot = null) {
        if (timeSlot) {
            if (!this.schedule[timeSlot]) {
                this.schedule[timeSlot] = user;
                console.log(`${user.name} has been assigned to Trainer ${this.name} at ${timeSlot}.`);
            } else {
                console.log(`Time slot ${timeSlot} is already booked for Trainer ${this.name}.`);
            }
        } else {
            console.log(`${user.name} has been assigned to Trainer ${this.name} but is waiting for a time slot.`);
        }
    }

    trainUser(timeSlot) {
        const user = this.schedule[timeSlot];
        if (user) {
            console.log(`Trainer ${this.name} is training ${user.name} at ${timeSlot}.`);
        } else {
            console.log(`Trainer ${this.name} has no session scheduled at ${timeSlot}.`);
        }
    }

    displaySchedule() {
        console.log(`Schedule for Trainer ${this.name}:`);
        if (Object.keys(this.schedule).length === 0) {
            console.log('(no sessions)');
        } else {
            Object.entries(this.schedule).forEach(([timeSlot, user]) => {
                console.log(`${timeSlot}: ${user.name}`);
            });
        }
    }
}

module.exports = Trainer;
