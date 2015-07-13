if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timeout;

      function helper() {
        console.log(start);

        if(++start <= end) {
          timeout = setTimeout(helper, 100);
        }
      }

      helper();

      return {
        cancel: function() {
          return clearTimeout(timeout);
        }
      };
    }
  };
});
