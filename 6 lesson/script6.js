 let value = 10;

 // число в строку 
 value = value + "";
 value = `${value}`;
 value = value.toString();
 value = String(value);

 // строку в число
 value = Number(value);
 value = +value;
 value = "10";
 value = parseInt(value);

 value = "11.111";
 value = parseFloat(value);

 value = 10.12333.toFixed(3);
//  value = parseFloat(10.2323.toFixed(3));

//  console.log(value);
 //-------------------------

 // Casting
value = 10 + '10';
value = 10 * '10';
value = 10 / '10';
value = 10 - '10';
value = 10 % '10';

value = 10 + true;
value = 10 + false;
value = 10 + null;

value = 10 + undefined;
value = 10 + NaN;
value = 10 + [];
value = 10 + {};

value = true + true;
value = true + false;
value = false + false;

// console.log(value);
// --------------------------------------

// == сравниваеться с приведением по одному типу
// === сравниваеться с приведением по значению, без приведения к одному типу

let res;
res = true == true;
res = true === true;
res = true == 1;
res = true === 1;

res = false == 0;
res = false === 0;

res = 1 == "1";
res = 1 === '1';

res = null == undefined;
res = null === undefined;

res = "" == [];
res = "" === [];



console.log(res);