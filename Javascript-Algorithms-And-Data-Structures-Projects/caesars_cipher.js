function rot13(str) {
  let x = ""
  for (let char of str){
    if(char.codePointAt(0) > 64 && char.codePointAt(0) < 91){
      let decode = char.codePointAt(0) - 13;
      if(decode < 65){
        decode += 26;
        x += String.fromCodePoint(decode);
      }else{x += String.fromCodePoint(decode);}
    }else{x += char;}
  }

  return x;
}
