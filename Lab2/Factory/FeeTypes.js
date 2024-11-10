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

module.exports = { FeeTypes, RegularFee, StudentFee, MembershipFee, FreeFee };
