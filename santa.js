function makeSantaTree(rows) {
  const treePart = "*";
  const space = " ";
  
  function makeTreeInConsole(rows) {
    let counter = rows;
    for (let i = 2; i <= rows; i++) {
      console.log(howManySpaces(counter + rows / 2) + makeTreePart((i * i) / i - 1) + (makeTreePart((i * i) / i - 1) + howManySpaces(counter + rows / 2)));
      counter--;
      
    }
    console.log(howManySpaces(rows + rows / 2) + makeTreePart(2))

    console.log("Merry Christmas ho ho ho\n");
  }
  
  makeTreeInConsole(rows)
  
  function howManySpaces(num) {
    return space.repeat(num);
  }
  
  function makeTreePart(num) {
    return treePart.repeat(num);
  }
}

makeSantaTree(15);