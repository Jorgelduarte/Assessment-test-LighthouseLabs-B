/* Question 04

Implement a function "intersection", which, when given two arrays of values, returns an array of the values that exist in both of the input arrays.

Note:
  - the returned array does NOT need to be sorted
  - the input arrays will NOT have any duplicate values

For example:

  intersection([1, 4, 3, 2], [3, 4, 5]);

Returns:

  [3, 4]

*/

function intersection(listA, listB) {

  var result = [];
  for (var i = 0; i < listA.length; i++) {
    for (var y = 0; y < listB.length; y++) {
      if (listA[i] === listB[y]){
        result.push(listA[i]);
      }
    }
  }
  return result;
}