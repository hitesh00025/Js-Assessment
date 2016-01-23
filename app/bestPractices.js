exports = (typeof window === 'undefined') ? global : window;
var _ = require('lodash');

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
    globals: function () {
        var myObject = {
            name: 'Jory'
        };

        return myObject;
    },

    functions: function (flag) {

        var getValue;

        if (flag) {
            getValue = function getValue() {
                return 'a';
            }
        } else {
            getValue = function getValue() {
                return 'b';
            }
        }

        return getValue();
    },

    parseInt: function (num) {

        return _.parseInt(num, 10);
    },

    identity: function (val1, val2) {

        return _.isEqual(val1, val2);

    }
};
