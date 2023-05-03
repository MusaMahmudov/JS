function Celsium(F) {
  let C = ((F - 32) * 5) / 9;
  return C;
}
console.log(Celsium(100));

function Odd(number) {
  if (number <= 0) {
    console.log("Error");
  }
  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
Odd(89);

function mean(array) {
  let average = 0;
  let lenght = 0;
  for (let i of array) {
    {
      average += i;
      lenght++;
    }
  }
  average /= lenght;
  return average;
}
console.log(mean([1, 4, 6, 7, 8, 10]));
