function convertToRoman(num) {
  let m = [ "", "M", "MM", "MMM" ]
  let c = [ "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  let x = [ "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" ];
  let i = [ "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  let thousands = m[parseInt(num / 1000)];
  let hundereds = c[parseInt((num % 1000) / 100)];
  let tens =  x[parseInt((num % 100) / 10)];
  let ones = i[num % 10];
  return (thousands + hundereds + tens + ones );
  
}
