'use strict';

const friends = [
  { first: 'Laurie', last: 'Issel-Tarver' },
  { first: 'Evelyn', last: 'Taylor' },
  { first: 'Carmen', last: 'Perezchica' },
  { first: 'Jim', last: 'Redbird' },
];

let friendFirstNames = [];
for (let i = 0; i < friends.length; i++) {
  friendFirstNames[i] = friends[i].first;
}

friendFirstNames = friends.map((friend) => {
  return friend.first;
});

console.log(friendFirstNames, 'AFTER MAP FUNCTION');  /* eslint-disable-line */
