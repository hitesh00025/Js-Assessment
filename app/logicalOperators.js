exports = (typeof window === 'undefined') ? global : window;

exports.logicalOperatorsAnswers = {
    or: function (a, b) {

        if (typeof a === 'boolean' && typeof b === 'boolean') {
            return a || b;
        }
        return false;
    },

    and: function (a, b) {
        if (typeof a === 'boolean' && typeof b === 'boolean') {
            return a && b;
        }
        return true;
    }
};
