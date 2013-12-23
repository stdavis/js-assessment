if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        return {
            then: function (cb) {
                cb(value);
            }
        };
    },

    manipulateRemoteData : function(url) {
        var callback;

        $.getJSON(url, null, function (response) {
            var data = [];
            for (var i = 0; i < response.people.length; i++) {
                data.push(response.people[i].name);
            }
            callback(data.sort());
        });

        return {
            then: function (cb) {
                callback = cb;
            }
        };
    }
  };
});
