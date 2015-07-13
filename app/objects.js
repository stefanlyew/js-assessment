if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      var boundFn = fn.bind(obj);
      return boundFn();
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var key,
          results = [];

      for (key in obj) {
        if(obj.hasOwnProperty(key)) {
          var str = '';
          results.push(str + key + ': ' + obj[key]);
        }
      }

      return results;
    }
  };
});
