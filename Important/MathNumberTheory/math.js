/**
 * Math and number theory helpers.
 */

function gcd(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return Math.abs(a);
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function sieve(n) {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let p = 2; p * p <= n; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= n; i += p) isPrime[i] = false;
    }
  }
  return isPrime.reduce((primes, flag, num) => {
    if (flag) primes.push(num);
    return primes;
  }, []);
}

// Fast exponentiation with modulus.
function modPow(base, exp, mod) {
  let result = 1 % mod;
  let b = base % mod;
  let e = exp;
  while (e > 0) {
    if (e & 1) result = (result * b) % mod;
    b = (b * b) % mod;
    e >>= 1;
  }
  return result;
}

// Extended Euclid for multiplicative inverse (a and m must be coprime).
function modInverse(a, m) {
  const egcd = (aa, bb) => {
    if (bb === 0) return { g: aa, x: 1, y: 0 };
    const { g, x, y } = egcd(bb, aa % bb);
    return { g, x: y, y: x - Math.floor(aa / bb) * y };
  };
  const { g, x } = egcd(a, m);
  if (g !== 1) return null;
  return ((x % m) + m) % m;
}

function factorial(n, mod) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = mod ? (res * i) % mod : res * i;
  }
  return res;
}

function nCr(n, r, mod) {
  if (r < 0 || r > n) return 0;
  if (!mod) {
    let num = 1;
    let den = 1;
    for (let i = 1; i <= r; i++) {
      num *= n - r + i;
      den *= i;
    }
    return num / den;
  }
  const fact = [1];
  for (let i = 1; i <= n; i++) fact[i] = (fact[i - 1] * i) % mod;
  const inv = (x) => modInverse(x, mod);
  return (((fact[n] * inv(fact[r])) % mod) * inv(fact[n - r])) % mod;
}

module.exports = {
  gcd,
  lcm,
  sieve,
  modPow,
  modInverse,
  factorial,
  nCr,
};

/*
Examples:
gcd(24, 36); // 12
lcm(4, 6); // 12
sieve(10); // [2,3,5,7]
modPow(2, 10, 1000); // 24
nCr(5, 2); // 10
*/
