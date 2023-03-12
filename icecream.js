// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
const newIceCreamFlavours = [...iceCreamFlavours, "root beer"];
console.log(newIceCreamFlavours);
// first flavour


console.log(newIceCreamFlavours[0]); // logs "chocolate"
// last flavour

console.log(newIceCreamFlavours[newIceCreamFlavours.length - 1]); // logs "Root beer"
// total 
console.log(newIceCreamFlavours.length);

