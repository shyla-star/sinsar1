var str = "today climate is chill and its rainy";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(6));
console.log(str.indexOf("z"));
console.log(str.lastIndexOf("a"));
console.log(str.slice(6,22));
console.log(str.slice(-19,-14));
//substring
let a="javascript";
let c=a.slice(-6);
console.log(c);

let b=a.substring(-9,4)
console.log(b);

//replace
let course="java is very easy to learn and java is more comfortable";
console.log(course.replace("java","javascript"));
//split
console.log(course.split(" "));
//repeat
let fruit="apple"
console.log(fruit.repeat(50));
//trim....removes the whire space both side of string
console.log(fruit.trim());
//Startsmith....it checks the string starts with specific Value
console.log(fruit.startsWith('s'));
//endswith.....it checks the string is ended
console.log(fruit.endsWith('e'));
//includes...checks if the string contains a specified values
console.log(fruit.includes('p'));
//concat....adds two or more string
let firstName="ajay";
let lastName="Kumar";
let fullName=firstName.concat(lastName);
console.log(fullName);
//Match....searches the specified value in a string, if it is then gives the info
console.log(lastName.match('m'));
//Search....searches specific value in string, then it returns index of string
console.log(lastName.search('a'));


