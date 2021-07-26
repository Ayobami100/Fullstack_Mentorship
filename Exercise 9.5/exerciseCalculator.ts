// interface exerciseInputType {
//     value: number
//     array: number[]
//   }
  
//   const exerciseParseArguments = (args: Array<string>): exerciseInputType => {
//     if (args.length < 4) throw new Error('Not enough arguments');
  
//     if (args.slice(2).every(e => !isNaN(Number(e)))) {
//       const value = Number(args[2]);
//       const array = args.slice(3).map(a => Number(a));
//       return { value, array };
//     } else {
//       throw new Error('Provided values were not numbers!');
//     }
//   };
  
  
//   interface ExerciseArray {
//     periodLength: number
//     trainingDays: number
//     success: boolean
//     rating: number
//     ratingDescription: string
//     target: number
//     average: number
//   }
  
//   const ratingDescriptionList = [
//     'just the worst',
//     'not too bad but could be better',
//     'perfect'
//   ];
  
//   const calculateExercise = (exerciseTimes: Array<number>, target: number): ExerciseArray => {
//     const periodLength = exerciseTimes.length;
//     const trainingDays = exerciseTimes.filter(e => e > 0).length;
//     const success = exerciseTimes.every(e => e >= target);
//     const successDays = exerciseTimes.filter(e => e >= target).length;
//     const average = exerciseTimes.reduce((a, b) => a + b) / periodLength;
  
//     let rating;
//     if (successDays === periodLength)
//       rating = 3;
//     else if (successDays >= periodLength / 2)
//       rating = 2;
//     else
//       rating = 1;
  
//     const ratingDescription = ratingDescriptionList[rating - 1];
  
//     return {
//       periodLength,
//       trainingDays,
//       success,   
//       rating,
//       ratingDescription,
//       target,
//       average
//     };
//   };
  
  
//   if (require.main === module) {
//     try {
//       // const { value = 1, array = [3,0,2,4.5,0,3] } = exerciseParseArguments(process.argv);
//       console.log(calculateExercise([3, 0, 2, 4.5, 0, 3,1],2));
//     } catch (e) {
//       console.log(e.message);
//     }
//   }
  
//   export default calculateExercise;

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercise = (
  dailyHours: number[],
  target: number
): Result => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter((hour) => hour > 0).length;
  const totalHours = dailyHours.reduce((total, hours) => total + hours, 0);
  const average = totalHours / periodLength;
  const success = average >= target;
  const percentageRating = (average / target) * 100;

  let rating;
  let ratingDescription;

  if (percentageRating >= 100) {
    rating = 3;
    ratingDescription = "You've met your daily exercise target!";
  } else if (percentageRating >= 75 && percentageRating < 100) {
    rating = 2;
    ratingDescription = "You're almost there";
  } else {
    rating = 1;
    ratingDescription = "There is still much room for improvement";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average,
  };
};

interface ParsedExerciseArgs {
  target: number;
  dailyHours: number[];
}

const parseArguments = (args: Array<string>): ParsedExerciseArgs => {
  if (args.length < 4) throw new Error("Not enough arguments");

  const target = Number(args[2]);
  const dailyHours = args.slice(3).map((hours) => Number(hours));
  const hasNaNInDailyHours = dailyHours.some((hours) => isNaN(hours));

  if (isNaN(target) || hasNaNInDailyHours) {
    throw new Error("Please provide arguments as numbers");
  }

  const hasInvalidDailyHours = dailyHours.some((hours) => hours > 24);

  if (target > 24 || hasInvalidDailyHours) {
    throw new Error("Maximum hours per day is 24");
  }

  return { target, dailyHours };
};

const isCalledDirectly = require.main === module;

if (isCalledDirectly) {
  try {
    const { target, dailyHours } = parseArguments(process.argv);
    console.log(calculateExercise(dailyHours, target));
  } catch (e) {
    console.log("An error has occured:", e.message);
    console.log(
      "USAGE: npm run calculateExercises target(hrs) dailyHours(hrs)[]"
    );
    console.log("dailyHours is space separated hours exercised per day");
  }
}
