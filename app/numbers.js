exports = (typeof window === 'undefined') ? global : window;
var _ = require('lodash');

exports.numbersAnswers = {
    valueAtBit: function (num, bit) {

    },

    base10: function (str) {
        return _.parseInt(str, 2);
    },

    convertToBinary: function (num) {
        return _.parseInt(num).toString(2);

    },

    multiply: function (a, b) {

    }
};
