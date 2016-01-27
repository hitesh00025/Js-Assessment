exports = (typeof window === 'undefined') ? global : window;
var Q = require("q");
var fs = require('fs');
exports.asyncAnswers = {
    async: function (value) {

        var deferred = Q.defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, 10);
        return deferred.promise;
    },

    manipulateRemoteData: function (url) {
        var deferred = Q.defer();

        var obj = JSON.parse((fs.readFileSync('.' + url, 'utf8')));
        var array = [], i = 0;

        for (var key in obj) {
            var people = obj[key];
            for (var name in people) {
                array[i] = people[name].name;
                i++;
            }


        }

        deferred.resolve(array.sort());
        return deferred.promise;

    }
};
