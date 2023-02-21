// let
// if(true){
//     let name = 'jack'
// }
// console.log(name)

function varTest() {
  var x = 8;
  if (true) {
    var x = 10;
    console.log(x);
  }
  console.log(x);
}

function letTest() {
  let x = 8;
  if (true) {
    let x = 10;
    console.log(x);
  }
  console.log(x);
}

varTest();
letTest();

// constant immutable
// const a = 10;
// a = 11
// console.log(a)

// template literal
let name = "SFR";
// let msg = 'welcome '+name+' !';
// let msg = `welcome ${name}`
// console.log(msg)

let a = 8;
let b = 10;
let msg = `The sum is ${a + b}`;
console.log(msg);
