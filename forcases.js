//for in,for of, for each
//for in ... it iterates over a key of an object
let obj1={
    name:"ram",
    age:35,
    gender:""
};
for(let obj2 in obj1){
    console.log(obj2);
};
//for of ..it iterates over a value of array or string
let arr1=["deepak","charu","anu","arun"];
for(let arr of arr1){
    console.log(arr);
};
//for each...value,index,array
let array=arr1.forEach((x,y,z)=>{
    console.log(x,y,z);
})