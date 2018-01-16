function forLoop(array){
  for(var i = 0; i < 25; i++){
    i === 0 ? array = [...array, "I am 1 strange loop."]
    : array = [...array, "I am ${i} strange loops."];
  }
}