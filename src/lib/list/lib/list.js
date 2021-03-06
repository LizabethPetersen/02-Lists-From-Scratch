'use strict';

const List = module.exports = class {
  constructor() {
    this.length = 0;
    this.args = [];
  }
 
  push(...args) { 
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i]; /* eslint-disable-line */
      this.length += 1;
    }
    return this.length;
  }

  forEach(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    if (!this.length) {
      return ('Undefined');
    }
    for (let i = 0; i < this.length; i++) {
      this[this.length] = args[i]; /* eslint-disable-line */
      this.length += 1;
    }
    return this.length;
  }

  map(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    if (!this.length) {
      throw new Error('List is empty');
    }
    const result = new List();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i));
    }
    return result;
  }

  filter(callback, result) {
    if (!callback) {
      throw new Error('List is empty');
    }
    if (!this.length) {
      throw new Error('Undefined');
    }
    const newArray = [];
    for (let j = 0; j < this.length; j++) {
      result.push(newArray);
    }
    return result;
  }

  reduce(callback, accumulator) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    if (!this.length) {
      return undefined;
    }
    if (!accumulator) {
      accumulator = this[0]; // eslint-disable-line
    }
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i); // eslint-disable-line
    }
    return accumulator;
  }
};

