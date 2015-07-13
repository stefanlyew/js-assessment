if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      if ( (num % 3 === 0) && (num % 5 === 0) ) {
        return 'fizzbuzz';
      } else if (num % 3 === 0) {
        return 'fizz';
      } else if (num % 5 === 0) {
        return 'buzz';
      } else {
        return this._checkNumber(num);
      }
    },
    _checkNumber: function(num){
      if (typeof num === 'number') {
        return num;
      } else {
        return false;
      }
    }
  };
});
