if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(fn, arr);
    },

    speak : function(fn, obj) {
      var boundFn = fn.bind(obj);
      return boundFn();
    },

    functionFunction : function(str) {
      return function(str2){
        return str + ', ' + str2;
      };
    },

    makeClosures : function(arr, fn) {
      var i,
          results = [];
      var helper = function(val){
        return function() { return fn(val); };
      };

      for (i = 0; i < arr.length; i++) {
        var newFn = helper(arr[i]);
        results.push(newFn);
      }

      return results;
    },

    partial : function(fn, str1, str2) {
      return function(punctuation){
        return fn(str1, str2, punctuation);
      };
    },

    useArguments : function() {
      var args = Array.prototype.slice.call(arguments, 0);
      var add = function(a, b) { return a + b; };
      var total = args.reduce(add, 0);
      return total;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(fn, args);
    },

    partialUsingArguments : function(fn) {
      var slice = Array.prototype.slice;
      var some_args = slice.call(arguments, 1);

      return function(args){
        var more_args = slice.call(arguments, 0);
        var all_args = some_args.concat(more_args);

        return fn.apply(fn, all_args);
      };
    },

    curryIt : function(fn) {
      var args = [];

      var curry = function(arg){
        args.push(arg);
        if(args.length === 3){
          return fn.apply(this, args);
        } else {
          return curry;
        }
      };

      return curry;
    }
  };
});
