const { StudentFee, MembershipFee, FreeFee, RegularFee } = require('./FeeTypes.js');

class FeeDivision {
    static createFee(membershipType) {
        switch (membershipType.toLowerCase()) {
            case 'student': return new StudentFee();
            case 'member': return new MembershipFee();
            case 'guest': return new FreeFee();
            default: return new RegularFee();
        }
    }
}

module.exports = FeeDivision;
