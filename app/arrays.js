if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var i;

      for (i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
          return i;
        }
      }

      return -1;
    },

    sum : function(arr) {
      var i,
          total = 0;

      for (i = 0; i < arr.length; i++) {
        total += arr[i];
      }

      return total;
    },

    remove : function(arr, item) {
      var i,
          copy = [];

      for (i = 0; i < arr.length; i++) {
        if(arr[i] !== item) {
          copy.push(arr[i]);
        }
      }

      return copy;
    },

    removeWithoutCopy : function(arr, item) {
      var i,
          len = arr.length;

      for (i = 0; i < len; i++) {
        if(arr[i] === item) {
          arr.splice(i,1);
          i = i-1;
          len = len-1;
        }
      }

      return arr;
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
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      var i;

      for (i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
      }

      return arr1;
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var i,
          count = 0;

      for (i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
          count += 1;
        }
      }

      return count;
    },

    duplicates : function(arr) {
      var i,
          results = [];

      for (i=0; i < arr.length; i++) {
        if (this.count(arr, arr[i]) > 1) {
          results.push(arr[i]);
          this.removeWithoutCopy(arr, arr[i]);
        }
      }

      return results;
    },

    square : function(arr) {
      var i;

      for (i=0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
      }

      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var i,
          results = [];

      for (i=0; i < arr.length; i++) {
        if(arr[i] === target) {
          results.push(i);
        }
      }

      return results;
    }
  };
});
