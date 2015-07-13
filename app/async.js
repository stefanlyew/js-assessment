if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var dfd = $.Deferred();
      setTimeout(function() {
        dfd.resolve(value);
      }, 10);
      return dfd.promise();
    },

    manipulateRemoteData : function(url) {
      var dfd = $.Deferred();

      $.ajax(url).then(function(res){
        var array = $.map(res.people, function(person) {
          return person.name;
        }).sort();
        dfd.resolve(array);
      });

      return dfd.promise();
    }
  };
});
