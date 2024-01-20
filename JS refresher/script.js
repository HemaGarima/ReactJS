// "use strict"

// let a = 34;
// a = 'This is me.';
// console.log(a);

// function hello(){
//     console.log("Hey Harry");
// }
// hello();

// let obja = {
//     r : 34,
//     m : 64,
//     func : function myfunc(number){
//         console.log("The number is " + number);
//     }
// }
// console.log(obja.r , obja.m , obja.func(45));

// document.addEventListener("click" , function click(){
//     console.log("clicked");
// })

let arr = [ 1,2,3];
// console.log(this);
// function myfunc(number){
//     console.log("The number is " + this);
// }
// let myfunc = (number)=>{
//     console.log("The number is " + this);
// }
// myfunc();

let mobj = {
    a: this,
    myfunc : (number)=>{
        console.log("The number is " + this);
    }
}
mobj.myfunc();
console.log(mobj.a);

setTimeout(()=>{
    console.log("yayy");
},3000);
console.log("mai neeche wali script hoon.");