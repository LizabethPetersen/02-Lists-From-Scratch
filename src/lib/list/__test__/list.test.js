'use strict';

const List = require('../lib/list');

describe('Testing Methods on List class', () => {
  let myList;

  beforeEach(() => {
    myList = new List();
    myList.push(0, 1, 2, 3, 4, 5);
  });
  afterEach(() => {
    myList = null;
  });

  test('PUSH: should show that the push method adds items to an array', () => {
    expect(myList).toHaveLength(6);
    myList.push(6);
    expect(myList).toHaveLength(7);
    myList.push();
    expect(myList).toHaveLength(7);
    expect(myList[myList.length - 1]).toEqual(6);
    expect(myList.push(7, 8, 9)).toEqual(10);
    console.log(myList, 'In PUSH test');  /* eslint-disable-line */
  });

  test('MAP: throws error if undefined', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.map(e => e);
    }).toThrow();
  });

  test('MAP: should return a new list', () => {
    const newList = myList.map((num) => {
      return num * 2;
    });
    expect(newList).toHaveLength(myList.length);
    for (let i = 0; i < newList.length; i++) {
      expect(newList[i] / 2).toEqual(myList[i]);
    }
  });

  test('REDUCE: should reduce the elements in the list to one single produce with NO accumulator passed in', () => {
    const product = myList.reduce((accumulator, current) => {
      return accumulator * current;
    });
    expect(product).toEqual(0);
  });

  test('REDUCE: should reduce the elements in the list to one single value while adding 10 accumulatively', () => {
    const sum = myList.reduce((accumulator, current) => {
      return accumulator + current;
    }, 10);
    expect(sum).toEqual(25);
  });
});
