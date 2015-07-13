if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var results = [];
      var dirs =    [];

      function tree(data) {
        dirs.push(data.dir);

        for(var i = 0; i < data.files.length; i++) {
          if(typeof(data.files[i]) === 'string') {
            if(!dirName || dirs.indexOf(dirName) > -1) {
              results.push(data.files[i]);
            }
          } else {
            tree(data.files[i]);
          }
        }

        dirs.pop();
        return results;
      }

      return tree(data, dirName);
    },

    permute: function(arr) {
    }
  };
});
