function palindrome(str) {
  let new_str = function(old_str){
    let x = "";
    for (let char of old_str.toUpperCase()){
      if (char == " "){continue;}
      else if(char.codePointAt(0) > 64 && char.codePointAt(0) < 91 || char == +char){
        x += char;
      }else{continue;}
    }
    return x;
  }
  str = new_str(str);
  let len = parseInt(str.length / 2);
  for(let i = 0; i < len; i++ ){
    if (str[i] == str[str.length - 1 - i]){continue;}else{return false;}
  }
  return true;
}
