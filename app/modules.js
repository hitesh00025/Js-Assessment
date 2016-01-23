exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
    createModule: function (str1, str2) {

        function sayIt(str1, str2) {
            return str1 + ', ' + str2
        }

        function name(str2) {
            return str2;
        }

        function greeting(str1) {
            return str1;
        }

        return {
            sayIt: function () {
                return sayIt(this.greeting, this.name)
            },
            greeting: greeting(str1),
            name: name(str2)
        }
    }
};
