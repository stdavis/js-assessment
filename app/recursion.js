if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var files = [];
      var search = function (searchFiles, keep) {
        for (var i = 0; i < searchFiles.length; i++) {
          var item = searchFiles[i];
          if (typeof item === 'string') {
            if (keep) {
              files.push(item);
            }
          } else {
            var newKeep = true;
            if (!keep) {
              newKeep = item.dir === dirName;
            }
            search(item.files, newKeep);
          }
        }
      };
      search(data.files, (!dirName) ? true : false);
      return files;
    },

    permute: function(arr) {
      var num;
      var i, x;

      var addOptions = function (a) {
        var newArray = [];
        for (x = 0; x < arr.length; x++) {
          num = arr[x];
          if (a.indexOf(num) === -1) {
            newArray.push(a.concat(num));
          }
        }
        return newArray;
      };

      var perm = function (baseArray) {
        var stepArray = [];
        for (i = 0; i < baseArray.length; i++) {
          stepArray = stepArray.concat(addOptions(baseArray[i]));
        }
        if (stepArray[0].length < 4) {
          return perm(stepArray);
        } else {
          return stepArray;
        }
      };

      return perm(addOptions([]));
    }
  };
});
