// Logical assignment - логическое присваивание
// ||= присваивает значение в правой части, если значение слева false иначе
// значение из левой части

let a = null;

// a = a || 20;
a ||= 20;

console.log(a)

// && присваиваниет значение из правой части если левое значение trythy
// let b = 1;
// b = b && 2;
// b &&= 2;

let b = 0;

b &&= 2;

console.log(b)

// ?? = присваивает правое значение если слева null или undefined.

let c = undefined;

// c = c ?? 10;
// c ??= 10;

c = false;
c ??= 10;

console.log(c);
