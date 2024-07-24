/*
Find the smallest integer in the array
Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
*/

function findSmallestInt(arr) {
  return Math.min(...arr);
}

/*
  Geometry Basics: Circle Circumference in 2D
  This series of katas will introduce you to basics of doing geometry with computers.
  Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.
  Write a function calculating circumference of a Circle.
  Tests round answers to 6 decimal places.
  https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
  */

function circleCircumference(circle) {
  const pi = Math.PI;
  return (circumference = 2 * pi * circle.radius);
  //.toFixed(6)
}

/*
  Training JS #12: loop statement --for..in and for..of
  he function giveMeFive accepts 1 parameter, obj, which is an object.
  Create an array (which you will eventually return).
  Then, traverse obj, checking each key and value.
  If the length of the key is equal to 5, then push the key to your array.
  Separately, if the length of the value is equal to 5, then push the value to your array.
  At the end, return your array.
  You should use for..in in your code, otherwise your solution may not pass this kata.
  https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
  */

function giveMeFive(obj) {
  const arr = [];
  for (var key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
  }
  for (var key in obj) {
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
