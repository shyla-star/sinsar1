let obj = {
    name:'vijay',
    age: 36,
    gender: 'male'
};
console.log(obj);
console.log(obj.age);//Accessing single value
console.log(obj['name']);//Accessing a single value

obj.mobile_no=1233;//inserting a value to object
obj.name="ram";//updating a value from Object
delete obj.gender;//delete a value from object
console.log(obj);

//Many name or number
let Emp = {
    name:['vijay','arun','linda'],
    age: [36,23,56,12],
    id: [1,2,3,4]
};
console.log(Emp);
console.log('name',Emp.name[0],'age',Emp.age[0],'id',Emp.id[0]);//on one line for one Emp
//this
let person={
    name:'siva',
    age:25,
    role:'developer',
    sayhello:function(){
        console.log('hii this is',this.name,this.age,this.role);

    }
};
person.sayhello();










