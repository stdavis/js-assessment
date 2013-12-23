if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (item === arr[i]) {
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        while (this.indexOf(arr, item) > -1) {
            arr.splice(this.indexOf(arr, item), 1);
        }

        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        return this.remove(arr, item);
    },

    append : function(arr, item) {
        arr.push(item);

        return arr;
    },

    truncate : function(arr) {
        arr.pop();

        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0, 0, item);

        return arr;
    },

    curtail : function(arr) {
        arr.shift();

        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);

        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === item) {
                count ++;
            }
        }

        return count;
    },

    duplicates : function(arr) {
        var dups = [];
        var previous, current;
        var sorted = arr.sort();
        for (var i = arr.length - 1; i >= 0; i--) {
            current = sorted[i];
            if (previous && 
                previous === current &&
                this.indexOf(dups, current) === -1) {
                dups.push(current);
            }
            previous = current;
        }

        return dups;
    },

    square : function(arr) {
        var squared = [];
        for (var i = 0; i < arr.length; i++) {
            squared.push(arr[i] * arr[i]);
        }
        return squared;
    },

    findAllOccurrences : function(arr, target) {
        var occurences = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                occurences.push(i);
            }
        }
        return occurences;
    }
  };
});
