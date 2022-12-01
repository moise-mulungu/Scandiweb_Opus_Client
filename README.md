## Query request

query GetProductsForAllCategories {
  category {
    name
    products {
      id
      name
      category
      attributes {
        id
        name 
        type
        items {
          id
          displayValue
          value
        }
      }
    }
  }
}


## Homework(JavaScript array methods)

1. every:
  ex: const boolValue = [1, 30, 10].every((val) => val < 40) // true 
  about: all elements that match a condition (what would you search google to find this array method)

2. filter
  ex: const colors = ["red", "green", "white", "yellow", "purple"].filter((color) => color.length >= 6) // ["yellow", "purple"] 
  about: a shallow copy of all elements that length is greater or equal to 6

3. fill
  ex: const array1 = [1, 3, 5, 7, 9].fill(5, 1) // [1, 5, 5, 5]
  about: changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array

4. find
  ex: const findFirstNum = [2, 4, 67, 34, 56].find((num) => num > 10) // 67
  about: returns the first element in the provided array that satisfies the provided testing function (the first element greater than 10)

5. flat
  ex: const arr1 = ["one", "two", "three",["four", "five"]].flat(); // ["one", "two", "three", "four", "five"]
  about: creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

6. forEach
  ex: const array1 = ['a', 'b', 'c'].forEach(element => console.log(element)); // 'a' 'b' 'c' 'd'
  about: method executes a provided function once for each array element

7. from
  ex: console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]
  about: creates a new, shallow-copied Array instance from an iterable or array-like object

8. includes
  ex: const booleanArray = [1, 2, 3].includes(2); // true
  about: determines whether an array includes a certain value among its entries, returning true or false as appropriate.

9. join
  ex: const elements = ['Fire', 'Air', 'Water'].join(); // 'Fire, Air, Water'
  about: creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

10. keys
  ex: const array1 = ['a', 'b', 'c'];
      const iterator = array1.keys();

      for (const key of iterator) {
        console.log(key);
      }
      // 0, 1, 2
  about: returns a new Array Iterator object that contains the keys for each index in the array.

11. map
  ex: const array1 = [1, 4, 9, 16].map(num => num * 2); // [2, 8, 18, 32]
  about: creates a new array populated with the results of calling a provided function on every element in the calling array.

12. pop
  ex: const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'].pop(); // "tomato"
  about: removes the last element from an array and returns that element. This method changes the length of the array.

13. push
  ex: const animals = ['pigs', 'goats', 'sheep'].push('cows'); //  ['pigs', 'goats', 'sheep', 'cows']
  about: adds one or more elements to the end of an array and returns the new length of the array.

14. shift
  ex : const array1 = [1, 2, 3].shift(); // [2, 3]
  about:  removes the first element from an array and returns that removed element. This method changes the length of the array.

15. unshift
  ex: const array1 = [1, 2, 3].unshift(4, 5); // [1, 2, 3, 4, 5]
  about: adds one or more elements to the beginning of an array and returns the new length of the array.

16. reduce
  ex: 
  about: change a array to an object ['red', 'male'] convert to { color: red, gender: 'male' }

17. slice
  ex: const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'].slice(2); //  Array ["camel", "duck", "elephant"]
  about:  returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified

18. some
  ex: const array = [1, 2, 3, 4, 5];
      const even = (element) => element % 2 === 0;
      console.log(array.some(even)); // true
  about: tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

19. sort
  ex: const months = ['March', 'Jan', 'Feb', 'Dec'].sort(); // Array ["Dec", "Feb", "Jan", "March"]
  about: sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

20. values
  ex: const array1 = ['a', 'b', 'c'];
      const iterator = array1.values();

      for (const value of iterator) {
        console.log(value);
      }
  about: returns a new array iterator object that iterates the value of each index in the array.
