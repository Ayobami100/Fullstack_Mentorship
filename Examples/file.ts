const multiplicatoor = (a: number, b: number, printText: string) => {
    console.log(printText,  a * b);
  }
  
  multiplicatoor(2, 4, 'Multiplied numbers 2 and 4, the result is:');


  type Operation = 'multiply' | 'add' | 'divide';

  const calculator = (a: number, b: number, op : Operation) => {
    if (op === 'multiply') {
      return a * b;
    } else if (op === 'add') {
      return a + b;
    } else if (op === 'divide') {
      if (b === 0) return 'can\'t divide by 0!';
      return a / b;
    }
  }
  // console.log(process.argv)