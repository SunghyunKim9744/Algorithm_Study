const convertBase = (n, k) => {
  let result = "";

  while (n > 0) {
    result = parseInt(n % k, 10) + result;
    n = parseInt(n / k, 10);
  }

  return result;
};

const chkPrime = (num) => {
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function solution(n, k) {
  var answer = 0;

  const isPrime = {
    0: false,
    1: false,
  };

  convertBase(n, k)
    .split(/0+/)
    .map((num) => {
      if (num && !(num in isPrime)) {
        isPrime[num] = chkPrime(parseInt(num));
      }
      if (isPrime[num]) answer++;
    });

  return answer;
}
