function forLoop(array){
  for (var x = 0; x < 25; x++){
    x === 1 ? array.push('I am 1 strage loop.'):
    array.push('I am ${x} strange loops.');
  }
  return array;
}

function whileLoop(n){
  while(n > 0){
    n === 0? console.log('done') : console.log(n);
    n--;
  }
}