interface MultiplyValues {
  value1: number;
  value2: number;
}

const parseArguments = (args: Array<string>): MultiplyValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

// const multiplicatoor = (a: number, b: number, printText: string) => {
//   console.log(printText,  a * b);
// }

// try {
//   const { value1, value2 } = parseArguments(process.argv);
//   multiplicatoor(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
// } catch (e) {
//   console.log('Error, something bad happened, message: ', e.message);
// }

  const calculateBmi = (cm: number, kg: number) => {

    var m = cm/100
    var bmi = kg/m/m;

    if((bmi >= 18.5) && ( bmi <= 24.9)){
      console.log( `Normal (healthy weight)`)
    }
    
    else
    console.log('Overweight')

  }
  
  try {
    const { value1, value2 } = parseArguments(process.argv);
    calculateBmi(value1, value2);
  } catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
  }