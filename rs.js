// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

  const filterOutOdds = (...nums) => {
    nums.filter((num) => num % 2 === 0)
  };


const findMin = (...args) => math.Min(...args)


const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}) 


const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(n => n *2)]



/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }

const removeRandom = items => {
    let index = Math.floor(Math.random() + items.length);
    return [...items.slice(0, index), ...items.slice(index +1)];
}

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

const extend = (arr1, arr2) => [...arr1, ...arr2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] === val;
    return newObj;
}


/** Return a new object with a key removed. */

// function removeKey(obj, key) {

// }

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] === val;
    return newObj;
}