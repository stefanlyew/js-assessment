if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      var binaryStr = this.convertToBinary(num);
      var strInt = binaryStr[this._bitPosToIndex(bit, 8)];
      return parseInt(strInt, 10);
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var binaryStr = (num).toString(2);
      return this._zeroFill(binaryStr, 8);
    },

    multiply: function(a, b) {
      var highestPrecision = Math.max(this._getPrecision(a), this._getPrecision(b));
      return parseFloat((a * b).toPrecision(highestPrecision), 10);
    },

    _zeroFill: function(binaryStr, length) {
      while(binaryStr.length < length) {
        binaryStr = '0' + binaryStr;
      }
      return binaryStr;
    },

    _bitPosToIndex: function(bit, bitSize){
      return Math.abs(bit-bitSize);
    },

    _getPrecision: function(number){
      var placesStr = (number).toString().split('.')[1] || '';
      var precision = parseInt(placesStr.length, 10);
      return precision;
    }

  };
});

