//class Parent{

 //   Proprtiesss(){
 //       console.log("this is parent property--land");
 //   }
//}
//let pty=new Parent();//Object creation: variabltype referencename=new class name();
//function call: referencename.functionname();
//pty.Proprtiesss();

//class child{
//  Assest(){
//       console.log("this is child property--bike");
//   }
//}
//let Ast=new child();
//Ast.Assest();class child{
//   Assest(){
//       console.log("this is child property--bike");
//   }
//}
//class Child extends Parent{
//  Assest(){
//      console.log("this is child property--bike");
// }
//}
//let Ast=new Child();
//Ast.Assest();//child
//Ast.propertiesss();//parent
//Parent & Grandparent in child
//class Grandparent{
// Agriculture(){
//     console.log("this is grandparent property--agri");
//  }
//}
//class Parent extends Grandparent{
// Propertiesss(){
//    console.log("this is parent property--land");
// }
//}
//class Child extends Parent{
//  Asset(){
//     console.log("this is child Property--bike");
//  }
//}
//let Ast=new Child();
//Ast.Asset();//child
//Ast.propertiesss();//parent
//Ast.Agriculture();
//Super-Key word
class Parent{
    constructor(){
        console.log("this is parent Property--land");
    }
}
    class Child extends Parent{
        constructor(){
            super();
            console.log("this is child property--bike");
            }
    }
let Ast=new Child();






