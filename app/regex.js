exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
    containsNumber: function (str) {
        return (/[0-9]/).test(str);
    },

    containsRepeatingLetter: function (str) {
        return (/([A-Za-z])\1/).test(str);
    },

    endsWithVowel: function (str) {
        return (/[aeiou]$/i).test(str);
    },

    captureThreeNumbers: function (str) {
        var r = /\d{3}/;
        var result = str.match(r);
        return result != null ? result[0] : false;
    },

    matchesPattern: function (str) {
        return (/^\d{3}-\d{3}-\d{4}$/).test(str);
    },

    isUSD: function (str) {
        return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);

    }
};
