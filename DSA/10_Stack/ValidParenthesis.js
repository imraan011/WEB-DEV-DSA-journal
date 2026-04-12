var isValid = function (s) {
  let arr = new Array();
  for (let i of s) {
    if (i == "(" || i == "{" || i == "[") {
      arr.push(i);
    } else {
      if (arr.length == 0) return false;
      else {
        let top = arr.pop();
        if (top == "(" && i != ")") return false;
        if (top == "{" && i != "}") return false;
        if (top == "[" && i != "]") return false;
      }
    }
  }

  return arr.length == 0;
};

let s = "()[]{}"
console.log(isValid(s))