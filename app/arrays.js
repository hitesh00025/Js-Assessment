exports = (typeof window === 'undefined') ? global : window;
var _ = require('lodash');
exports.arraysAnswers = {

    indexOf: function (arr, item) {
        return arr.indexOf(item);
    },

    sum: function (arr) {
        return _.sum(arr);

    },

    remove: function (arr, item) {
        return _.without(arr, item);
    },

    removeWithoutCopy: function (arr, item) {

    },

    append: function (arr, item) {
        return _.concat(arr, item);
    },

    truncate: function (arr) {
        return _.dropRight(arr);
    },

    prepend: function (arr, item) {
        return _.concat([item], arr);
    },

    curtail: function (arr) {
        return _.drop(arr, arr[0]);

    },

    concat: function (arr1, arr2) {
        return _.concat(arr1, arr2);
    },

    insert: function (arr, item, index) {

        arr = arr.splice(index, 0, '2');
        return arr;
    },

    count: function (arr, item) {

        var count = 0;
        for (var key in arr) {
            if (arr[key] === item) {
                count++;
            }
        }
        return count;
    },

    duplicates: function (arr) {


    },

    square: function (arr) {

    },

    findAllOccurrences: function (arr, target) {

    }
};
exports.arraysAnswers