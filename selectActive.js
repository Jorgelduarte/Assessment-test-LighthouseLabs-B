/* Question 02

Implement a function "selectActive", which, when given a list of objects, returns a subset of the list by filtering out all inactive items.

For example:

  const list = [
                 { id: 1, active: true },
                 { id: 2, active: false },
                 { id: 3, active: true  },
                 { id: 4, active: false }
               ];

  selectActive(list);

Returns:

  [
    { id: 1, active: true },
    { id: 3, active: true }
  ]

*/

function selectActive(list) {
  var newArray = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i].active === true) {
      newArray.push(list[i]);
    }
  }
  return newArray;
}