if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    continueOn: true,
    count : function (start, end) {
      var that = this;
      var tick = function () {
        console.log(start);

        if (start < end && that.continueOn) {
          start++;
          setTimeout(tick, 100);
        }
      };

      tick();

      return this;
    },
    cancel: function () {
      this.continueOn = false;
    }
  };
});