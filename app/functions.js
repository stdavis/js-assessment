if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function (s) {
            return str + ', ' + s;
        };
    },

    makeClosures : function(arr, fn) {
        var funcs = [];
        var makeFunction = function (n) {
            return function () {
                return fn(n);
            };
        };
        for (var i = 0; i < arr.length; i++) {
            funcs.push(makeFunction(arr[i]));
        }
        return funcs;
    },

    partial : function(fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        };
    },

    useArguments : function() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        fn.apply(this, this.getArgs(arguments));
    },

    getArgs: function (a) {
        var args = [];
        for (var i = 1; i < a.length; i++) {
            args.push(a[i]);
        }
        return args;
    },

    partialUsingArguments : function(fn) {
        var args = this.getArgs(arguments);
        var that = this;
        return function () {
            return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
        };
    },

    curryIt : function(fn) {
        return function (x) {
            return function (y) {
                return function (z) {
                    return fn(x, y, z);
                };
            };
        };
    }
  };
});
