let score = "33";
let temperedScore = "33abc";

console.log("\nscore type before: ", typeof(score));
let scoreNumber = Number(score);
console.log("nscore type after conversion", typeof(scoreNumber));

console.log("\nTemperedScore: ", typeof(temperedScore));
let numberTemperedScore = Number(temperedScore);
console.log("TemperedScore after conversion to Number: ", numberTemperedScore);


let stringScore = String(scoreNumber);
console.log("\nstringScore after type conversion: ", typeof(stringScore));
