module.exports = function check(str, bracketsConfig) {
  const objConf = Object.fromEntries(bracketsConfig);
  const openBrackets=Object.keys(objConf);
  let stack = [];
  for (let i=0;i< str.length;i++) {
      if (openBrackets.includes(str[i])) {
        if (str[i]===stack[stack.length-1] && objConf[str[i]]===str[i]) {
          stack.pop();
        } else {
          stack.push(str[i]);
        }
      }
      else if (stack.length ===0) {
          return false;
      } 
      else if (objConf[stack[stack.length-1]]===str[i]) {
          stack.pop();
      } 
      else {return false;}
  }
if (stack.length ===0) {return true;} 
      else {return false;}
     };
