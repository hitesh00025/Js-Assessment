exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

    var len = str.length,
      char,
      charCount = {},
      newStr = [];

    for (var i = 0; i < len; i++) {
      char = str[i];

      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    for (var key in charCount) {
      if (charCount.hasOwnProperty(key)) {
        var inc = 0;
        // if char count =1 add it new array
        if (charCount[key] === 1) {
          newStr.push(key);
        } else {
          while (inc < amount && charCount[key] > amount) {
            newStr.push(key);
            inc++;
          }
        }
      }
    }
    return (newStr.join(''));
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    var output = '';
    for (var i = str.length - 1; i >= 0; i--)
      output += str[i];
    return output;
  }
};
