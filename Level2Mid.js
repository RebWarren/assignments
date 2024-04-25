
// Challenge 1: Sorting an Array
const numbers = [4, 2, 7, 1, 9, 5];
numbers.sort(function(num1, num2){
    return num1 - num2
    // defines a .sort method to reorder the 'numbers' array from least to highest, a permanent change to the array.
})  
console.log(numbers);  // Output: [1, 2, 4, 5, 7, 9]


//Challenge 2: Mapping an Array
const string = ['superfly', 'jiveturkey', 'dy-no-mite']
const upCase = string.map(function(jj){   
    return jj[0].toUpperCase() + jj.slice(1).toUpperCase()
        // defines a .map method to create a new array using a function called 'jj' that returns the 'string' array with first letter uppercase and all other letters uppercase.
})
console.log(upCase)
