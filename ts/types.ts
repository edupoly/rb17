function add(a,b);
function add(a,b,c);
function add(a,b,c?){
  return a+b+c;
}

console.log(add(12,34,55));
console.log(add(11,23))
console.log(add())


function jhd(a:number,b:number,c?:number):number{
  return a+b;
}

var x:number = jhd(13,44);

console.log(x)

interface Employee{
  firstname;
  lastname;
  gender?;
}

var employees:Employee[]=[{firstname:'gauri',lastname:'shinde'},{firstname:'drithi',lastname:'komal'}];



var d = 1000;
var a:any;
a = 'raveena';
a = 123;
a = false;

var ar:any[];
ar = [12,45,'praveen',false]

// number,boolean,string,null,undefined,arrays,

