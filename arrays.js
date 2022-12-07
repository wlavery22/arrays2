var cats = ["Amy", "Ann", "Al", "Tim"];
var ages = [5, 10, 15, 20];
var awake = [true, false, true, false];

// This will call the 1st element in the array, it outputs "Amy"
console.log(cats[0]);

// This removes the last element, 20, from the array and returns it.
ages.pop();

// This removes the 1st element, true, from the array and returns it.
awake.shift();

/*
The elements in an array are referred to by their order in the list,
starting with 0, and counting 1, 2, 3...etc. This number, which describes
the location of the element within the list is the element's index position.
You can use this number to call elements from an array, as shown below.
*/
var friends = ["Tom", "Tim", "Ted"];
console.log(friends[0]);
/* 
The above code should call the 1st element in the array, "Tom". The index
position of "Tom", the 1st element, is "0".
*/