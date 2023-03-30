let str = " ";
for (let i = 20; i < 30; i = i + 0.5) {
  str += i + " ";
}
console.log(str);
console.log("<<<second>>>");

let dollar = 27;
let answer = " ";
for (let i = 10; i <= 100; i = i + 10) {
  answer = i * dollar;
  console.log(answer);
}

console.log("<<<third>>>");

let n = 65;
for (let i = 1; i <= 100; i++) {
  if (i ** 2 < n) {
    console.log(i);
  }
}

console.log("<<<four>>>");
let nam = 10;
for (let i = 1; i <= nam; i++) {
  if (i > 3) {
    if (i % 2 === 0 || i % 3 === 0) {
      console.log(i + " no prost");
    } else {
      console.log(i + " prost");
    }
  } else {
    console.log(i + " prost");
  }
}

console.log("<<<five>>>");

let number = 81;
while (number % 3 == 0) {
  number /= 3;
}
console.log(number == 1 ? "Число можно получить " : "Число нельзя получить");
