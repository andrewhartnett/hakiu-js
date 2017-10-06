function syllables(word) {
  word = word.toLowerCase();
  if(word.length <= 3) { return 1; }
  word = word.replace('lle', '');
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  return word.match(/[aeiouy]{1,2}/g).length;
}

function checkLine(sentence){
  var count = 0;
  var words = sentence.split(" ");
  
  words.map(function(val, key){
    count += syllables(val)
  });
  
  return count;
  
}

function arrayCompare(a1, a2){
  return a1.length==a2.length && a1.every(function(v,i) { return v === a2[i]})
}

function haiku(a, b, c){
  result = [];
  expected = [5, 7, 5];
  
  result.push(checkLine(a));
  result.push(checkLine(b));
  result.push(checkLine(c));
  
  if(arrayCompare(result, expected)){
    return true;
  }
  
  return result;
  
}
