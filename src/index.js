module.exports =
  function check(str, bracketsConfig) {
    let solution = [],
      openBrackets = [],
      closedBrackets = [];
    for (let [open, closed] of bracketsConfig) {

      openBrackets.push(open);
      closedBrackets.push(closed);
    };
    for (i = 0; i < str.length; i++) {
      if ((openBrackets.indexOf(str[i]) >= 0) && (closedBrackets.indexOf(str[i]) != solution[solution.length - 1])) {
        solution.push(str[i])
      } else {
        if (closedBrackets.indexOf(str[i]) != openBrackets.indexOf(solution.pop())) {
          return false;
        }
      }
    }
    if (solution.length > 0) {
      return false;
    }
    return true;
  }