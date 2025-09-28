//4. ARRAY METHODS
// Commonly used methods: map(), filter(), reduce()
// - map(): transforms each element
// - filter(): keeps elements that pass a condition
// - reduce(): accumulates values into one result
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map(n => n * 2));      // [2, 4, 6, 8, 10]
console.log(numbers.filter(n => n % 2));   // [1, 3, 5]
console.log(numbers.reduce((sum, n) => sum + n, 0)); // 15

