var a=["aswin",56,'latha'];
let b=[2,3,7,9];
//b.push(10);
//console.log(b);
//a.push("ridhi'");
//console.log(a);
//b.pop();
//console.log(b);
//b.shift();
//console.log(b);
//b.unshift(45);
//console.log(b.unshift);
//b.splice(2,0,5);
//console.log(b);
//b.splice(3,1,8);
//console.log(b);
//b.splice(2,0,"sasi","jai");
//console.log(b);
//b.slice(2,1);
//console.log(b);
//console.log(b.concat(a));
let fru=["mango","apple","cherry","apple","Kiwi","orange"];
console.log(fru);
fru1=["grape","pineapple"];
console.log(fru.concat(fru1));
console.log(fru.indexOf("apple"));
console.log(fru.includes("mango"));

console.log(fru.reverse());
console.log(fru.sort());

let num=[78,79,4,89,56,42];
//console.log(num.sort());

//map,filter,reduce
//map...based on a condition it changes the array
let a1=num.map((b)=>{
console.log(b);
return b+1;
});
console.log(a1);
//filter...based on a condition it filter the array
let num1=[3,90,78,67,54,23,1,34];
let num2=num1.filter((b)=>{
    return b>50;
});
console.log(num2);
//reduce...reduce the array value into single value
//=> arrow function to call function within function
let num3=num1.reduce((c,d)=>{
    return c+d;//3-90=-87
});
console.log(num3);


