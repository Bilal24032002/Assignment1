// Define a string and an array
const myString = "Hello, World!";
const myArray = [1, 2, 3, 4, 5];

// String Methods
console.log("Original String:", myString);
console.log("1. Length of the string:", myString.length);
console.log("2. Uppercase:", myString.toUpperCase());
console.log("3. Lowercase:", myString.toLowerCase());
console.log("4. Substring (7 to 12):", myString.substring(7, 12));
console.log("5. Replace 'World' with 'Universe':", myString.replace("World", "Universe"));
console.log("6. Split string by comma:", myString.split(","));
console.log("7. Index of 'W':", myString.indexOf("W"));
console.log("8. Includes 'Hello':", myString.includes("Hello"));

// Array Methods
console.log("\nOriginal Array:", myArray);
console.log("1. Length of the array:", myArray.length);
console.log("2. Join array elements with '-'):", myArray.join("-"));
console.log("3. Push (add 6 to the end):", myArray.push(6), "New Array:", myArray);
console.log("4. Pop (remove last element):", myArray.pop(), "New Array:", myArray);
console.log("5. Shift (remove first element):", myArray.shift(), "New Array:", myArray);
console.log("6. Unshift (add 0 to the beginning):", myArray.unshift(0), "New Array:", myArray);
console.log("7. Slice (elements from index 1 to 3):", myArray.slice(1, 4));
console.log("8. Map (double each element):", myArray.map(x => x * 2));
console.log("9. Filter (elements greater than 2):", myArray.filter(x => x > 2));
console.log("10. Reduce (sum of all elements):", myArray.reduce((acc, val) => acc + val, 0));