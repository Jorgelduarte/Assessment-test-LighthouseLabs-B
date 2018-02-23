// Implement a function "sumRange", which, when given two integers FROM and TO,
// returns the sum of integers from FROM to TO.

// For example:

//   sumRange(3, 6);

// Returns:

//   18

// (= 3 + 4 + 5 + 6)


function sumRange(from, to) {
  var sum = 0;
  for (var i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}