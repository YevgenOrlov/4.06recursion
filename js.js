// function year(d) {
//   let today = new Date();
//   let year = today.getFullYear();
//   console.log(today.getFullYear());
//   console.log(new Date());
//   return year - d;
// }

// console.log(year(1995));

// function hello() {
//   console.log("hello");
// }
// hello.hi = 123;
// console.log(hello.hi);

// function pEven() {
//   console.log("even");
// }

// function podd() {
//   console.log("odd");
// }

// function myNumber(n, odd, even) {
//   if (n % 2 === 0) return even;
//   else return odd;
// }

// let z = myNumber(8, podd, pEven);
// console.log(z);
// // z();

// const w = [
//   { name: "Kklan", age: 30 },
//   { name: "Ovan", age: 23 },
//   { name: "Lhgan", age: 25 },
//   { name: "Yvghn", age: 28 },
// ];
// // let w1 = [];
// for (let i = 0; i < w.length; i++) {
//   if (w[i].age >= 24) w1.push(w[i]);
// }

// console.log(w1);

// w1 = w.filter(mySort);
// function mySort(it) {
//   if (it.age >= 24) return true;
// }
// console.log(w1);

// w1 = w.filter((k) => k.age >= 24);
// console.log(w1);
//  рекурсия
let k = 0;
let p = "*";
function w() {
  k++;
  p += k + " *";
  if (k >= 55) return;
  w();
}
w();
console.log(p);

// цикл
function w1() {
  for (let k = 0; k <= 31, k++; ) {
    p += k + "*";
  }
}
w1();
console.log(p);
