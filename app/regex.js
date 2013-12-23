if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return new RegExp(/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
        return new RegExp(/(\D)\1/).test(str);
    },

    endsWithVowel : function(str) {
        return new RegExp(/[aeiouAEIOU]$/).test(str);
    },

    captureThreeNumbers : function(str) {
        var match = new RegExp(/\d{3}/).exec(str);
        if (match) {
            return match[0];
        } else {
            return false;
        }
    },

    matchesPattern : function(str) {
        return new RegExp(/^\d{3}\-\d{3}\-\d{4}$/).test(str);
    },

    isUSD : function(str) {
        return new RegExp(/^\$\d{1,3}(\,\d{3})*(\.\d{2})?$/).test(str);
    }
  };
});
