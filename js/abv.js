let abv = (value) => {
  var length = (Math.abs(parseInt(value, 10)) + '').length,
        index = Math.ceil((length - 3) / 3),
        suffix = ['K', 'M', 'B', 'T','qd','Qn','Sx','Sp','O','N','de','Ud','DD','tdD','qdD','QnD'];
    if (value < 1000 || length < 4) return value;
    
    return (value / Math.pow(1000, index)).toFixed(1).replace(/\.0$/, '') + suffix[index - 1];
}
