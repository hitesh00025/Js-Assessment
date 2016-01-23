exports = (typeof window === 'undefined') ? global : window;
var Q = require("q");
exports.asyncAnswers = {
    async: function (value) {

        var deferred = Q.defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, 10);
        return deferred.promise;
    },

    manipulateRemoteData: function (url) {

    }
};
