define([
    'lodash'
], function (_) {
    var util = {
        add: function(a, b) {
            return a + b;
        },
        sum: function(arr) {
            return _.reduce(arr, function(sum, n) {
                return sum + n;
            }, 0);
        }
    };

    return util;
});

