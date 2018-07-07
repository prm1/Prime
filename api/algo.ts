let newPrimeNumbers: Array<number> = [];
let primesForCheck: Array<number> = [];
let nonPrimeNumbers: Array<object> = [];
export async function getPrimes(lastCheckedNum) {
  let lastCheckedNumber = lastCheckedNum;
  while (nonPrimeNumbers.length < 1000000) {
    checkIfPrime(lastCheckedNumber);
    Math.max(...newPrimeNumbers) + 2;
  }
  // Save nonPrimes
  // Save newPrimes
  // get primesForCheck
  getPrimes(5);

}
async function checkIfPrime(numberToCheck: number) {
  let divideNumber = numberToCheck;
  for (
    let count = 0;
    divideNumber === numberToCheck && primesForCheck[count] <= Math.sqrt(numberToCheck);
    count++
  ) {
    if (numberToCheck % primesForCheck[count] === 0) {
      nonPrimeNumbers.push({
        nonPrimeNumber: numberToCheck,
        divideNumber: primesForCheck[count],
      });
      return;
    }
  }
  newPrimeNumbers.push(numberToCheck);
}
