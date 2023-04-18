function closeCompare(a, b, margin) {
    if (!margin) {
      if (a < b) return -1;
      if (a > b) return 1;
      if (a === b) return 0;
    } else {
      if (margin >= Math.abs(a - b) || a === b) return 0;
      if (a < b) return -1;
      if (a > b) return 1;
    }
}

console.log(closeCompare(4, 5)); // -1
console.log(closeCompare(5, 5)); // 0
console.log(closeCompare(6, 5)); // 1
console.log(closeCompare(-6, -5)); // -1

console.log(closeCompare(2, 5, 3)); // 0
console.log(closeCompare(8.1, 5, 3)); // 1
console.log(closeCompare(1.99, 5, 3)); // -1