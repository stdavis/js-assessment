if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var bits = num.toString(2);
        return parseInt(bits[Math.abs(bit - bits.length)], 10);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var bits = num.toString(2);
        if (bits.length === 7) {
            bits = '0' + bits;
        }
        return bits;
    },

    multiply: function(a, b) {
        var numDecimalPlaces = function (num) {
            var s = num.toString();
            var parts = s.split('.');

            return (parts.length > 1) ? parts[1].length : 0;
        };

        var aPlaces = numDecimalPlaces(a);
        var bPlaces = numDecimalPlaces(b);
        if (aPlaces || bPlaces) {
            var maxPlaces = (aPlaces > bPlaces) ? aPlaces : bPlaces;
            var multiplier = parseFloat('1e+' + maxPlaces, 10);
            return Math.round(a * b * multiplier)/multiplier;
        } else {
            return a * b;
        }
    }
  };
});

